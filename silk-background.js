/**
 * Silk — порт шейдеров @react-bits/Silk-JS-CSS на чистый Three.js
 * (без React / react-three/fiber). Параметры — data-* на #silk-bg, цвет — CSS --silk-wave-color
 */
(function () {
  var container = document.getElementById("silk-bg");
  if (!container || typeof THREE === "undefined") return;

  function hexToNormalizedRGB(hex) {
    hex = String(hex).replace("#", "").trim();
    if (hex.length !== 6) return [0.45, 0.125, 0.47];
    return [
      parseInt(hex.slice(0, 2), 16) / 255,
      parseInt(hex.slice(2, 4), 16) / 255,
      parseInt(hex.slice(4, 6), 16) / 255,
    ];
  }

  function readSilkColor() {
    var raw =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--silk-wave-color"
      ) || "#720274";
    return raw.trim();
  }

  function readFloat(datasets, key, fallback) {
    var v = parseFloat(datasets[key]);
    return isNaN(v) ? fallback : v;
  }

  var ds = container.dataset;
  var speed = readFloat(ds, "silkSpeed", 5.8);
  var scale = readFloat(ds, "silkScale", 1.1);
  var noiseIntensity = readFloat(ds, "silkNoise", 0.4);
  var rotation = readFloat(ds, "silkRotation", 1.3);
  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var vertexShader =
    "varying vec2 vUv;\n" +
    "varying vec3 vPosition;\n" +
    "void main() {\n" +
    "  vPosition = position;\n" +
    "  vUv = uv;\n" +
    "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n" +
    "}\n";

  var fragmentShader =
    "varying vec2 vUv;\n" +
    "varying vec3 vPosition;\n" +
    "uniform float uTime;\n" +
    "uniform vec3 uColor;\n" +
    "uniform float uSpeed;\n" +
    "uniform float uScale;\n" +
    "uniform float uRotation;\n" +
    "uniform float uNoiseIntensity;\n" +
    "const float e = 2.71828182845904523536;\n" +
    "float noise(vec2 texCoord) {\n" +
    "  float G = e;\n" +
    "  vec2 r = (G * sin(G * texCoord));\n" +
    "  return fract(r.x * r.y * (1.0 + texCoord.x));\n" +
    "}\n" +
    "vec2 rotateUvs(vec2 uv, float angle) {\n" +
    "  float c = cos(angle);\n" +
    "  float s = sin(angle);\n" +
    "  mat2 rot = mat2(c, -s, s, c);\n" +
    "  return rot * uv;\n" +
    "}\n" +
    "void main() {\n" +
    "  float rnd = noise(gl_FragCoord.xy);\n" +
    "  vec2 uv = rotateUvs(vUv * uScale, uRotation);\n" +
    "  vec2 tex = uv * uScale;\n" +
    "  float tOffset = uSpeed * uTime;\n" +
    "  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);\n" +
    "  float pattern = 0.6 +\n" +
    "    0.4 * sin(5.0 * (tex.x + tex.y +\n" +
    "    cos(3.0 * tex.x + 5.0 * tex.y) +\n" +
    "    0.02 * tOffset) +\n" +
    "    sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));\n" +
    "  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;\n" +
    "  col.a = 1.0;\n" +
    "  gl_FragColor = col;\n" +
    "}\n";

  var colorHex = readSilkColor();
  var rgb = hexToNormalizedRGB(colorHex);
  var uColor = new THREE.Vector3(rgb[0], rgb[1], rgb[2]);

  var uniforms = {
    uTime: { value: 0 },
    uColor: { value: uColor },
    uSpeed: { value: reduceMotion ? 0 : speed },
    uScale: { value: scale },
    uNoiseIntensity: { value: noiseIntensity },
    uRotation: { value: rotation },
  };

  var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    depthWrite: false,
    depthTest: false,
  });

  var geometry = new THREE.PlaneGeometry(1, 1);
  var mesh = new THREE.Mesh(geometry, material);

  var scene = new THREE.Scene();
  scene.add(mesh);

  var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  var dprCap = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dprCap);
  container.appendChild(renderer.domElement);

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    camera.left = -w / 2;
    camera.right = w / 2;
    camera.top = h / 2;
    camera.bottom = -h / 2;
    camera.updateProjectionMatrix();
    mesh.scale.set(w, h, 1);
    renderer.setSize(w, h);
  }

  var last = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    var delta = (now - last) / 1000;
    last = now;
    uniforms.uTime.value += 0.1 * delta;
    renderer.render(scene, camera);
  }

  resize();
  window.addEventListener("resize", resize);

  try {
    renderer.render(scene, camera);
    if (!reduceMotion) requestAnimationFrame(animate);
  } catch (err) {
    container.innerHTML = "";
    container.classList.add("silk-bg-layer--failed");
  }
})();

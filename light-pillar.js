/**
 * LightPillar — порт @react-bits/LightPillar на чистый Three.js (без React).
 * Параметры: data-* на контейнере (см. index.html).
 */
(function () {
  var container = document.getElementById("light-pillar-bg");
  if (!container || typeof THREE === "undefined") return;

  function readFloat(ds, key, fallback) {
    var v = parseFloat(ds[key]);
    return isNaN(v) ? fallback : v;
  }

  function readBool(ds, key, fallback) {
    if (ds[key] === undefined) return fallback;
    return ds[key] === "true" || ds[key] === "1";
  }

  function readColor(ds, key, fallback) {
    var v = ds[key];
    return v && String(v).trim() ? String(v).trim() : fallback;
  }

  var ds = container.dataset;
  /* Три цвета «ленты»: слева бирюза → центр фиолет бренда → справа магента */
  var leftColor = readColor(ds, "lpLeftColor", "#00e8ec");
  var midColor = readColor(ds, "lpMidColor", "#8b0f9e");
  var rightColor = readColor(ds, "lpRightColor", "#ff2ee6");
  var intensity = readFloat(ds, "lpIntensity", 1.55);
  var rotationSpeed = readFloat(ds, "lpRotationSpeed", 0.85);
  var interactive = readBool(ds, "lpInteractive", false);
  var glowAmount = readFloat(ds, "lpGlowAmount", 0.0075);
  var pillarWidth = readFloat(ds, "lpPillarWidth", 4.8);
  var pillarHeight = readFloat(ds, "lpPillarHeight", 0.42);
  var noiseIntensity = readFloat(ds, "lpNoiseIntensity", 0.72);
  var pillarRotation = readFloat(ds, "lpPillarRotation", 88);
  var bandVignette = readFloat(ds, "lpBandVignette", 2.35);
  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768;

  var iterations = isMobile ? 24 : 40;
  var waveIterations = isMobile ? 1 : 2;
  var stepMultiplier = isMobile ? 1.5 : 1.2;
  var pixelRatio = Math.min(
    window.devicePixelRatio || 1,
    isMobile ? 1 : 2
  );

  function parseColor(hex) {
    var c = new THREE.Color(hex);
    return new THREE.Vector3(c.r, c.g, c.b);
  }

  var vertexShader =
    "varying vec2 vUv;\n" +
    "void main() {\n" +
    "  vUv = uv;\n" +
    "  gl_Position = vec4(position, 1.0);\n" +
    "}\n";

  var fragmentShader =
    "uniform float uTime;\n" +
    "uniform vec2 uResolution;\n" +
    "uniform vec2 uMouse;\n" +
    "uniform vec3 uLeftColor;\n" +
    "uniform vec3 uMidColor;\n" +
    "uniform vec3 uRightColor;\n" +
    "uniform float uBandVignette;\n" +
    "uniform float uIntensity;\n" +
    "uniform bool uInteractive;\n" +
    "uniform float uGlowAmount;\n" +
    "uniform float uPillarWidth;\n" +
    "uniform float uPillarHeight;\n" +
    "uniform float uNoiseIntensity;\n" +
    "uniform float uPillarRotation;\n" +
    "uniform float uRotCos;\n" +
    "uniform float uRotSin;\n" +
    "uniform float uPillarRotCos;\n" +
    "uniform float uPillarRotSin;\n" +
    "uniform float uWaveSin[4];\n" +
    "uniform float uWaveCos[4];\n" +
    "varying vec2 vUv;\n" +
    "const float PI = 3.141592653589793;\n" +
    "const float EPSILON = 0.001;\n" +
    "const float E = 2.71828182845904523536;\n" +
    "float noise(vec2 coord) {\n" +
    "  vec2 r = (E * sin(E * coord));\n" +
    "  return fract(r.x * r.y * (1.0 + coord.x));\n" +
    "}\n" +
    "vec3 triColor(float x, vec3 a, vec3 b, vec3 c) {\n" +
    "  float t = clamp(x, 0.0, 1.0);\n" +
    "  float t1 = min(t * 2.0, 1.0);\n" +
    "  float t2 = max(0.0, (t - 0.5) * 2.0);\n" +
    "  vec3 leftPart = mix(a, b, t1);\n" +
    "  vec3 rightPart = mix(b, c, t2);\n" +
    "  return mix(leftPart, rightPart, step(0.5, t));\n" +
    "}\n" +
    "void main() {\n" +
    "  vec2 fragCoord = vUv * uResolution;\n" +
    "  vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;\n" +
    "  uv = vec2(\n" +
    "    uv.x * uPillarRotCos - uv.y * uPillarRotSin,\n" +
    "    uv.x * uPillarRotSin + uv.y * uPillarRotCos\n" +
    "  );\n" +
    "  vec3 origin = vec3(0.0, 0.0, -10.0);\n" +
    "  vec3 direction = normalize(vec3(uv, 1.0));\n" +
    "  float maxDepth = 50.0;\n" +
    "  float depth = 0.1;\n" +
    "  float rotCos = uRotCos;\n" +
    "  float rotSin = uRotSin;\n" +
    "  if(uInteractive && length(uMouse) > 0.0) {\n" +
    "    float mouseAngle = uMouse.x * PI * 2.0;\n" +
    "    rotCos = cos(mouseAngle);\n" +
    "    rotSin = sin(mouseAngle);\n" +
    "  }\n" +
    "  vec3 color = vec3(0.0);\n" +
    "  for(int i = 0; i < " +
    iterations +
    "; i++) {\n" +
    "    vec3 pos = origin + direction * depth;\n" +
    "    float newX = pos.x * rotCos - pos.z * rotSin;\n" +
    "    float newZ = pos.x * rotSin + pos.z * rotCos;\n" +
    "    pos.x = newX;\n" +
    "    pos.z = newZ;\n" +
    "    vec3 deformed = pos;\n" +
    "    deformed.y *= uPillarHeight;\n" +
    "    deformed = deformed + vec3(0.0, uTime, 0.0);\n" +
    "    float frequency = 1.0;\n" +
    "    float amplitude = 1.0;\n" +
    "    for(int j = 0; j < " +
    waveIterations +
    "; j++) {\n" +
    "      float wx = deformed.x * uWaveCos[j] - deformed.z * uWaveSin[j];\n" +
    "      float wz = deformed.x * uWaveSin[j] + deformed.z * uWaveCos[j];\n" +
    "      deformed.x = wx;\n" +
    "      deformed.z = wz;\n" +
    "      float phase = uTime * float(j) * 2.0;\n" +
    "      vec3 oscillation = cos(deformed.zxy * frequency - phase);\n" +
    "      deformed += oscillation * amplitude;\n" +
    "      frequency *= 2.0;\n" +
    "      amplitude *= 0.5;\n" +
    "    }\n" +
    "    vec2 cosinePair = cos(deformed.xz);\n" +
    "    float fieldDistance = length(cosinePair) - 0.2;\n" +
    "    float radialBound = length(pos.xz) - uPillarWidth;\n" +
    "    float k = 4.0;\n" +
    "    float h = max(k - abs(-radialBound - (-fieldDistance)), 0.0);\n" +
    "    fieldDistance = -(min(-radialBound, -fieldDistance) - h * h * 0.25 / k);\n" +
    "    fieldDistance = abs(fieldDistance) * 0.15 + 0.01;\n" +
    "    float flowX = vUv.x + sin(uTime * 0.26 + vUv.y * 5.1) * 0.045;\n" +
    "    flowX += sin(uTime * 0.14 + pos.z * 0.08) * 0.028;\n" +
    "    vec3 gradient = triColor(clamp(flowX, 0.0, 1.0), uLeftColor, uMidColor, uRightColor);\n" +
    "    color += gradient / fieldDistance;\n" +
    "    if(fieldDistance < EPSILON || depth > maxDepth) break;\n" +
    "    depth += fieldDistance * " +
    stepMultiplier.toFixed(1) +
    ";\n" +
    "  }\n" +
    "  float widthNormalization = uPillarWidth / 3.0;\n" +
    "  color = tanh(color * uGlowAmount / widthNormalization);\n" +
    "  float rnd = noise(gl_FragCoord.xy + vec2(uTime * 40.0));\n" +
    "  color -= rnd / 14.0 * uNoiseIntensity;\n" +
    "  float vy = abs(vUv.y - 0.5) * 2.0;\n" +
    "  float band = 1.0 - pow(vy, uBandVignette);\n" +
    "  band = smoothstep(0.02, 1.0, band);\n" +
    "  color *= band;\n" +
    "  gl_FragColor = vec4(color * uIntensity, 1.0);\n" +
    "}\n";

  var width = container.clientWidth || window.innerWidth;
  var height = container.clientHeight || window.innerHeight;

  var scene = new THREE.Scene();
  var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: isMobile ? "low-power" : "high-performance",
      stencil: false,
      depth: false,
    });
  } catch (e) {
    container.classList.add("light-pillar-layer--failed");
    return;
  }

  renderer.setSize(width, height);
  renderer.setPixelRatio(pixelRatio);
  container.appendChild(renderer.domElement);

  var waveAngle = 0.4;
  var waveSinValues = new Float32Array(4);
  var waveCosValues = new Float32Array(4);
  for (var i = 0; i < 4; i++) {
    waveSinValues[i] = Math.sin(waveAngle);
    waveCosValues[i] = Math.cos(waveAngle);
  }

  var pillarRotRad = (pillarRotation * Math.PI) / 180;
  var pillarRotCos = Math.cos(pillarRotRad);
  var pillarRotSin = Math.sin(pillarRotRad);

  var mouse = new THREE.Vector2(0, 0);
  var timeRef = 0;

  var material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: mouse },
      uLeftColor: { value: parseColor(leftColor) },
      uMidColor: { value: parseColor(midColor) },
      uRightColor: { value: parseColor(rightColor) },
      uBandVignette: { value: bandVignette },
      uIntensity: { value: intensity },
      uInteractive: { value: interactive },
      uGlowAmount: { value: glowAmount },
      uPillarWidth: { value: pillarWidth },
      uPillarHeight: { value: pillarHeight },
      uNoiseIntensity: { value: noiseIntensity },
      uPillarRotation: { value: pillarRotation },
      uRotCos: { value: 1 },
      uRotSin: { value: 0 },
      uPillarRotCos: { value: pillarRotCos },
      uPillarRotSin: { value: pillarRotSin },
      uWaveSin: { value: waveSinValues },
      uWaveCos: { value: waveCosValues },
    },
    transparent: true,
    depthWrite: false,
    depthTest: false,
  });

  var geometry = new THREE.PlaneGeometry(2, 2);
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  var mouseMoveTimeout = null;
  function handleMouseMove(event) {
    if (!interactive) return;
    if (mouseMoveTimeout) return;
    mouseMoveTimeout = window.setTimeout(function () {
      mouseMoveTimeout = null;
    }, 16);
    var rect = container.getBoundingClientRect();
    var x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    var y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    mouse.set(x, y);
  }

  if (interactive) {
    container.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });
  }

  var lastTime = performance.now();
  var frameTime = 1000 / (isMobile ? 30 : 60);

  function resize() {
    var w = container.clientWidth || window.innerWidth;
    var h = container.clientHeight || window.innerHeight;
    renderer.setSize(w, h);
    material.uniforms.uResolution.value.set(w, h);
  }

  var resizeTimeout = null;
  function onResize() {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(resize, 150);
  }

  window.addEventListener("resize", onResize, { passive: true });

  function animate(currentTime) {
    requestAnimationFrame(animate);
    if (reduceMotion) {
      renderer.render(scene, camera);
      return;
    }
    var deltaTime = currentTime - lastTime;
    if (deltaTime < frameTime) return;

    var dt = deltaTime / 1000;
    timeRef += dt * rotationSpeed * 1.15;
    material.uniforms.uTime.value = timeRef;
    var rotAngle = timeRef * 0.32;
    material.uniforms.uRotCos.value = Math.cos(rotAngle);
    material.uniforms.uRotSin.value = Math.sin(rotAngle);

    renderer.render(scene, camera);
    lastTime = currentTime - (deltaTime % frameTime);
  }

  resize();
  try {
    renderer.render(scene, camera);
    if (!reduceMotion) requestAnimationFrame(animate);
  } catch (err) {
    container.innerHTML = "";
    container.classList.add("light-pillar-layer--failed");
  }
})();

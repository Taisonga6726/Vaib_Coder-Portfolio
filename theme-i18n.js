/**
 * Тема (dark / light) и язык (ru / en).
 * Язык: перезагрузка страницы для корректного typewriter и единообразия.
 */
(function () {
  var STORAGE_THEME = "tg-theme";
  var STORAGE_LANG = "tg-lang";

  var EN = {
    docTitle: "Vibe Coder · Art Studio «Thin Edge»",
    metaDesc:
      "Websites, interfaces & digital projects: vibe, style & systems. Vibe-coding and the art of technology.",

    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contacts": "Contact",
    "nav.cta": "Discuss a project",

    "hero.kicker": "AI PRODUCTION OF A NEW GENERATION",
    "hero.tag": "TANYA GAIDUK · VIBE CODER · WEB & AI EXPERIENCES",
    "hero.line1": "I build websites, interfaces and digital projects",
    "hero.line2": "that feel like a vibe and work like a system",
    "hero.lead":
      "Not just “throw something together”, but shape feeling, style, logic and delivery so people want to open, scroll and remember the project.",
    "hero.btn.projects": "View projects",
    "hero.btn.discuss": "Discuss a task",
    "hero.btn.portfolio": "Portfolio online",
    "hero.motto": "My principle. My rhythm. My path.",

    "about.title": "I don’t just write code — I craft an impression",
    "about.p1.before": "I work at the intersection of ",
    "about.p1.gold": "code",
    "about.p1.mid": ", ",
    "about.p1.magenta": "visuals",
    "about.p1.after": ", UX and AI tools.",
    "about.p2":
      "For me, a site isn’t a stack of blocks. It’s the feeling of a project, rhythm, delivery, structure and how a person feels inside the interface.",
    "about.p3": "I build:",
    "about.li1": "landing pages",
    "about.li2": "portfolios",
    "about.li3": "promo pages",
    "about.li4": "interfaces",
    "about.li5": "special projects",
    "about.li6": "digital concepts",
    "about.li7": "AI-first sites and products",
    "about.p4.before": "My approach is to make it ",
    "about.p4.gold": "fast",
    "about.p4.mid": ", ",
    "about.p4.magenta": "beautiful",
    "about.p4.after":
      " and thoughtful — so the project doesn’t look like another soulless template.",

    "services.title": "What I do",
    "svc1.t": "Landing pages",
    "svc1.p":
      "Sites that don’t just “exist” — they grab attention, keep rhythm and guide people through meaning.",
    "svc2.t": "Portfolios & personal sites",
    "svc2.p": "Pages that show not only work but style, character and level.",
    "svc3.t": "Visual concepts",
    "svc3.p":
      "When you need more than a site — atmosphere, character, mood and delivery.",
    "svc4.t": "AI Web",
    "svc4.p":
      "I use neural nets to accelerate and amplify ideas — not to replace thinking.",
    "svc5.t": "UX & structure",
    "svc5.p":
      "I think through how people read, where they look, where they get lost and where they decide.",
    "svc6.t": "Fast launch",
    "svc6.p":
      "I can ship a strong first version quickly — without months of endless approvals.",

    "process.title": "How I work",
    "pr1.t": "Vibe first",
    "pr1.p":
      "I look not only at the task but at the feeling the project should convey — taste, colour, rhythm. That defines everything else.",
    "pr2.t": "Then structure",
    "pr2.p":
      "A beautiful site without logic is just a pretty shell. So I assemble meaning, scenario and user journey — every block in place, every screen with a job.",
    "pr3.t": "Then implementation",
    "pr3.p":
      "With style and logic in place, the project ships faster, sharper and stronger — without endless iterations.",

    "projects.title": "Selected projects",

    "why.title": "Why people come to me for more than code",
    "why.p1.before": "Because I can see a project ",
    "why.p1.gold": "as a whole",
    "why.p1.after": ".",
    "why.sub1": "Not only:",
    "why.li_a1": "how to assemble it",
    "why.sub2": "But also:",
    "why.li_b1": "how to present it",
    "why.li_b2": "how it will be perceived",
    "why.li_b3": "where the gaze will catch",
    "why.li_b4": "what will be remembered",
    "why.li_b5": "why it will look more expensive than it costs",
    "why.close.before": "I combine ",
    "why.close.m1": "aesthetics",
    "why.close.plus1": " + ",
    "why.close.g1": "structure",
    "why.close.plus2": " + ",
    "why.close.m2": "digital thinking",
    "why.close.plus3": " + ",
    "why.close.g2": "speed",

    "stack.title": "Tools",
    "stack.note.before": "But honestly — the main tool isn’t the stack, it’s ",
    "stack.note.g1": "taste",
    "stack.note.mid1": ", ",
    "stack.note.g2": "visual culture",
    "stack.note.mid2": " and the ability to build a ",
    "stack.note.g3": "cohesive impression",
    "stack.note.after": ".",

    "audience.title": "Who my work is for",
    "aud1": "experts who need strong packaging",
    "aud2": "creators and AI specialists",
    "aud3": "digital projects and startups",
    "aud4": "AI products that need a top-tier site",
    "aud5": "studios and agencies",
    "aud6.before": "those who need a site with ",
    "aud6.magenta": "character",
    "aud6.after": "",
    "aud7": "those who don’t want a faceless template page",

    "quote.text":
      "“A good site isn’t when it’s ‘okay coded’. It’s when the project gains energy, form and the feeling that it’s alive.”",
    "quote.author": "— Art of Technology",

    "cta.title":
      "If you need a site that looks strong and feels modern — let’s build it",
    "cta.p":
      "I can help with concept, structure, packaging and implementation — from the first vibe to a finished page.",
    "cta.motto": "My principle. My rhythm. My path.",
    "cta.btn.tg": "Message on Telegram",
    "cta.btn.form": "Send a request",
    "cta.btn.works": "View work",

    "footer.tagline":
      "Art Studio «Thin Edge» · Art of Technology · Vibe-Coding",
    "footer.copy":
      "IE Gaiduk T.M. · © 2026 · Art Studio «Thin Edge» · Art of Technology",

    "modal.title": "Quick request",
    "modal.hint.before": "Write a few lines about the task — your mail client will open with ready text. Or go straight to ",
    "modal.hint.telegram": "Telegram",
    "modal.hint.after": ".",
    "modal.name": "Name",
    "modal.email": "Email",
    "modal.msg": "About the task",
    "modal.placeholder": "Site, timeline, references…",
    "modal.submit": "Open email draft",

    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "lang.label": "Language",
  };

  function getStoredLang() {
    return localStorage.getItem(STORAGE_LANG) || "ru";
  }

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_THEME) || "dark";
  }

  function setTheme(theme) {
    if (theme !== "light" && theme !== "dark") theme = "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? EN["theme.toLight"] : EN["theme.toDark"]
      );
      btn.setAttribute(
        "title",
        theme === "dark" ? EN["theme.toLight"] : EN["theme.toDark"]
      );
    }
  }

  function toggleTheme() {
    var cur = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(cur === "dark" ? "light" : "dark");
  }

  function applyEnglish() {
    document.documentElement.lang = "en";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", EN.metaDesc);
    document.title = EN.docTitle;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && EN[key]) el.textContent = EN[key];
    });

    var h = document.getElementById("heroHeadline");
    if (h) {
      h.setAttribute("data-line1", EN["hero.line1"] + ",");
      h.setAttribute("data-line2", EN["hero.line2"]);
      h.setAttribute(
        "aria-label",
        EN["hero.line1"] + " " + EN["hero.line2"]
      );
    }

    /* about block with inner spans */
    var ap1 = document.getElementById("about-p1");
    if (ap1) {
      ap1.innerHTML =
        EN["about.p1.before"] +
        '<span class="accent-gold">' +
        EN["about.p1.gold"] +
        "</span>" +
        EN["about.p1.mid"] +
        '<span class="accent-magenta">' +
        EN["about.p1.magenta"] +
        "</span>" +
        EN["about.p1.after"];
    }
    var ap4 = document.getElementById("about-p4");
    if (ap4) {
      ap4.innerHTML =
        EN["about.p4.before"] +
        '<span class="accent-gold">' +
        EN["about.p4.gold"] +
        "</span>" +
        EN["about.p4.mid"] +
        '<span class="accent-magenta">' +
        EN["about.p4.magenta"] +
        "</span>" +
        EN["about.p4.after"];
    }

    var wclose = document.getElementById("why-closing");
    if (wclose) {
      wclose.innerHTML =
        EN["why.close.before"] +
        '<span class="accent-magenta">' +
        EN["why.close.m1"] +
        "</span>" +
        EN["why.close.plus1"] +
        '<span class="accent-gold">' +
        EN["why.close.g1"] +
        "</span>" +
        EN["why.close.plus2"] +
        '<span class="accent-magenta">' +
        EN["why.close.m2"] +
        "</span>" +
        EN["why.close.plus3"] +
        '<span class="accent-gold">' +
        EN["why.close.g2"] +
        "</span>";
    }

    var wp1 = document.getElementById("why-p1");
    if (wp1) {
      wp1.innerHTML =
        EN["why.p1.before"] +
        '<span class="accent-gold">' +
        EN["why.p1.gold"] +
        "</span>" +
        EN["why.p1.after"];
    }

    var aud6 = document.getElementById("audience-li6");
    if (aud6) {
      aud6.innerHTML =
        EN["aud6.before"] +
        '<span class="magenta">' +
        EN["aud6.magenta"] +
        "</span>" +
        EN["aud6.after"];
    }

    var sn = document.getElementById("stack-note");
    if (sn) {
      sn.innerHTML =
        EN["stack.note.before"] +
        '<span class="gold">' +
        EN["stack.note.g1"] +
        "</span>" +
        EN["stack.note.mid1"] +
        '<span class="gold">' +
        EN["stack.note.g2"] +
        "</span>" +
        EN["stack.note.mid2"] +
        '<span class="gold">' +
        EN["stack.note.g3"] +
        "</span>" +
        EN["stack.note.after"];
    }

    var mh = document.getElementById("modal-hint");
    if (mh) {
      mh.innerHTML =
        EN["modal.hint.before"] +
        '<a href="https://t.me/artsonga" target="_blank" rel="noopener noreferrer">' +
        EN["modal.hint.telegram"] +
        "</a>" +
        EN["modal.hint.after"];
    }

    var ta = document.querySelector("#contactForm textarea");
    if (ta && EN["modal.placeholder"]) ta.placeholder = EN["modal.placeholder"];
  }

  function setLangButtons(lang) {
    document.querySelectorAll(".ui-lang__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
  }

  function initLangSwitch() {
    document.querySelectorAll(".ui-lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (!lang || lang === getStoredLang()) return;
        localStorage.setItem(STORAGE_LANG, lang);
        location.reload();
      });
    });
  }

  function initThemeToggle() {
    var btn = document.getElementById("themeToggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  }

  function init() {
    setTheme(getStoredTheme());
    var lang = getStoredLang();
    setLangButtons(lang);
    if (lang === "en") applyEnglish();
    initLangSwitch();
    initThemeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

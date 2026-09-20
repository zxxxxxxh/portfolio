/* ==========================================================================
   页面逻辑：项目渲染、导航交互、滚动显现
   ========================================================================== */
(function () {
  "use strict";

  var pad2 = function (n) { return String(n).padStart(2, "0"); };

  /* ---------- 项目渲染 ---------- */
  var listEl = document.getElementById("projectList");
  var countEl = document.getElementById("worksCount");

  /* 未指定 layout 时按顺序交替：文左图右 / 图左文右 */
  function fallbackLayout(index) {
    return index % 2 === 0 ? "right" : "left";
  }

  function projectTemplate(p, index) {
    var layout = p.layout || fallbackLayout(index);
    var loading = index === 0 ? "eager" : "lazy";
    var tech = p.tech
      .map(function (t) { return "<li>" + t + "</li>"; })
      .join("");

    return (
      '<article class="project project--' + layout + ' reveal" id="project-' + p.id + '">' +
        '<div class="container project-grid">' +
          '<figure class="project-media">' +
            '<div class="media-frame">' +
              '<img src="' + p.image.src + '" alt="' + p.image.alt + '" loading="' + loading + '">' +
            "</div>" +
            '<figcaption class="media-caption mono">' + (p.en || "") + "</figcaption>" +
          "</figure>" +
          '<div class="project-body">' +
            '<div class="project-meta mono">' +
              '<span class="project-no">(' + pad2(index + 1) + ")</span>" +
              '<span class="tag"><i></i>' + p.category + "</span>" +
              '<span class="project-date">' + p.date + "</span>" +
            "</div>" +
            '<h3 class="project-title">' + p.title + "</h3>" +
            '<p class="project-desc">' + p.desc + "</p>" +
            '<ul class="project-tech mono">' + tech + "</ul>" +
            '<a class="project-link" href="' + (p.link || "#") + '">查看项目<span>→</span></a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  if (listEl) {
    listEl.innerHTML = PROJECTS.map(projectTemplate).join("");
  }
  if (countEl) {
    countEl.textContent = "(" + pad2(PROJECTS.length) + ")";
  }

  /* ---------- 顶部导航：滚动后显示底边线 ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 移动端菜单 ---------- */
  var toggle = document.getElementById("navToggle");
  function closeMenu() {
    document.body.classList.remove("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  Array.prototype.forEach.call(
    document.querySelectorAll(".site-nav a"),
    function (a) { a.addEventListener("click", closeMenu); }
  );

  /* ---------- 滚动显现（一次性淡入） ---------- */
  var revealed = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    Array.prototype.forEach.call(revealed, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(revealed, function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- 页脚年份 ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

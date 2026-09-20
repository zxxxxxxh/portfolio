/* ==========================================================================
   深浅色主题切换：尽早应用已保存的主题，避免页面闪烁
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function getStoredTheme() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return v === "dark" || v === "light" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  /* 立即应用：优先用户上次选择，否则默认浅色（保持原有视觉风格） */
  var current = getStoredTheme() || "light";
  applyTheme(current);

  function syncButton(btn, theme) {
    if (!btn) return;
    var dark = theme === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.querySelector(".theme-toggle-icon").textContent = dark
      ? btn.getAttribute("data-icon-light")
      : btn.getAttribute("data-icon-dark");
    btn.querySelector(".theme-toggle-text").textContent = dark ? "浅色" : "深色";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("themeToggle");
    syncButton(btn, root.getAttribute("data-theme"));
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* localStorage 不可用时静默降级 */
      }
      syncButton(btn, next);
    });
  });
})();

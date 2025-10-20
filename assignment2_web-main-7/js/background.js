document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeBtn");
    if (!themeBtn) return;

    const THEME_KEY = "preferredTheme";

    function applyTheme(theme) {
        const isDark = theme === "dark";
        document.body.classList.toggle("dark-mode", isDark);
        themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    }

    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") {
        applyTheme(saved);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? "dark" : "light");
    }

    themeBtn.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
        applyTheme(nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
    });
});


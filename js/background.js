document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeBtn");
    const colors = [
        "#f5f7fa", "#e0f2fe", "#fef9c3", "#fde68a", "#fbcfe8", "#bbf7d0",
        "#d1fae5", "#d6bcfa", "#f9a8d4", "#a5b4fc", "#34d399", "#f0abfc",
        "#fdba74", "#d97706", "#6b7280", "#c7d2fe", "#c4b5fd", "#6ee7b7"
    ];
    let index = 0;

    btn.addEventListener("click", () => {
        document.body.style.transition = "background-color 0.6s ease";
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    });
});

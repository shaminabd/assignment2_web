document.addEventListener("DOMContentLoaded", () => {
    const datetimeElement = document.getElementById("datetime");

    function updateTime() {
        const now = new Date();
        const options = {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        };
        datetimeElement.textContent = now.toLocaleString("en-US", options);
    }

    updateTime();
    setInterval(updateTime, 1000);
});

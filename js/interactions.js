document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreContent = document.getElementById("moreContent");
    if (readMoreBtn && moreContent) {
        readMoreBtn.addEventListener("click", () => {
            const isHidden = moreContent.style.display === "none" || moreContent.style.display === "";
            moreContent.style.display = isHidden ? "block" : "none";
            readMoreBtn.textContent = isHidden ? "Read Less" : "Read More";
        });
    }

    const showTimeBtn = document.getElementById("showTimeBtn");
    const timeOutput = document.getElementById("timeOutput");
    if (showTimeBtn && timeOutput) {
        showTimeBtn.addEventListener("click", () => {
            const isHidden = timeOutput.style.display === "none" || timeOutput.style.display === "" || !timeOutput.textContent;
            if (isHidden) {
                const now = new Date().toLocaleTimeString();
                timeOutput.textContent = now;
                timeOutput.style.display = "block";
                showTimeBtn.textContent = "Hide Current Time";
            } else {
                timeOutput.style.display = "none";
                showTimeBtn.textContent = "Show Current Time";
            }
        });
    }
});




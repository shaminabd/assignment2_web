document.addEventListener("DOMContentLoaded", () => {
    const ratingContainer = document.getElementById("rating");
    const ratingValue = document.getElementById("ratingValue");
    if (!ratingContainer) return;

    const stars = Array.from(ratingContainer.querySelectorAll(".star"));
    let currentRating = 0;
    const labels = { 1: "Poor", 2: "Fair", 3: "Good", 4: "Very good", 5: "Excellent!" };

    function render(rating) {
        stars.forEach((starEl, idx) => {
            const fill = idx < rating;
            starEl.classList.toggle("filled", fill);
            starEl.setAttribute("aria-checked", String(fill && idx === rating - 1));
        });
        if (rating > 0) {
            const label = labels[rating] || "";
            ratingValue.textContent = `You rated ${rating} / 5 — ${label}`;
        } else {
            ratingValue.textContent = "";
        }
    }

    function handleHover(index) {
        render(index + 1);
    }

    function handleLeave() {
        render(currentRating);
    }

    function handleClick(index) {
        currentRating = index + 1;
        render(currentRating);
    }

    stars.forEach((starEl, index) => {
        starEl.addEventListener("mouseenter", () => handleHover(index));
        starEl.addEventListener("mouseleave", handleLeave);
        starEl.addEventListener("click", () => handleClick(index));
        starEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick(index);
            }
        });
        starEl.setAttribute("tabindex", "0");
    });

    // Initialize
    render(0);
});



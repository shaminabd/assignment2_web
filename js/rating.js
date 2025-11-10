document.addEventListener("DOMContentLoaded", () => {
    const ratingContainer = document.getElementById("rating");
    const ratingValue = document.getElementById("ratingValue");
    if (!ratingContainer) return;

    const stars = Array.from(ratingContainer.querySelectorAll(".star"));
    let currentRating = 0;
    const labels = { 1: "Poor", 2: "Fair", 3: "Good", 4: "Very good", 5: "Excellent!" };

    let rafId = null;

    function renderNow(rating) {
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

    function render(rating) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => renderNow(rating));
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
        try {
            const star = stars[index];
            star.style.transition = 'transform 150ms ease';
            star.style.transform = 'scale(1.15)';
            setTimeout(() => { star.style.transform = 'scale(1)'; }, 160);
        } catch (_) {}

        // Save rating to local storage
        saveRating(currentRating);

        if (typeof showToast === 'function') {
            const label = labels[currentRating] || '';
            showToast(`Thanks! Rated ${currentRating}/5 ${label ? '— ' + label : ''}`, 'success');
        }
    }

    // Save rating to local storage
    function saveRating(rating) {
        const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
        const newRating = {
            rating: rating,
            name: 'Platform Experience',
            timestamp: new Date().toISOString()
        };
        ratings.push(newRating);
        localStorage.setItem('ratings', JSON.stringify(ratings));
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

    render(0);
});




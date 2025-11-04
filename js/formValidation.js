document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("nameInput").value.trim();
        const email = document.getElementById("emailInput").value.trim();
        const message = document.getElementById("messageTextarea").value.trim();

        document.querySelectorAll(".error-message").forEach((el) => el.remove());

        let isValid = true;

        if (name === "") {
            showError("nameInput", "Name cannot be empty");
            isValid = false;
        }

        if (!validateEmail(email)) {
            showError("emailInput", "Please enter a valid email address");
            isValid = false;
        }

        if (message.length < 10) {
            showError("messageTextarea", "Message must be at least 10 characters long");
            isValid = false;
        }

        if (isValid) {
            playClickTone();
            if (typeof showToast === 'function') {
                showToast('Form submitted successfully!', 'success');
            }
            form.reset();
        }
    });

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function showError(id, message) {
        const input = document.getElementById(id);
        const error = document.createElement("small");
        error.classList.add("error-message");
        error.style.color = "red";
        error.style.display = "block";
        error.style.marginTop = "5px";
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    function playClickTone() {
        try {
            const sources = [
                'images/audio/e1axmfsi497-right-answer-sfx-8.mp3',
                '../images/audio/e1axmfsi497-right-answer-sfx-8.mp3'
            ];
            const audio = new Audio();
            audio.volume = 0.25;
            const tryPlay = (i) => {
                if (i >= sources.length) return;
                audio.src = sources[i];
                audio.play().catch(() => tryPlay(i + 1));
            };
            tryPlay(0);
        } catch (_) {}
    }
});

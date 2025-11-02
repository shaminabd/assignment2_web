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
            alert("Form submitted successfully!");
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
            const ctx = new (window.AudioContext || window.webkitAudioContext)();

            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const o = ctx.createOscillator();
            const g = ctx.createGain();

            o.type = 'sine';
            o.frequency.value = 880;

            g.gain.setValueAtTime(0.3, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

            o.connect(g);
            g.connect(ctx.destination);

            o.start(ctx.currentTime);
            o.stop(ctx.currentTime + 0.15);

            console.log('Sound played successfully');
        } catch (err) {
            console.error('Error playing sound:', err);
        }
    }
});

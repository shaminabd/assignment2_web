document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbarNav");
    if (nav) {
        const items = Array.from(nav.querySelectorAll('.navbar-nav .nav-link'));
        items.forEach((el, idx) => {
            el.setAttribute('tabindex', '0');
            el.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    const next = items[(idx + 1) % items.length];
                    next.focus();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prev = items[(idx - 1 + items.length) % items.length];
                    prev.focus();
                }
            });
        });
    }

    const dynamicContainer = document.getElementById('dynamicHighlights');
    if (dynamicContainer) {
        const highlightFactory = (icon, text) => ({ icon, text, render() { return `<li>${this.icon} ${this.text}</li>`; } });
        const highlights = [
            highlightFactory('⚡', 'Fast-track practice tasks'),
            highlightFactory('🧠', 'Concept checks after each module'),
            highlightFactory('🏆', 'Certificate-ready projects')
        ];
        dynamicContainer.innerHTML = highlights.map(h => h.render()).join('');
    }

    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');
    if (contactForm && contactStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const payload = Object.fromEntries(formData.entries());
            setTimeout(() => {
                contactStatus.textContent = `Thanks, ${payload.name}. We will contact you at ${payload.email}.`;
                contactStatus.style.transition = 'transform 300ms ease, opacity 300ms ease';
                contactStatus.style.transform = 'scale(1.03)';
                contactStatus.style.opacity = '1';
                playClickTone();
                setTimeout(() => { contactStatus.style.transform = 'scale(1)'; }, 320);
                contactForm.reset();
            }, 400);
        });
    }

    function playClickTone() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = 'sine';
            o.frequency.value = 880;
            g.gain.value = 0.001;
            o.connect(g);
            g.connect(ctx.destination);
            o.start();
            g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.12);
            o.stop(ctx.currentTime + 0.13);
        } catch (_) {}
    }

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.getElementById('heroSubtitle');
        const whyTitle = document.getElementById('whyTitle');
        const availableTitle = document.getElementById('availableTitle');
        function applyLang(lang) {
            switch (lang) {
                case 'ru':
                    heroTitle.textContent = 'Добро пожаловать в MacOStar Online Learning';
                    heroSubtitle.textContent = 'Изучайте наши курсы программирования и начните карьеру в IT!';
                    whyTitle.textContent = 'Почему выбирают наши курсы?';
                    availableTitle.textContent = 'Доступные курсы';
                    break;
                case 'kk':
                    heroTitle.textContent = 'MacOStar Online Learning платформасына қош келдіңіз';
                    heroSubtitle.textContent = 'Бағдарламалау курстарын оқып, IT мансабыңызды бастаңыз!';
                    whyTitle.textContent = 'Неге біздің курстар?';
                    availableTitle.textContent = 'Қолжетімді курстар';
                    break;
                case 'en':
                default:
                    heroTitle.textContent = 'Welcome to MacOStar Online Learning';
                    heroSubtitle.textContent = 'Explore our programming courses and start your IT career today!';
                    whyTitle.textContent = 'Why Choose Our Courses?';
                    availableTitle.textContent = 'Available Courses';
            }
        }
        applyLang(langSelect.value);
        langSelect.addEventListener('change', () => applyLang(langSelect.value));
    }
});



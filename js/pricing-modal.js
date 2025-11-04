document.addEventListener("DOMContentLoaded", () => {
    const planModal = document.getElementById('planModal');
    const planForm = document.getElementById('planForm');
    const planModalTitle = document.getElementById('planModalTitle');
    const planModalDescription = document.getElementById('planModalDescription');
    let selectedPlan = '';

    const planNames = {
        'starter': 'Starter Plan',
        'pro': 'Pro Plan',
        'team': 'Team Plan',
        'student': 'Student Plan',
        'mentor': 'Mentor Plan',
        'enterprise': 'Enterprise Plan'
    };

    window.openPlanModal = function(planType) {
        selectedPlan = planType;
        const planName = planNames[planType] || 'Plan';
        planModalTitle.textContent = `Choose ${planName}`;
        planModalDescription.textContent = `Please provide your information to proceed with the ${planName}.`;
        planModal.style.display = 'flex';
    };

    window.closePlanModal = function() {
        planModal.style.display = 'none';
        if (planForm) {
            planForm.reset();
        }
        selectedPlan = '';
    };

    if (planModal) {
        planModal.addEventListener('click', function(e) {
            if (e.target === planModal) {
                closePlanModal();
            }
        });
    }

    if (planForm) {
        planForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.error-message').forEach((el) => el.remove());
            
            const name = document.getElementById('planName')?.value.trim() || '';
            const email = document.getElementById('planEmail')?.value.trim() || '';
            
            let isValid = true;
            
            if (name === '') {
                showError('planName', 'Name cannot be empty');
                isValid = false;
            }
            
            if (!validateEmail(email)) {
                showError('planEmail', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (isValid) {
                playClickTone();
                closePlanModal();
                if (typeof showToast === 'function') {
                    showToast('Your password has been sent to your email!', 'success');
                }
                planForm.reset();
            }
        });
    }
    
    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    
    function showError(id, message) {
        const input = document.getElementById(id);
        if (!input) return;
        const error = document.createElement('small');
        error.classList.add('error-message');
        error.style.color = '#dc3545';
        error.style.display = 'block';
        error.style.marginTop = '5px';
        error.textContent = message;
        const parent = input.parentElement || input.closest('.form-floating');
        if (parent) {
            parent.appendChild(error);
        }
    }

    function playClickTone() {
        try {
            const sources = [
                '../images/audio/e1axmfsi497-right-answer-sfx-8.mp3',
                'images/audio/e1axmfsi497-right-answer-sfx-8.mp3'
            ];
            const audio = new Audio();
            audio.volume = 0.5;
            const tryPlay = (i) => {
                if (i >= sources.length) return;
                audio.src = sources[i];
                audio.play().catch(() => tryPlay(i + 1));
            };
            tryPlay(0);
        } catch (_) {}
    }
});

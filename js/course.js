document.addEventListener("DOMContentLoaded", () => {
    function openSubscriptionPopup() {
        const popup = document.getElementById('subscriptionPopup');
        if (popup) {
            popup.style.display = 'flex';
        }
    }

    function closeSubscriptionPopup() {
        const popup = document.getElementById('subscriptionPopup');
        if (popup) {
            popup.style.display = 'none';
        }
    }

    const subscriptionForm = document.getElementById('subscriptionForm');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.error-message').forEach((el) => el.remove());
            
            const name = document.getElementById('subName')?.value.trim() || '';
            const email = document.getElementById('subEmail')?.value.trim() || '';
            
            let isValid = true;
            
            if (name === '') {
                showError('subName', 'Name cannot be empty');
                isValid = false;
            }
            
            if (!validateEmail(email)) {
                showError('subEmail', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (isValid) {
                alert('Thank you for subscribing! You will receive updates about our courses.');
                closeSubscriptionPopup();
                subscriptionForm.reset();
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

    const subscriptionPopup = document.getElementById('subscriptionPopup');
    if (subscriptionPopup) {
        subscriptionPopup.addEventListener('click', function(e) {
            if (e.target === this) {
                closeSubscriptionPopup();
            }
        });
    }

    window.openSubscriptionPopup = openSubscriptionPopup;
    window.closeSubscriptionPopup = closeSubscriptionPopup;

    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('active');
        });
    });
});
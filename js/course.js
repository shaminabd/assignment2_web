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
            const name = document.getElementById('subName').value;
            const email = document.getElementById('subEmail').value;
            
            if (name && email) {
                alert('Thank you for subscribing! You will receive updates about our courses.');
                closeSubscriptionPopup();
                subscriptionForm.reset();
            }
        });
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
});
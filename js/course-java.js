function openSubscriptionPopup() {
    document.getElementById('subscriptionPopup').style.display = 'flex';
}

function closeSubscriptionPopup() {
    document.getElementById('subscriptionPopup').style.display = 'none';
}

document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('subName').value;
    const email = document.getElementById('subEmail').value;
    
    if (name && email) {
        alert('Thank you for subscribing! You will receive updates about our courses.');
        closeSubscriptionPopup();
        document.getElementById('subscriptionForm').reset();a
    }
});

document.getElementById('subscriptionPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        closeSubscriptionPopup();
    }
});

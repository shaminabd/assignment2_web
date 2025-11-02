$(document).ready(function() {
    $('.contact-form form').on('submit', function(e) {
        e.preventDefault();
        const $form = $(this);
        const $submitBtn = $form.find('button[type="submit"]');
        const originalText = $submitBtn.html();

        $submitBtn.html(`
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Please wait...
        `).prop('disabled', true);

        setTimeout(function() {
            $submitBtn.html(originalText).prop('disabled', false);
            
            if (typeof showToast === 'function') {
                showToast('Form submitted successfully!', 'success');
            }
            
            $form[0].reset();
        }, 2000);
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const $form = $(this);
        const $submitBtn = $form.find('button[type="submit"]');
        const originalText = $submitBtn.html();

        $submitBtn.html(`
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Please wait...
        `).prop('disabled', true);

        setTimeout(function() {
            $submitBtn.html(originalText).prop('disabled', false);
            
            if (typeof showToast === 'function') {
                showToast('Form submitted successfully!', 'success');
            }
            
            $form[0].reset();
        }, 2000);
    });

    $('#subscriptionForm').on('submit', function(e) {
        e.preventDefault();
        const $form = $(this);
        const $submitBtn = $form.find('button[type="submit"]');
        const originalText = $submitBtn.html();

        $submitBtn.html(`
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Please wait...
        `).prop('disabled', true);

        setTimeout(function() {
            $submitBtn.html(originalText).prop('disabled', false);
            
            if (typeof showToast === 'function') {
                showToast('Subscribed successfully!', 'success');
            }
            
            if (typeof closeSubscriptionPopup === 'function') {
                closeSubscriptionPopup();
            }
            $form[0].reset();
        }, 2000);
    });
});
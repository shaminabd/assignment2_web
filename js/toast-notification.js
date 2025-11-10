$(document).ready(function() {
    if ($('#toastContainer').length === 0) {
        const toastHTML = `
            <div id="toastContainer" style="
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 10000;
                max-width: 350px;
            "></div>
        `;
        $('body').append(toastHTML);
    }

    window.showToast = function(message, type = 'info') {
        const $container = $('#toastContainer');
        
        const colors = {
            success: { bg: '#28a745', icon: '✓' },
            error: { bg: '#dc3545', icon: '✕' },
            info: { bg: '#17a2b8', icon: 'ℹ' },
            warning: { bg: '#ffc107', icon: '⚠' }
        };
        
        const color = colors[type] || colors.info;
        
        const toastId = 'toast-' + Date.now();
        const $toast = $(`
            <div id="${toastId}" class="toast-notification" style="
                background: ${color.bg};
                color: white;
                padding: 15px 20px;
                margin-bottom: 10px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                display: flex;
                align-items: center;
                gap: 10px;
                opacity: 0;
                transform: translateX(400px);
                transition: all 0.3s ease;
            ">
                <span style="font-size: 20px;">${color.icon}</span>
                <span style="flex: 1;">${message}</span>
            </div>
        `);
        
        $container.append($toast);
        
        setTimeout(function() {
            $toast.css({
                'opacity': '1',
                'transform': 'translateX(0)'
            });
        }, 10);
        
        setTimeout(function() {
            $toast.css({
                'opacity': '0',
                'transform': 'translateX(400px)'
            });
            setTimeout(function() {
                $toast.remove();
            }, 300);
        }, 3000);
    };
});
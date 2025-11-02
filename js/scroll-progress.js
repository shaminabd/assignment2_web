$(document).ready(function() {
    if ($('#scrollProgressBar').length === 0) {
        const progressBarHTML = `
            <div id="scrollProgressBar" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 4px;
                background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7);
                z-index: 9999;
                transition: width 0.1s ease;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            "></div>
        `;
        $('body').prepend(progressBarHTML);
    }

    const $progressBar = $('#scrollProgressBar');

    $(window).on('scroll', function() {
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const scrollTop = $(window).scrollTop();
        
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        $progressBar.css('width', scrollPercentage + '%');
    });

    $(window).trigger('scroll');
});
$(document).ready(function() {
    const $lazyImages = $('img[data-src]');
    
    function isInViewport($element) {
        const elementTop = $element.offset().top;
        const elementBottom = elementTop + $element.outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    
    function loadImage($img) {
        const src = $img.attr('data-src');
        if (src && !$img.attr('data-loaded')) {
            $img.css({
                'background': '#f0f0f0',
                'min-height': '200px'
            });
            
            const newImg = new Image();
            newImg.onload = function() {
                $img.attr('src', src).attr('data-loaded', 'true');
                $img.css({
                    'opacity': '0',
                    'transition': 'opacity 0.3s'
                });
                setTimeout(function() {
                    $img.css('opacity', '1');
                }, 10);
            };
            newImg.src = src;
        }
    }
    
    function checkImages() {
        $lazyImages.each(function() {
            const $img = $(this);
            if (isInViewport($img)) {
                loadImage($img);
            }
        });
    }
    
    checkImages();
    
    let scrollTimer = null;
    $(window).on('scroll', function() {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(checkImages, 100);
    });
    
    $(window).on('resize', checkImages);
});
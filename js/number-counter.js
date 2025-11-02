$(document).ready(function() {
    const $stats = $('.stats .stat');
    let hasAnimated = false;

    function animateNumber($element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000) {
                $element.text(Math.floor(current) + '+');
            } else if (target < 100) {
                $element.text(Math.floor(current) + '%');
            } else {
                $element.text(Math.floor(current) + '+');
            }
        }, 16);
    }

    function checkStatsInView() {
        if (hasAnimated) return;

        const statsOffset = $('.stats').offset();
        if (!statsOffset) return;

        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const statsTop = statsOffset.top;

        if (scrollTop + windowHeight > statsTop + 100) {
            hasAnimated = true;

            $stats.each(function() {
                const $stat = $(this);
                const text = $stat.text();
                
                let number = 0;
                let emoji = '';
                let suffix = '';
                
                if (text.includes('50+')) {
                    number = 50;
                    emoji = '🎓';
                    suffix = '+';
                } else if (text.includes('10+')) {
                    number = 10;
                    emoji = '📚';
                    suffix = '+';
                } else if (text.includes('95%')) {
                    number = 95;
                    emoji = '⭐';
                    suffix = '%';
                }

                if (number > 0) {
                    const originalHTML = $stat.html();
                    
                    const updateText = function(current) {
                        $stat.html(`<span aria-hidden="true">${emoji}</span> ${current}${suffix} ${text.split(suffix)[1].trim()}`);
                    };
                    
                    const start = 0;
                    const duration = 2000;
                    const increment = number / (duration / 16);
                    let current = start;
                    
                    const timer = setInterval(function() {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        updateText(Math.floor(current));
                    }, 16);
                }
            });
        }
    }

    $(window).on('scroll', checkStatsInView);
    checkStatsInView();
});
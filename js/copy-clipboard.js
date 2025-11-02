$(document).ready(function() {
    $('.faq-item .faq-answer').each(function() {
        const $answer = $(this);
        
        if ($answer.find('.copy-btn').length === 0) {
            const $copyBtn = $(`
                <button class="copy-btn btn btn-sm btn-outline-secondary ms-2" 
                        style="vertical-align: middle; padding: 2px 8px; font-size: 12px;"
                        title="Copy to clipboard">
                    📋 Copy
                </button>
            `);
            
            $answer.append($copyBtn);
            
            $copyBtn.on('click', function(e) {
                e.preventDefault();
                const $btn = $(this);
                const answerText = $answer.clone().find('.copy-btn').remove().end().text().trim();
                
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(answerText).then(function() {
                        $btn.html('✓ Copied!').removeClass('btn-outline-secondary').addClass('btn-success');
                        
                        const $tooltip = $(`
                            <span class="copy-tooltip" style="
                                position: absolute;
                                background: #333;
                                color: white;
                                padding: 5px 10px;
                                border-radius: 4px;
                                font-size: 12px;
                                white-space: nowrap;
                                margin-left: 5px;
                                opacity: 0;
                                transition: opacity 0.3s;
                            ">Copied to clipboard!</span>
                        `);
                        $btn.after($tooltip);
                        setTimeout(function() {
                            $tooltip.css('opacity', '1');
                        }, 10);
                        
                        setTimeout(function() {
                            $btn.html('📋 Copy').removeClass('btn-success').addClass('btn-outline-secondary');
                            $tooltip.fadeOut(200, function() {
                                $(this).remove();
                            });
                        }, 2000);
                    }).catch(function(err) {
                        console.error('Failed to copy:', err);
                        showToast('Failed to copy text', 'error');
                    });
                } else {
                    const textArea = document.createElement('textarea');
                    textArea.value = answerText;
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        $btn.html('✓ Copied!').removeClass('btn-outline-secondary').addClass('btn-success');
                        setTimeout(function() {
                            $btn.html('📋 Copy').removeClass('btn-success').addClass('btn-outline-secondary');
                        }, 2000);
                    } catch (err) {
                        console.error('Fallback copy failed:', err);
                    }
                    document.body.removeChild(textArea);
                }
            });
        }
    });
});
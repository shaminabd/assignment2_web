$(document).ready(function() {
    if ($('#faqSearchInput').length === 0) {
        const searchHTML = `
            <div class="mb-3">
                <input type="text" 
                       id="faqSearchInput" 
                       class="form-control" 
                       placeholder="Search in FAQs...">
            </div>
        `;
        $('#faq .card-body').prepend(searchHTML);
    }

    const $searchInput = $('#faqSearchInput');
    const $faqItems = $('.faq-item');
    let originalTexts = {};

    $faqItems.each(function(index) {
        const $item = $(this);
        originalTexts[index] = {
            question: $item.find('.faq-question').html(),
            answer: $item.find('.faq-answer').html()
        };
    });

    function highlightText(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark class="bg-warning">$1</mark>');
    }

    $searchInput.on('keyup', function() {
        const searchTerm = $(this).val().trim();
        
        $faqItems.each(function(index) {
            const $item = $(this);
            const $question = $item.find('.faq-question');
            const $answer = $item.find('.faq-answer');
            
            if (searchTerm === '') {
                $question.html(originalTexts[index].question);
                $answer.html(originalTexts[index].answer);
                $item.show();
            } else {
                const questionText = originalTexts[index].question.replace(/<[^>]*>/g, '');
                const answerText = originalTexts[index].answer.replace(/<[^>]*>/g, '');
                
                const highlightedQuestion = highlightText(questionText, searchTerm);
                const highlightedAnswer = highlightText(answerText, searchTerm);
                
                $question.html(highlightedQuestion);
                $answer.html(highlightedAnswer);
                
                if (questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    answerText.toLowerCase().includes(searchTerm.toLowerCase())) {
                    $item.fadeIn(300);
                } else {
                    $item.fadeOut(300);
                }
            }
        });
    });
});
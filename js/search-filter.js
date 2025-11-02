$(document).ready(function() {
    const courses = [
        { name: "Java Programming", keywords: ["java", "programming", "object-oriented"] },
        { name: "Python Programming", keywords: ["python", "programming", "data science"] },
        { name: "HTML & CSS Programming", keywords: ["html", "css", "web", "design"] }
    ];

    if ($('#courseSearchInput').length === 0) {
        const searchHTML = `
            <div class="container mb-4">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="position-relative">
                            <input type="text" 
                                   id="courseSearchInput" 
                                   class="form-control form-control-lg" 
                                   placeholder="Search courses... (e.g., Java, Python, HTML)">
                            <div id="autocompleteDropdown" class="list-group position-absolute w-100" style="display: none; z-index: 1000; max-height: 200px; overflow-y: auto;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('#availableTitle').after(searchHTML);
    }

    const $searchInput = $('#courseSearchInput');
    const $autocomplete = $('#autocompleteDropdown');
    const $courseCards = $('.course-bootstrap-card').parent();

    $searchInput.on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase().trim();
        
        $courseCards.each(function() {
            const $card = $(this);
            const cardText = $card.text().toLowerCase();
            
            if (cardText.includes(searchTerm) || searchTerm === '') {
                $card.fadeIn(300);
            } else {
                $card.fadeOut(300);
            }
        });

        if (searchTerm.length > 0) {
            const matches = courses.filter(course => 
                course.name.toLowerCase().includes(searchTerm) ||
                course.keywords.some(kw => kw.includes(searchTerm))
            );

            if (matches.length > 0) {
                let suggestionsHTML = '';
                matches.forEach(course => {
                    suggestionsHTML += `
                        <a href="#" class="list-group-item list-group-item-action autocomplete-item">
                            ${course.name}
                        </a>
                    `;
                });
                $autocomplete.html(suggestionsHTML).fadeIn(200);
            } else {
                $autocomplete.fadeOut(200);
            }
        } else {
            $autocomplete.fadeOut(200);
        }
    });

    $(document).on('click', '.autocomplete-item', function(e) {
        e.preventDefault();
        const selectedText = $(this).text();
        $searchInput.val(selectedText).trigger('keyup');
        $autocomplete.fadeOut(200);
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('#courseSearchInput, #autocompleteDropdown').length) {
            $autocomplete.fadeOut(200);
        }
    });
});
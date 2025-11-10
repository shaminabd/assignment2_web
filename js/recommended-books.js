document.addEventListener('DOMContentLoaded', () => {
    const bookSections = document.querySelectorAll('.recommended-books-card');

    if (!bookSections.length) {
        return;
    }

    bookSections.forEach((section) => {
        const topic = section.dataset.booksTopic;
        const maxBooks = Number.parseInt(section.dataset.booksMax || '6', 10);
        const grid = section.querySelector('.recommended-books-grid');
        const placeholder = section.querySelector('.recommended-books-placeholder');
        const errorAlert = section.querySelector('.recommended-books-error');

        if (!topic || !grid) {
            return;
        }

        const safeMax = Number.isNaN(maxBooks) ? 6 : Math.min(Math.max(maxBooks, 1), 12);

        fetchRecommendedBooks(topic, safeMax)
            .then((books) => {
                const bookList = books.length ? books : getFallbackBooks(topic, safeMax);

                if (!bookList.length) {
                    if (placeholder) {
                        placeholder.textContent = 'No recommended books were found for this topic.';
                    }
                    return;
                }

                if (placeholder) {
                    placeholder.remove();
                }

                renderBooks(grid, bookList);
            })
            .catch(() => {
                const fallback = getFallbackBooks(topic, safeMax);

                if (fallback.length) {
                    if (placeholder) {
                        placeholder.remove();
                    }
                    renderBooks(grid, fallback);
                    return;
                }

                if (placeholder) {
                    placeholder.remove();
                }
                if (errorAlert) {
                    errorAlert.classList.remove('d-none');
                }
            });
    });
});

function renderBooks(grid, books) {
    books.forEach((book) => {
        const bookCard = document.createElement('article');
        bookCard.className = 'recommended-book-card';
        bookCard.setAttribute('role', 'listitem');

        bookCard.innerHTML = `
            <div class="recommended-book">
                <div class="recommended-book-cover">
                    <img src="${book.thumbnail}" alt="${book.title} cover" loading="lazy">
                </div>
                <div class="recommended-book-body">
                    <h4 class="recommended-book-title">${book.title}</h4>
                    <p class="recommended-book-authors">${book.authors}</p>
                    <p class="recommended-book-description">${book.description}</p>
                    <a href="${book.previewLink}" class="recommended-book-link" target="_blank" rel="noopener noreferrer">
                        Preview on Google Books
                    </a>
                </div>
            </div>
        `;

        grid.appendChild(bookCard);
    });
}

async function fetchRecommendedBooks(query, maxResults) {
    const encodedQuery = encodeURIComponent(query.trim());
    const max = Math.min(maxResults, 12);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}&maxResults=${max}&printType=books&orderBy=relevance`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }

    const data = await response.json();
    const items = Array.isArray(data.items) ? data.items : [];

    return items.map((item) => {
        const volumeInfo = item.volumeInfo || {};
        const imageLinks = volumeInfo.imageLinks || {};

        return {
            title: volumeInfo.title || 'Untitled',
            authors: Array.isArray(volumeInfo.authors) && volumeInfo.authors.length
                ? volumeInfo.authors.join(', ')
                : 'Unknown author',
            description: normaliseDescription(volumeInfo.description),
            thumbnail: imageLinks.thumbnail
                || imageLinks.smallThumbnail
                || 'https://via.placeholder.com/128x192?text=No+Cover',
            previewLink: volumeInfo.previewLink || volumeInfo.infoLink || '#'
        };
    });
}

function normaliseDescription(description) {
    if (!description) {
        return 'No description available.';
    }

    const trimmed = description.replace(/<[^>]+>/g, '').trim();

    if (trimmed.length > 180) {
        return `${trimmed.slice(0, 177)}...`;
    }

    return trimmed;
}

const FALLBACK_BOOKS = {
    'html css web development': [
        {
            title: 'HTML & CSS: Design and Build Websites',
            authors: 'Jon Duckett',
            description: 'A beautifully designed guide covering the fundamentals of HTML and CSS with practical examples for modern web development.',
            thumbnail: 'https://books.google.com/books/content?id=8VOxDgAAQBAJ&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/HTML_CSS.html?id=8VOxDgAAQBAJ'
        },
        {
            title: 'Learning Web Design',
            authors: 'Jennifer Robbins',
            description: 'Comprehensive introduction to HTML, CSS, and responsive design, ideal for beginners building professional sites.',
            thumbnail: 'https://books.google.com/books/content?id=GYzhDwAAQBAJ&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/Learning_Web_Design.html?id=GYzhDwAAQBAJ'
        },
        {
            title: 'CSS Secrets',
            authors: 'Lea Verou',
            description: 'Collection of practical tips and patterns that reveal the power of CSS for modern, creative interfaces.',
            thumbnail: 'https://books.google.com/books/content?id=f8pBDwAAQBAJ&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/CSS_Secrets.html?id=f8pBDwAAQBAJ'
        }
    ],
    'java programming': [
        {
            title: 'Effective Java',
            authors: 'Joshua Bloch',
            description: 'Expert-level guidelines and best practices that help Java developers write clearer, more robust code.',
            thumbnail: 'https://books.google.com/books/content?id=ka2VUBqHiWkC&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/Effective_Java.html?id=ka2VUBqHiWkC'
        },
        {
            title: 'Head First Java',
            authors: 'Kathy Sierra, Bert Bates',
            description: 'Engaging, visual approach to Java fundamentals covering object-oriented concepts and core APIs.',
            thumbnail: 'https://books.google.com/books/content?id=KkEXEAAAQBAJ&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/Head_First_Java.html?id=KkEXEAAAQBAJ'
        },
        {
            title: 'Java: The Complete Reference',
            authors: 'Herbert Schildt',
            description: 'Thorough reference that walks through the Java language, libraries, and modern features with clear explanations.',
            thumbnail: 'https://books.google.com/books/content?id=tdiWYk1mrZkC&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/Java_The_Complete_Reference.html?id=tdiWYk1mrZkC'
        }
    ],
    'python programming': [
        {
            title: 'Automate the Boring Stuff with Python',
            authors: 'Al Sweigart',
            description: 'Hands-on projects that teach Python fundamentals through practical automation tasks for everyday life.',
            thumbnail: 'https://books.google.com/books/content?id=VjwzBQAAQBAJ&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/Automate_the_Boring_Stuff_with_Python.html?id=VjwzBQAAQBAJ'
        },
        {
            title: 'Python Crash Course',
            authors: 'Eric Matthes',
            description: 'Project-based introduction covering Python basics and guiding you through building games and web apps.',
            thumbnail: 'https://books.google.com/books/content?id=FveTDwAAQBAJ&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/Python_Crash_Course_2nd_Edition.html?id=FveTDwAAQBAJ'
        },
        {
            title: 'Fluent Python',
            authors: 'Luciano Ramalho',
            description: 'In-depth exploration of Pythonic idioms, data structures, and design patterns for writing expressive code.',
            thumbnail: 'https://books.google.com/books/content?id=H1o0CwAAQBAJ&printsec=frontcover&img=1&zoom=1',
            previewLink: 'https://books.google.com/books/about/Fluent_Python.html?id=H1o0CwAAQBAJ'
        }
    ]
};

function getFallbackBooks(topic, limit) {
    const normalizedTopic = topic.toLowerCase();
    const fallback = FALLBACK_BOOKS[normalizedTopic];

    if (!fallback || !fallback.length) {
        return [];
    }

    const max = Math.min(limit || fallback.length, fallback.length);
    return fallback.slice(0, max);
}


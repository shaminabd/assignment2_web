document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('imageGallery');
    const main = document.getElementById('mainPreview');
    if (gallery && main) {
        const thumbs = Array.from(gallery.querySelectorAll('img[data-src]'));
        thumbs.forEach(img => {
            img.addEventListener('click', () => {
                const src = img.getAttribute('data-src');
                main.src = src;
                main.style.transition = 'transform 250ms ease';
                main.style.transform = 'scale(1.02)';
                setTimeout(() => { main.style.transform = 'scale(1)'; }, 260);
            });
        });
    }
});



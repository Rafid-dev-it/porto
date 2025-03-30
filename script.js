document.addEventListener('DOMContentLoaded', function() {
    // Daftar foto dalam album
    const photos = [
        { src: 'WhatsApp Image 2025-01-29 at 12.40.23_1b130b4d.jpg', alt: '', caption: 'our first date' },
        { src: 'images/foto2.jpg', alt: '', caption: 'soon' },
        { src: 'images/foto3.jpg', alt: '', caption: 'soon' },
        { src: 'images/foto4.jpg', alt: '', caption: 'soon' },
        { src: 'images/foto5.jpg', alt: '', caption: 'soon' },
        { src: 'images/foto6.jpg', alt: '', caption: 'soon' }
    ];

    const gallery = document.querySelector('.gallery');

    // Membuat elemen untuk setiap foto
    photos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;
        img.className = 'gallery-image';
        
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.textContent = photo.caption;
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        gallery.appendChild(galleryItem);
    });
});
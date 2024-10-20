// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for videos
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    modalContent.appendChild(closeBtn);

    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-wrapper');
    modalContent.appendChild(videoContainer);

    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('click', function () {
            const src = this.querySelector('source').src;
            videoContainer.innerHTML = `<video controls autoplay><source src="${src}" type="video/mp4"></video>`;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        videoContainer.innerHTML = ''; // Stop the video
    });

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
            videoContainer.innerHTML = ''; // Stop the video
        }
    });
});

// Toggle service details
document.querySelectorAll('.services article h3').forEach(heading => {
    heading.addEventListener('click', function () {
        const details = this.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});

// Scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.innerText = '⬆️';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

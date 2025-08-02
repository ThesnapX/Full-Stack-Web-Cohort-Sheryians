// Custom Cursor
const cursor = document.getElementById('cursor');
const blurCursor = document.getElementById('cursor-blur');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
// Track mouse position
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// Smooth follow animation
function animateCursor() {
    // Calculate distance between mouse and custom cursor
    let dx = mouseX - cursorX;
    let dy = mouseY - cursorY;
    // Apply easing (adjust the 0.1 value for more/less delay)
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    // Update custom cursor position
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    blurCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
}
// Start animation
animateCursor();


// scroll mouse
var navbar = document.getElementById('navbar')
let lastScrollY = window.scrollY;
window.addEventListener('scroll',function(){
    // var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(lastScrollY<this.window.scrollY){
        navbar.classList.add("nav--hidden")
    }
    else{
        navbar.classList.remove("nav--hidden")
    }
    lastScrollY = window.scrollY;
})

// Responsive Menu
var navHamburger = document.getElementsByClassName('nav-ham')
var navClose = document.getElementsByClassName('nav-close')
var navSidebar = document.getElementById('sidebar')
function openSidebar(){
    navSidebar.style.display = 'flex'
    // navSidebar.style.marginTop = '0px'
    // navSidebar.style.opacity = 1
}

function closeSidebar(){
    navSidebar.style.display = 'none'
    // navSidebar.style.marginTop = '-50px'
    // navSidebar.style.opacity = '0'
}

// Simple version - just creates all image elements at once
const container = document.querySelector('.overview-wrapper');
let imagesHTML = '';

for (let i = 1; i <= 111; i++) {
    imagesHTML += `<img class="img-view" src="/Portfolio/thumbnail-images/${i}.jpg" alt="Thumbnail ${i}">`;
}

container.innerHTML = imagesHTML;

// Optional: Add click event to each image after they're created
const images = container.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('click', function() {
        window.open(this.src, '_blank');
    });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const imgView = container.getElementsByClassName('img-view');

// Open lightbox
imgView.forEach(img => {
    img.addEventListener('click', function() {
        currentIndex = parseInt(this.dataset.index);
        lightboxImg.src = this.src;
        lightbox.classList.add('active');
    });
});

// Close lightbox
closeBtn.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

// Navigation
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

function showPrevImage() {
    currentIndex = (currentIndex - 1 + imgView.length) % imgView.length;
    lightboxImg.src = imgView[currentIndex].src;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % imgView.length;
    lightboxImg.src = imgView[currentIndex].src;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});



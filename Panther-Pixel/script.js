
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

// Overview Sectiom
    document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.overview-wrapper');
  const images = gallery.querySelectorAll('.thumbnail-images');
  
  // // Clone all images for the infinite effect
  // images.forEach(img => {
  //   const clone = img.cloneNode(true);
  //   gallery.appendChild(clone);
  // });

  let isScrolling = false;

  gallery.addEventListener('scroll', function() {
    if (!isScrolling) {
      isScrolling = true;
      
      // When scrolled near the end (last 30%)
      if (this.scrollLeft > this.scrollWidth - this.clientWidth * 1.3) {
        // Move first images to the end
        const firstImages = Array.from(this.children).slice(0, images.length);
        firstImages.forEach(img => {
          const clone = img.cloneNode(true);
          this.appendChild(clone);
        });
        
        // Remove the original first images
        firstImages.forEach(img => img.remove());
        
        // Adjust scroll position to maintain continuity
        this.scrollLeft -= images.length * (250 + 15); // image width + gap
      }
      
      isScrolling = false;
    }
  });

  // Trigger initial scroll check
  gallery.dispatchEvent(new Event('scroll'));
});



// Pop Up
var openPopUpBtn = document.getElementById('pop-up')
var closePopUpBtn = document.getElementById('close-pop')
var PopUp = document.getElementById('pop-basic')

openPopUpBtn.addEventListener("click",()=>{
  PopUp.classList.add("open")
})
closePopUpBtn.addEventListener("click",()=>{
  PopUp.classList.remove("open")
})
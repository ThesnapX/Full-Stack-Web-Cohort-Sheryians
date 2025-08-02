const cursor = document.getElementById('cursor');
const blurCursor = document.getElementById('cursor-blur');
var html = document.querySelector('html')
html.addEventListener('mousemove',function(mDets){
        gsap.to(cursor,{
        x:mDets.x,
        top:-10,
        left:-10,
        y:mDets.y,
        duration:0.3
    })
        gsap.to(blurCursor,{
        x:mDets.x,
        top:-10,
        left:-10,
        y:mDets.y,
        duration:1
    })
})
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



document.addEventListener('DOMContentLoaded', function() {
    const faqCards = document.querySelectorAll('.faq-card');
    
    faqCards.forEach(card => {
        const question = card.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other open cards
            faqCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                    otherCard.querySelector('.faq-question img').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current card
            card.classList.toggle('active');
            const arrow = question.querySelector('img');
            
            if (card.classList.contains('active')) {
                arrow.style.transform = 'rotate(180deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });
});
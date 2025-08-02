




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

var testimonialCardWrapper = document.querySelector('.testmonial-card-wrapper'); // Use querySelector for single element

fetch('./user-testimonial.json')
    .then(res => res.json()) 
    .then(data => {
        data.forEach(testimonial => {
            testimonialCardWrapper.insertAdjacentHTML('beforeend',
                `<div class="testmonial-card">
                    <div class="testmonial-context">
                        <p>"${testimonial.cMessage}"</p> <!-- Fixed property name -->
                    </div>
                    <div class="testmonial-user">
                        <h1>${testimonial.cName}</h1>
                        <p>${testimonial.cProfession}</p> <!-- Removed extra 'n' -->
                    </div>
                </div>`
            );
        });
    })
    .catch(error => console.error('Error loading testimonials:', error)); 


// custom cursor
const cursor = document.getElementById('cursor');
const blurCursor = document.getElementById('cursor-blur');
var body = document.querySelector('body')
body.addEventListener('mousemove',function(mDets){
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
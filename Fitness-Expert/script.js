// JS
const cursor = document.getElementById("cursor");
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  requestAnimationFrame(animateCursor);
}

animateCursor();


function showSidebar(){
  var sidebar =  document.querySelector('.header-sidebar')
  sidebar.style.display='flex'
}

function hideSidebar(){
  var sidebar =  document.querySelector('.header-sidebar')
  sidebar.style.display='none'
}
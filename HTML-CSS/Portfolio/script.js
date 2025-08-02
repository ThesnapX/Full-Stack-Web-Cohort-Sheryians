var tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.refresh()

// Loader
var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Web Designer", "Video Editor"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
});
tl.to(".pre-loader", {
    y:-100,
    opacity:0,
    duration:1,
    delay:0.1,//7.15
    ease: "power4.in",
})


// Navigation


// Hero section
tl.from(".hero-left", {
    x: -50,
    opacity: 0,
    duration: 1.3,
    ease: "power3.inOut",
}, ">") 

tl.from(".hero-right", {
    x: 50,
    opacity: 0,
    duration: 1.3,
    ease: "power3.inOut",
}, "<") 


// services
gsap.from(".service-top", {
    y: -50,             
    opacity: 0,         
    duration: 1.2,      
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".service-top",
        // markers:true,
        start: "top 70%",
        scrub:2 
    },
});
gsap.from(".service-card-single",{
    y: 50,             
    opacity: 0,         
    duration: 1.2,     
    stagger:0.3, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".service-card-single",
        // markers:true,
        start: "top 100%",
        end:"top 0%",

    },
})

// About-me
gsap.from(".about-top", {
    y: -50,             
    opacity: 0,         
    duration: 1.2,      
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-top",
        // markers:true,
        start: "top 70%",
        scrub:1
    },
});

gsap.from(".about-content img",{
    x:-100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:".about-content img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 0%",
        scrub:2
    }
})
gsap.from(".about-right",{
    x:100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:".about-right",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 0%",
        scrub:2
    }
})

tl.from(".skill-progress",{
    scrollTrigger:{
        trigger:".skill-progress",
        scroller:"body",
        // markers:true,
        start: "top 95%",
    },
    stagger:0.2,
    y:50,
    opacity:0,
    duration:0.5,
    delay:0.2,
    onComplete: animateSkills,
})

const skills = document.querySelectorAll(".skill-progress");

function animateSkills() {
  skills.forEach((skill, i) => {
    const h3 = skill.querySelector("h3");
    const skillCircle = skill.querySelector(".skill");

    const percentText = h3.textContent.trim();
    const percentValue = parseInt(percentText.replace("%", ""));

    // Animate number and conic-gradient on inner skill circle
    let obj = { val: 0 };
    gsap.to(obj, {
      val: percentValue,
      duration: 1.5,
      opacity:1,
      delay: i * 0.2,
      onUpdate: () => {
        h3.textContent = `${Math.round(obj.val)}%`;
        skillCircle.style.background = `conic-gradient(#FF6B00 ${obj.val * 3.6}deg, #FEFEFE ${obj.val * 3.6}deg, #FEFEFE ${obj.val * 3.6}deg)`;
      },
      ease: "power1.out"
    });
  });
}


// portfolio
gsap.from(".portfolio h1", {
    y: -50,             
    opacity: 0,         
    duration: 1.2,      
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".portfolio h1",
        // markers:true,
        start: "top 90%",
        scrub:1
    },
});
gsap.from(".portfolio-card-single",{
    y: 50,             
    opacity: 0,         
    duration: 1.2,     
    stagger:0.5, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".portfolio-card-single",
        // markers:true,
        start: "top 80%",
        end:"top 0%",
    },
})


// contact me
gsap.from(".contact-top", {
    y: -50,             
    opacity: 0,         
    duration: 1.2,      
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-top",
        // markers:true,
        start: "top 90%",
        scrub:1
    },
});
gsap.from(".contact-personal", {
    x: -50,
    opacity: 0,
    duration: 1.3,
    ease: "power3.inOut",
    scrollTrigger:{
        trigger:".contact-personal",
        // markers:true,
        start:"top 65%"
    }
}, ) 

gsap.from(".contact-project", {
    x: 50,
    opacity: 0,
    duration: 1.3,
    ease: "power3.inOut",
    scrollTrigger:{
        trigger:".contact-personal",
        // markers:true,
        start:"top 65%"
    }
}, ) 

// footer
gsap.from("footer",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".contact-personal",
        // markers:true,
        start:"top 0%",
    }
})

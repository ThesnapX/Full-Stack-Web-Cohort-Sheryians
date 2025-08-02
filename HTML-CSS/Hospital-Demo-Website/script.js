
// Dignitatries 
const dignitaries = [
  {
    name: "Dr. Anil Sharma",
    position: "Hon'ble Chief Medical Officer, Bihar State",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    name: "Smt. Kavita Joshi",
    position: "Health Commissioner, Uttarakhand",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    name: "Shri Manoj Verma",
    position: "Hon'ble Minister of Health, Madhya Pradesh",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Dr. Neelam Deshmukh",
    position: "Director, Public Health Services",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    name: "Shri Rajeev Rathi",
    position: "Deputy Minister, Health & Family Welfare",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    name: "Smt. Rina Kapoor",
    position: "Medical Education Advisor, Delhi State",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    name: "Dr. Suresh Iyer",
    position: "Principal Secretary, Ministry of Health",
    image: "https://randomuser.me/api/portraits/men/16.jpg"
  },
  {
    name: "Shri Abhay Mehta",
    position: "Joint Director, Medical Services",
    image: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    name: "Smt. Varsha Singh",
    position: "State Health Officer, Chhattisgarh",
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    name: "Shri Nilesh Gawde",
    position: "Hon'ble Deputy Health Minister, Goa",
    image: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    name: "Dr. Meenakshi Agarwal",
    position: "Medical Research Director",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    name: "Shri Vikram Patil",
    position: "Commissioner, Health Infrastructure",
    image: "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    name: "Smt. Anuja Reddy",
    position: "Advisor, Women & Child Healthcare",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Dr. Arvind Bansal",
    position: "Chief Consultant, National Health Board",
    image: "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    name: "Shri Harish Pandey",
    position: "Director General, Medical Institutions",
    image: "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    name: "Smt. Jyoti Kulkarni",
    position: "Senior Health Strategist",
    image: "https://randomuser.me/api/portraits/women/25.jpg"
  },
  {
    name: "Dr. Ramesh Chaturvedi",
    position: "Executive Member, Medical Council of India",
    image: "https://randomuser.me/api/portraits/men/26.jpg"
  },
  {
    name: "Smt. Pallavi Thakur",
    position: "State Program Head, Rural Health Mission",
    image: "https://randomuser.me/api/portraits/women/27.jpg"
  }
];

const container = document.querySelector('.authorities-wrapper');

dignitaries.forEach(person => {
  const card = document.createElement('div');
  card.className = 'single-authority-card';
  card.innerHTML = `
    <img src="${person.image}" alt="${person.name}">
    <h4>${person.name}</h4>
    <p>${person.position}</p>
  `;
  container.appendChild(card);
});



// Blog Section

const blogs = [
  {
    img: "https://www.cedars-sinai.org/content/dam/cedars-sinai/homepage/new/community-health-mb.jpg/jcr:content/renditions/cqdam.web.2400.webp",
    title: "Community Health",
    desc: "Cedars-Sinai provides free health education, preventive screenings, and immunizations to promote well-being in underserved communities."
  },
  {
    img: "https://www.cedars-sinai.org/content/dam/cedars-sinai/homepage/new/health-equity-dt.jpg/jcr:content/renditions/cqdam.web.2400.webp",
    title: "Doctor-Patient Trust",
    desc: "Building strong doctor-patient relationships ensures better diagnosis, patient comfort, and improved healthcare outcomes."
  },
  {
    img: "https://macclesfield.ac.uk/wp-content/uploads/2023/01/health-social-care-9-gallery-min.webp",
    title: "Cancer Awareness",
    desc: "Spreading awareness about early detection of cancer can save lives. Join our campaigns and help fight cancer together."
  },
  {
    img: "https://swlocums.com/wp-content/uploads/2020/01/Palliative-Care-Worker.jpg",
    title: "Elderly Care",
    desc: "We provide specialized geriatric services to ensure comfort, safety, and dignity for our senior citizens."
  },
  {
    img: "https://www.openaccessgovernment.org/wp-content/uploads/2020/08/dreamstime_l_18354786.jpg",
    title: "Maternity Services",
    desc: "From prenatal to postnatal care, our maternity wing is equipped with expert doctors and advanced facilities."
  },
  {
    img: "https://www.healthwatchnorthyorkshire.co.uk/sites/healthwatchnorthyorkshire.co.uk/files/2023-08/social_care.jpg",
    title: "Tech in Healthcare",
    desc: "Embracing AI and robotics to streamline surgeries, diagnoses, and patient monitoring for better outcomes."
  }
];

const blogWrapper = document.querySelector(".blog-wrapper");
blogs.forEach(blog => {
  blogWrapper.innerHTML += `
    <div class="blog-single-card">
      <img src="${blog.img}" alt="${blog.title}">
      <div class="content-overview">
        <h3>${blog.title}</h3>
        <p>${blog.desc}</p>
      </div>
      <button class="cta-button blog-button"><a href="#">Learn More</a></button>
    </div>
  `;
});



// Nav bar


    const navbar = document.querySelector("nav");
    const navMid = document.querySelector(".nav-mid");
    let lastScrollY = window.scrollY;

    // Scroll behavior
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // Transparent background when at top
        if (currentScroll > 50) {
            navbar.style.background = "#fff";
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            navbar.style.background = "transparent";
            navbar.style.boxShadow = "none";
        }

        // Hide on scroll down, show on scroll up
        if (currentScroll > lastScrollY) {
            navbar.style.transform = "translateY(-100%)";
        } else {
            navbar.style.transform = "translateY(0)";
        }

        lastScrollY = currentScroll;
    });

    // Mobile menu toggle
    function toggleMenu() {
        navMid.classList.toggle("active");
    }



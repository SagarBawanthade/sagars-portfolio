'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


// Project data
const projectData = {
  project1: {
    title: "Abhinavs Official E-commerce Project",
    description: "A comprehensive full-stack e-commerce application built with modern web technologies. This platform provides a seamless shopping experience with user authentication, product management, shopping cart functionality, and secure payment processing. The application is fully responsive and optimized for performance.",
    image: "./assets/images/shopping-site.png",
    features: [
      "User registration and authentication system",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment gateway integration",
      "Admin dashboard for inventory management",
      "Order tracking and management",
      "Responsive design for all devices"
    ],
    technologies: ["React","RazorPay", "Node.js", "Express", "MongoDB", "JWT", "Stripe API", "CSS3"],
    liveLink: "https://abhinavsofficial.com",
    // githubLink: "https://github.com/yourusername/ecommerce-project"
  },
  project2: {
    title: "Kodesesh - Real-Time Code Editor",
    description: "Kodesesh is an advanced, real-time collaborative coding platform designed for seamless team interaction and efficient software development. Built for developers, interviewers, and coding enthusiasts, Kodesesh goes beyond traditional code editors by integrating real-time code collaboration, built-in audio and video calling, and Git version control features, all within a unified interface.",
    image: "./assets/images/kodesesh-1.png",
    features: [
      "Multiple users can edit the same codebase simultaneously, with instant synchronization",
      "Built-in Audio/Video Calls for real-time communication",
      "Git version control integration for tracking changes and collaboration",
      "Syntax highlighting and code formatting for over 50 programming languages",
      "Integrated terminal for executing code and running commands",
      "Multi Language Support for a wide range of programming languages like pyhon, javascript etc.",

      "Role-based access control",
      
    ],
    technologies: ["React", "Express.js", "Socket.io", "Mongo DB", "Docker", "AWS", "Redux"],
    liveLink: "https://kodesesh.cloud",
    // githubLink: "https://github.com/yourusername/task-management"
  },
  project3: {
    title: "S.B.RealEstate website",
    description: "Welcome to the S.B.RealEstate website, a platform for managing real estate properties with various features such as adding, deleting, and editing properties. Users can sign up on the website, upload property pictures, and also sign in using Google Authentication.",
    image: "./assets/images/2realestatge.png",
    features: [
      "User Authentication with Google Sign-In",
      "Property Management with Add , Update , Delete functionality",
      "Image Upload for Property Listings",
      "Contact the Property Owner",
      "Property Search and Filtering",
      "Responsive Design for Mobile and Desktop",
      "User-friendly Interface",
    
    ],
    technologies: ["Render","React", "Express", "Mongo DB", "Firebase"],
    liveLink: "https://mern-real-estate-wars.onrender.com/",
    githubLink: "https://github.com/SagarBawanthade/RealEState_Project"
  }
};

function openProjectModal(projectId) {
  const project = projectData[projectId];
  const modal = document.getElementById('projectModal');
  
  // Populate modal content
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalImage').src = project.image;
  
  // Populate features
  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = '';
  project.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
  
  // Populate technologies
  const techList = document.getElementById('modalTech');
  techList.innerHTML = '';
  project.technologies.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = tech;
    techList.appendChild(span);
  });
  
  // Update links
  const liveLink = document.getElementById('modalLiveLink');
  const githubLink = document.getElementById('modalGithubLink');
  
  if (project.liveLink) {
    liveLink.href = project.liveLink;
    liveLink.style.display = 'flex';
  } else {
    liveLink.style.display = 'none';
  }
  
  githubLink.href = project.githubLink;
  
  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});
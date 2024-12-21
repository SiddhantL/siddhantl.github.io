window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
  }
  
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav__link");
  
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
  
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const experienceSection = document.getElementById("experience-section");

    fetch("experience.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(experience => {
                const card = document.createElement("div");
                card.classList.add("card-experience");

                card.innerHTML = `
                    <div class="orgtext">${experience.company}</div>
                    <div class="resumecontent">
                        <p><strong>Role:</strong> ${experience.role}</p>
                        <p><strong>Duration:</strong> ${experience.duration}</p>
                        <ul class="squarepoint">
                            ${experience.responsibilities.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;

                experienceSection.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading experience data:", error));

        const projectsContainer = document.getElementById("projects-container");
        fetch("project.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");

                projectCard.innerHTML = `
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join("")}
                    </div>
                    ${
                        project.link
                            ? `<a href="${project.link}" target="_blank" class="project-icon-link">
                                 <i class="fa fa-link project-icon"></i>
                               </a>`
                            : ""
                    }
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error("Error loading projects data:", error));

    const contactSection = document.getElementById("contact-section");

    fetch("contact.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(contact => {
                const contactCard = document.createElement("div");
                contactCard.classList.add("contact-card");

                contactCard.innerHTML = `
                    <a href="${contact.url}" target="_blank" class="contact-link">
                        <i class="fa ${contact.icon} contact-icon"></i>
                        <span class="contact-name">${contact.name}</span>
                    </a>
                `;

                contactSection.appendChild(contactCard);
            });
        })
        .catch(error => console.error("Error loading contact data:", error));
        
    const shimmerText = document.querySelector('.shimmer-text');
    shimmerText.style.opacity = 0;
    shimmerText.style.transition = 'opacity 2s';
    setTimeout(() => {
      shimmerText.style.opacity = 1;
    }, 500);
});

  /*
  
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
*/
  
  
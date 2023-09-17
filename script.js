// Added hover effect on Services cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseout", function () {  
        card.style.transform = "scale(1)";
        card.style.transition = "transform 0.3s ease";
    });
});

// Added hover effect on projects
const project = document.querySelectorAll("#proj");

project.forEach((proj) => {
    proj.addEventListener("mouseover", function() {
        proj.style.transform = "scale(1.05)";
        proj.style.transition = "transform .2s ease-in-out";
    })

    proj.addEventListener("mouseout", function() {
        proj.style.transform = "scale(1)";
        proj.style.transition = "transform .2s ease-in-out";
    })
})

// Added hover effect on Button
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("mouseenter", function () {
    submitButton.classList.add("hovered");
});

submitButton.addEventListener("mouseleave", function () {
    submitButton.classList.remove("hovered");
});

// Added Smooth Scrolling Behaviour
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

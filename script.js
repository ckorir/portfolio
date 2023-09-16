const cards = document.querySelectorAll(".card");
const project = document.querySelectorAll("#proj");

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
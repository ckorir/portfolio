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
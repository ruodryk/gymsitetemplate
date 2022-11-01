const cards = document.querySelectorAll(".class-card");
const images = document.querySelectorAll(".class-card img");
const parag = document.querySelectorAll(".classes-p-float");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", () => {
    cards[i].classList.add("active");
  });
  cards[i].addEventListener("mouseout", () => {
    cards[i].classList.remove("active");
  });
}

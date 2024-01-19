const inputFields = document.querySelectorAll(".input-field");
const toggleLinks = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".nav-bullets span");
const images = document.querySelectorAll(".image");

inputFields.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("active");
  });
  input.addEventListener("blur", () => {
    if (input.value != "") return;
    input.classList.remove("active");
  });
});

toggleLinks.forEach((links) => {
  links.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});


let currentIndex = 1; // Initial index

function moveSlider() {
  let index = this.dataset.value || currentIndex;

  let currImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => {
    img.classList.remove("show");
  });

  currImage.classList.add("show");

  bullets.forEach((elem) => {
    elem.classList.remove("active");
  });

  bullets[index - 1].classList.add("active");

  let textGroup = document.querySelector(".text-group");
  textGroup.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
  // -(1 - 1) * 2.2 = - 0rem (because we want our div to move this much to properly show our text lines when img-1 is being displayed)
  // -(2 - 1) * 2.2 = - 2.2rem (because we want our div to move this much to properly show our text lines when img-2 is being displayed)
  // -(3 - 1) * 2.2 = - 4.4rem // and so on...

  // Updating the currentIndex for the next iteration

  currentIndex = (index % bullets.length) + 1;
}

bullets.forEach((elements) => {
  elements.addEventListener("click", moveSlider);
});

// Automatically moving the slider every 3.5 seconds

setInterval(() => {
  moveSlider.call({ dataset: { value: currentIndex } });
}, 3500);

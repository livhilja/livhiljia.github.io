const navWrapper = document.querySelector(".nav");
const navSmallWrapper = document.querySelector(".nav-small");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    navWrapper.classList.toggle("open");
});

burger.addEventListener("click", () => {
    navSmallWrapper.classList.toggle("open");
});

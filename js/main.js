const burgerBtn = document.querySelector(".nav__burger-btn");
const nav = document.querySelector(".nav");

const handleNav = () => {
	nav.classList.toggle("nav--active");
	document.body.classList.toggle("sticky-body");
};

burgerBtn.addEventListener("click", handleNav);

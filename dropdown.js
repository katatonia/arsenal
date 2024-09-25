const links = document.querySelectorAll(".menu__link_dropdown");
const dropdowns = document.querySelectorAll(".menu__dropdown");

const toggleDropdown = () => {
	for (let i = 0; i < links.length; i++) {
		links[i].addEventListener("click", () => {
			dropdowns[i].classList.toggle("menu__dropdown_opened");
		});
	}
};

toggleDropdown();

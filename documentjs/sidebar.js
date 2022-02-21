const SideBar = document.querySelector('#side-bar');
const sideBarButton = document.querySelector('.sidebar-title-container');
const sideBarLinks = document.querySelectorAll('.side-link-item');

const arrayOfSideBaritems = [
	sideBarButton,
	...sideBarLinks,
];

arrayOfSideBaritems.forEach((button) => {
	button.addEventListener('click', () => {
		SideBar.classList.toggle('sidebar-active');
	});
});

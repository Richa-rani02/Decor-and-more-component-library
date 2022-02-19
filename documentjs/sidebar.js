const mySideBar = document.querySelector('#side-bar');
const sideBarButton = document.querySelector('.sidebar-title-container');
const sideBarNavLinks = document.querySelectorAll('.side-link-item');

const arrayOfClickableItemsToToggleSideBar = [
	sideBarButton,
	...sideBarNavLinks,
];

arrayOfClickableItemsToToggleSideBar.forEach((button) => {
	button.addEventListener('click', () => {
		mySideBar.classList.toggle('sidebar-active');
	});
});

showmodal=document.querySelector("#show-modal");
modalcontainer=document.querySelector(".modal-container");
cancelmodal=document.querySelector("#cancel");

showmodal.addEventListener('click', () => {
	modalcontainer.classList.add('modal-active');
	document.body.style.overflow = 'hidden';
});
cancelmodal.addEventListener('click', () => {
    modalcontainer.classList.remove('modal-active');
	document.body.style.overflow = 'visible';
});
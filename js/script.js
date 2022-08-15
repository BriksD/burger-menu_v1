'use strict';

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.menu');

headerBurger.addEventListener('click', (e) => {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	document.body.classList.toggle('lock');
})
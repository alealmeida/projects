"use strict";

function leVars() {
	var menu = $('.navbar.navbar-items');
	var back = $('.back-top');
	var menuHeight = menu.height();
	var ancora = menu.find('a');
	var menuPosition = menu.offset().top;
	var loja = $('.d-store');
	ancora.stop().on('click', clickAndScroll)
	back.stop().on('click', clickAndScroll)
}
$(document).ready(leVars)

function clickAndScroll(e) {
	e.preventDefault();
	var winTop = $(window).scrollTop();
	var hash = this.hash;
	var father = $(this).parent();
	//var ancoraPosition = $(hash).offset().top - menuHeight;
	var ancoraPosition = $(hash).offset().top;
	var distance = Math.abs(ancoraPosition - winTop);
	var timer = distance / 1.2;
	father.addClass('active');
	$('html, body').animate({
		scrollTop: ancoraPosition
	}, timer).css({
		transition: 'all 0.1s ease-in-out 0.1s'
	});
}
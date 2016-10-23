"use strict";
$(document).ready(function () {
	var menu = $('.navbar');
	var menuHeight = menu.height();
	var ancora = menu.find('a');
	var menuPosition = menu.offset().top;
	var loja = $('.d-store-home');
	ancora.stop().on('click', function (e) {
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
	});
	//	function Scrolling() {
	//		var topWindow = $(window).scrollTop();
	//		if (topWindow >= menuPosition) {
	//			menu.css({
	//				top: 0,
	//				position: 'fixed'
	//			});
	//			loja.css({
	//				top: menuHeight
	//			})
	//		} else {
	//			menu.css({
	//				top: 0,
	//				position: 'relative'
	//			});
	//			loja.css({
	//				top: 0
	//			})
	//		}
	//	}
	$(window).stop().on('scroll', Scrolling)
});
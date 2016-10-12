$(".navbar a[href^='#']").on("click", function (ev) {
	ev.preventDefault();
	var seletor = $(this).attr("href");
	if ($(seletor).size() > 0) {
		$("html, body").animate({
			scrollTop: ($(seletor).offset().top - 40)
		}, 500);
	}
});
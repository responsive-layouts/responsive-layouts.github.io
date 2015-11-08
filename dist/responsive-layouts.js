function init() {
	if ($('header.topnav').length) {

		$('body').css("padding-top", $('header.topnav').height());

	}

	if ($('aside.right').length) {
		if (!$('#right').length) {
			$('.contents').prepend(
					'<button id="right" style="float:right">Right</button>');
		}
		$('#right').click(function() {
			$('aside.right').toggleClass('off');
			$('.contents').toggleClass('hideright');
		});
	} else {

		if ($(document).width() < 768) {

			$('.contents').removeClass('hideright');
		} else {
			$('.contents').addClass('hideright');
		}
	}

	if ($('aside.left').length) {
		if (!$('#left').length) {
			$('.contents').prepend('<button id="left" >Left</button>');
		}

		$('#left').click(function() {
			$('aside.left').toggleClass('off');
			$('.contents').toggleClass('hideleft');
		});
	} else {
		if ($(document).width() < 768) {

			$('.contents').removeClass('hideleft');
		} else {
			$('.contents').addClass('hideleft');
		}
	}
}
$(window).resize(function() {
	init();
});
init();

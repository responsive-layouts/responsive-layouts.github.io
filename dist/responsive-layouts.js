function init() {
	if ($('header.topnav').length) {

		$('body').css("padding-top", $('header.topnav').height());

	}

	if ($('aside.right').length) {
		if (!$('.sidebtnright').length) {
			$('aside.right').prepend('<button class="sidebtnright">Right</button>');
		}
		
	} else {
		$('.contents').addClass('hideright');
		
	}

	if ($('aside.left').length) {
		if (!$('.sidebtnleft').length) {
			$('aside.left').prepend('<button class="sidebtnleft" >Left</button>');
		}

		
	} else {
		$('.contents').addClass('hideleft');
		
	}
	
	
	$('.sidebtnright').click(function() {
		if ($(window).width() < 768) {
			$('aside.left').removeClass('off');
			$('.sidebtnleft').toggle();
			$('.contents').removeClass('hideleft');
			$('.contents').toggleClass('hideright');
		}
		else{
			$('.contents').toggleClass('hideright');
		}
		$('aside.right').toggleClass('off');
		
	});
	
	$('.sidebtnleft').click(function() {
		if ($(window).width() < 768) {
			$('aside.right').removeClass('off');
			$('.sidebtnright').toggle();
			$('.contents').removeClass('hideright');
			$('.contents').toggleClass('hideleft');
		}
		else{
			$('.contents').toggleClass('hideleft');
		}
		$('aside.left').toggleClass('off');
		
	});
}

$(window).resize(function() {
	if ($(window).width() < 768) {

		if ($('aside.right').length) {
			$('aside.left').removeClass('off');
		$('.contents').removeClass('hideright');
		}
		else {
			$('.contents').addClass('hideright');
		}
		if ($('aside.left').length) {
			$('aside.right').removeClass('off');
			$('.contents').removeClass('hideleft');
			}
		else {
		$('.contents').addClass('hideleft');
		}
		
		
	}
});
init();

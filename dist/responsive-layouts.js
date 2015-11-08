function ResponsiveLayouts(class_btn, text_left, text_right) {

	if (!text_left) {
		text_left = 'left';
	}
	if (!text_right) {
		text_right = 'right';
	}
	if (!class_btn) {
		class_btn = '';
	}

	if ($('header.topnav').length) {

		$('body').css("padding-top", $('header.topnav').height());
		$('aside.right').css("top", $('header.topnav').height());
	}
	if ($('header.topnav>nav').length) {
		var rel_height = $('header.topnav>nav').height();

		$('aside.right').css("top", rel_height);
		$('aside.left').css("top", rel_height);
		$('body').css("padding-top", rel_height);
	}

	if ($('aside.right').length) {
		if (!$('.sidebtnright').length) {
			$('aside.right').prepend(
					'<button class="sidebtnright ' + class_btn + '">'
							+ text_right + '</button>');
		}

	} else {
		$('.contents').addClass('hideright');

	}

	if ($('aside.left').length) {
		if (!$('.sidebtnleft').length) {
			$('aside.left').prepend(
					'<button class="sidebtnleft ' + class_btn + '" >'
							+ text_left + '</button>');
		}

	} else {
		$('.contents').addClass('hideleft');

	}

	$('.sidebtnright').click(function() {

		toggleright();
	});

	$('.sidebtnleft').click(function() {

		toggleleft();
	});
	$('body > .overlay').click(function() {
		$('.overlay').toggle();
		if ($(window).width() < 861) {
			$('aside.right').removeClass('off');
			$('aside.left').removeClass('off');
			$('.sidebtnright').show();
			$('.sidebtnleft').show();
			$('.contents').removeClass('hideright');
			$('.contents').removeClass('hideleft');
		}
	});

	$(document).on(
			'click',
			'.panel-heading > .overlay',
			function(e) {
				var $this = $(this);
				$this.parent().find('a').click();

				var menus = $this.parent().parent().parent().find('i');

				menus.removeClass('fa-minus').addClass('fa-plus');
				if ($this.parent().find('a').hasClass('collapsed')) {

					$this.parent().find('i').removeClass('fa-minus').addClass(
							'fa-plus');
				} else {

					$this.parent().find('i').removeClass('fa-plus').addClass(
							'fa-minus');
				}
				if ($(window).width() < 861) {
					$('.overlay').toggle();
					$('aside.right').removeClass('off');
					$('aside.left').removeClass('off');
					$('.sidebtnright').show();
					$('.sidebtnleft').show();
					$('.contents').removeClass('hideright');
					$('.contents').removeClass('hideleft');
				}
			});

	$(window).resize(function() {
		verify_height();
		verify_width();
	});
	verify_height();
	verify_open();
}

function toggleright() {
	if ($(window).width() < 861) {
		$('.overlay').toggle();
		$('aside.left').removeClass('off');
		$('.sidebtnleft').toggle();
		$('.contents').removeClass('hideleft');
		$('.contents').toggleClass('hideright');
	} else {
		$('.contents').toggleClass('hideright');
	}
	$('aside.right').toggleClass('off');
	verify_open();
}
function toggleleft() {
	if ($(window).width() < 861) {
		$('.overlay').toggle();
		$('aside.right').removeClass('off');
		$('.sidebtnright').toggle();
		$('.contents').removeClass('hideright');
		$('.contents').toggleClass('hideleft');
	} else {
		$('.contents').toggleClass('hideleft');
	}
	$('aside.left').toggleClass('off');
	verify_open();
}

function verify_open() {
	if ($(window).width() < 861) {

		if ($('aside.left').hasClass('off')) {
			$('.sidebtnleft').hide();

		}

		else if ($('aside.right').hasClass('off')) {
			$('.sidebtnright').hide();

		} else {
			$('.sidebtnright').delay('300').show();
			$('.sidebtnleft').delay('300').show();
			$('body > .overlay').hide();
		}
	} else {
		if ($('aside.left').hasClass('off')) {
			$('.sidebtnleft').delay('300').show();
		} else {
			$('.sidebtnleft').hide();
		}
		if ($('aside.right').hasClass('off')) {
			$('.sidebtnright').delay('300').show();

		} else {
			$('.sidebtnright').hide();
		}

		$('body >  .overlay').hide();
	}

}

function verify_width() {
	if ($(window).width() < 861) {

		$('.sidebtnleft').show();
		$('.sidebtnright').show();
		if ($('aside.right').length) {
			$('aside.left').removeClass('off');
			$('.contents').removeClass('hideright');
		} else {
			$('.contents').addClass('hideright');
		}

		if ($('aside.left').length) {
			$('aside.right').removeClass('off');
			$('.contents').removeClass('hideleft');
		} else {
			$('.contents').addClass('hideleft');
		}

	}
	verify_open();
}

function verify_height() {
	var diff = 0;
	if ($(window).width() < 861) {
		diff = 25;
	}

	var rel_height = $('header.topnav>nav').height();
	var rel_header = $('aside.left header').height();
	var rel_right = $('aside.right header').height();
	var windowx = $(window).height();
	var calcx = windowx - rel_height + diff;
	$('aside.left section').css("height", function() {
		calcy = calcx - rel_header;
		return calcy + 'px'
	});
	$('aside.right section').css("height", function() {
		calcy = calcx - rel_right;
		return calcy + 'px'
	});
}

/*BOOTSTRAP CHANGES */


jQuery(document).ready(function () {
	jQuery(window).scroll(function () {
		if (jQuery(document).scrollTop() > 50) {
			jQuery("header").addClass("sticky_logo");
		} else {
			jQuery("header").removeClass("sticky_logo");
		}
	});
});
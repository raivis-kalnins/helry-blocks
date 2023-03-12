document.addEventListener("DOMContentLoaded",function() {
	var $ = jQuery.noConflict();

	function onScroll() {

		/* Check the location of each desired element */
		$(".animated-section").each( function(i) {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 100;
			var bottom_of_window = $(window).scrollTop() + $(window).height() + $(this).outerHeight() + 100;
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
				$(this).addClass("go");
			} else {
				$(this).removeClass("go", 200);
			}
		});
	}
	window.addEventListener('scroll', onScroll, false);
});

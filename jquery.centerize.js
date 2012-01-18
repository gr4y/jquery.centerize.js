(function($) {
	$.fn.centerize = function() {
		var element = $(this);
		element.css({
			position: "absolute",
			left: (($(window).width() - $(element).outerWidth()) / 2) + $(window).scrollLeft() + "px",
			top: (($(window).height() - $(element).outerHeight()) / 2) + $(window).scrollTop() + "px"
		});
		return element;
	}
}(jQuery));

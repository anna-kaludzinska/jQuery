$(function () {

	$("h1").click(function () {
		$(this).css("color", "orange");
	});

	$("h1").on({

		"click": function () {
			$(this).css("color", "orange");
		},

		"mouseleave": function () {
			$(this).css("color", "inherit");
		}
	});
});
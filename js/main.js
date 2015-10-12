$(document).ready(function () {

	setTimeout(function () {

		$('.count').each(function () {
			$(this).prop('Counter', 1).animate({
				Counter: $(this).text()
			}, {
				duration: 400,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});

	}, 15000);

});
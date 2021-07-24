$(document).ready(function() {
	$('.dropdown-btn').click(function(event){
		event.preventDefault();
		$('.dropdown').toggleClass('active');
		$('.header-menu').fadeToggle();
	});

	function adjFooter(x) {
		if (x) { 
			// console.log('shorter, adjust footer');
			$('.footer').css({
				'position': 'absolute',
				'bottom': 0,
				'left': 0,
				'right': 0
			});
		}
		else {
			// console.log('no need for adjustment');
		}
	}
	
	var body = document.body,
	html = document.documentElement;

	var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.offsetHeight ),
	screenHeight = screen.height;

	var x = docHeight < screenHeight;
	adjFooter(x);
});
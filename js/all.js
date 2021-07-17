$(document).ready(function() {
	$('.dropdown-btn').click(function(event){
		event.preventDefault();
		console.log('click');
		$('.dropdown').toggleClass('active');
		$('.header-menu').fadeToggle();
	});
});
$(document).ready(function() {
	$('.dropdown-btn').click(function(event){
		event.preventDefault();
		console.log('click');
		$('.dropdown').toggleClass('active');
		$('.header-menu').fadeToggle();
	});

	var quantitiy=0;
	$('.quantity-plus').click(function(e){	
		// Stop acting like a button
		e.preventDefault();
		// Get the field name
		var quantity = parseInt($('#quantity').val());
		console.log(quantitiy);
		
		// If is not undefined
		$('#quantity').val(quantity + 1);
		// Increment
	});
	$('.quantity-minus').click(function(e){
		// Stop acting like a button
		e.preventDefault();
		// Get the field name
		var quantity = parseInt($('#quantity').val());
		console.log(quantitiy);
		// If is not undefined
		// Increment
		if(quantity > 0){
		$('#quantity').val(quantity - 1);
		}
	});
});
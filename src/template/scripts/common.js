$(document).ready(function($) {

	$('.input_tel input').mask('+7 (000) 000-00-00');
	
	$('.advantages__wrap_slider').slick()

	$('.mobile-btn').click(function() {
		$(this).toggleClass('mobile-btn_toggle');
		$('.nav').toggleClass('nav_toggle');
		$('.bg-mobile').toggleClass('bg-mobile_toggle');
	});

	$('.popup__show span').click(function() {
		$('.popup__right_hidden-mobile').slideToggle(300);
		$('.popup__desc').hide();
		$(this).hide();
	});
});

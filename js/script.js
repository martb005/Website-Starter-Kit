$(document).ready(function(e) {

	// Smoothscrolling
	$('#nav ul li a').bind('click', function(e) {
		if ($(this).parent().hasClass('external')) { //add class "external" to <li> to get external link working. ex. <li class="external"><a href="http://website.com">Website</a></li>
			$(this).attr('target','_blank');
			return true;
		}
		e.preventDefault();
		$('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);                                                       
	});


});

jQuery(function($) {

	// SVG to PNG
	$(function() {
		svgeezy.init();
	});

});

$(function() {
	// Contact form
	$('#form-contact').submit(function() { // Replace usual .PHP form action by javascript to decrease SPAM
		$(this).attr('action','sendmail.php');
	});

	// Transform placeholder to value for old browsers.
	if (!Modernizr.input.placeholder){
		$('input[placeholder],textarea[placeholder]').each(function() {
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).focus(function() {
				if ($(this).val()==$(this).data('placeholder'))  $(this).val('');
			}).blur(function() { 
				if ($(this).val()=='')  $(this).val($(this).data('placeholder'));
			}).blur();
		});
	};

	// Collapse responsive nav on click
	$('.navbar-collapse a').click(function(){
	    $(".navbar-collapse").collapse('hide');
	});

	// Scrollspy
	$('body').scrollspy({ target: '.navbar-collapse' })

});

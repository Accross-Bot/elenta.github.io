jQuery(document).ready(function($) {	
  window.onload = function() {
    $('.loader-icon').removeClass('spinning-cog').addClass('shrinking-cog');
    $('.loader-background').removeClass('color-flip');
	$('#all').delay(500).fadeIn('slow');
    $('#loader').fadeOut('slow');
  }
});

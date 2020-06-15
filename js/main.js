jQuery(document).ready(function($) {
  function timer() {
    setTimeout(endAnim, 8000);
  }
  timer();
  function endAnim() {
    $('.loader-icon').removeClass('spinning-cog').addClass('shrinking-cog');
    $('.loader-background').removeClass('color-flip');
	$('#all').delay(500).fadeIn('slow');
    $('#loader').fadeOut('slow');
  }
});
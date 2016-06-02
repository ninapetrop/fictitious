// Push out menu
$(document).ready(function() {
	$('.toggle-button').click(function(){
    $('.slideout-menu').toggleClass('slideout-open');
    $('main').toggleClass('pushRight');
    $('.bar').toggleClass('open');
  });
});

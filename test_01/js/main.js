$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'X' ? 'Menu' : 'X');
    e.preventDefault();
  });
});

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  cssEase: 'linear'
});
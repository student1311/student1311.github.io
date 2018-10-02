
$( document ).ready(function(){
      $( ".mobile-button a" ).click(function(e){ 
      e.preventDefault();
     
     $( ".menu" ).toggleClass("open",1000);
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
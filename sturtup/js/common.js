$(document).ready(function() {
    $('.slider-multi').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
    });
});

$(document).ready(function() {
    $('.container-single-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 200000,
    });
});


$(".menu a").mPageScroll2id();






$(".top-line").sticky({ topSpacing: 0 });
   

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".top-line").addClass("default");
    } else {
       
       $(".top-line").removeClass("default");
    }
});


var api = $('#but-menu');
api.click( function () {
    if($('.hamburger').hasClass('is-active')){
      $('#menu').css('display', 'none');
      $('.hamburger').removeClass('is-active')
    }
      
    else {
   $('#menu').css('display', 'block');
      $('.hamburger').addClass('is-active');
    }
})



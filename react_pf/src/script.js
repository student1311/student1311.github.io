var MAXSCROLLHEIGHT = 150; // on MAXSCROLLHEIGHT pixel scroll height, the blurred image will be shown on 100% opacity
$(window).scroll(function() {
    opacityVal = $(window).scrollTop() / MAXSCROLLHEIGHT; // replaced the fix value by possible config variable
    if(opacityVal > 1) return; // won't affect the image as you keep scrolling
    $('.introTitle').css('blur', opacityVal);
});
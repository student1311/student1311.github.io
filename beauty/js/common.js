
function initialize() {
    var myLatlng = new google.maps.LatLng(50.097460, 14.406683),
        mapOptions = {
            zoom: 15,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            // maxWidth: 500
        });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);





//magnific popup feedback
$('.popup').magnificPopup();






$('#menu a, .footer a, .logo a').mPageScroll2id({
    offset:125,


});


$('.title-slider').animated('pulse', 'pulse');
$('.titlle-section-edge, .titlle-section-bg, .titlle-section, .titlle-section-about').animated('slideInUp', 'fadeOut');
$('.section-bg-img-in, .section-img-in').animated('zoomIn', 'fadeOut');

$(function(){
            $("#datepicker").datepicker();
       });



$('form').submit(function(e) {
        e.preventDefault();
        /* $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() { */
            alert("Спасибо за заявку!");
            $(this).find('input').val('');
            setTimeout(function() {
               $.magnificPopup.close();
            }, 500);
    
        //return false;
    });



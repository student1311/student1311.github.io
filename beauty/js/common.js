// function initMap() {

//     var centerLatLng = new google.maps.LatLng(50.097460, 14.406683);


//     var mapOptions = {
//         center: centerLatLng, 
//         zoom: 8               
//     };


//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }


// google.maps.event.addDomListener(window, "load", initMap);


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



// $('.carousel').carousel({
//         interval: 1000000
//     });


//magnific popup feedback
$('.popup').magnificPopup();

// $('body').scrollspy({ target: '.menu' })


// //E-mail Ajax Send
// $("form").submit(function() { //Change
//     var th = $(this);
//     $.ajax({
//         type: "POST",
//         url: "mail.php", //Change
//         data: th.serialize()
//     }).done(function() {
//         // $.sweetModal({
//         //     content: 'Спасибо, заявка отправлена!',
//         //     icon: $.sweetModal.ICON_SUCCESS
//         // });
//         alert("Thank you!");
//         setTimeout(function() {
//             // Done Functions
//             th.trigger("reset");
//             $.magnificPopup.close();
//         }, 0);
//     });
//     return false;
// });


// $(".menu a").mPageScroll2id();

$('#menu a, .footer a, .logo a').mPageScroll2id({
    offset:125,


});
// $('.footer a').mPageScroll2id();


// $('#pedicure').mPageScroll2id({
// 	offset:50,
	

// });

// new WOW().init();







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



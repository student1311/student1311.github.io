//  $(function(){
//   $('#hide').text($('.earnings__input-number').val());
//   $('.earnings__input-number').width($('#hide').width());
// }).on('input', function () {
//   $('#hide').text($('.earnings__input-number').val());
//   $('.earnings__input-number').width($('#hide').width());
// });
  

  $('input[type=range]').rangeslider({
            // Options
            polyfill: false,
            rangeClass: 'rangeslider',
            disabledClass: 'rangeslider--disabled',
            horizontalClass: 'rangeslider--horizontal',
            verticalClass: 'rangeslider--vertical',
            fillClass: 'rangeslider__fill',
            handleClass: 'rangeslider__handle',
            onInit: function() {},
            onSlide: function(position, value) {
                $('.earnings__input-number').val(value);
                $('.earnings__result').text(value *2 + '$');

               

                if(value <1000) {
                     $(".earnings__result-wrap").css("background-image", "url('images/money1.png')");
                }
                 if(value >1000 && value <10000 ) {
                   
                     $(".earnings__result-wrap").css("background-image", "url('images/stopka2.png')");
                }
                 if(value >10000 && value <20000 ) {
                    
                     $(".earnings__result-wrap").css("background-image", "url('images/money3.png')");
                }
                if(value >20000 && value <100000 ) {
                    
                     $(".earnings__result-wrap").css("background-image", "url('images/money4.png')");
                }

               
             
            }
        });

      $('.earnings__input-number').bind('click keyup', function(e){
         if(this.value && this.value != ''){
           $('input[type=range]').val(parseInt(this.value)).change(); 
            } 
            else {
                $('input[type=range]').val(0).change();
            }
      });




    



///////////////////particles////////////////////////

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "images/bitok-mini-bg.png",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 7,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        }


    }

);

/////////////////////graph-svg////////////////////////////

(function() {
    var TRANSITION_PROP;
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
        TRANSITION_PROP = 'WebkitTransition';
    } else {
        TRANSITION_PROP = 'transition';
    }
    var path = document.querySelector('#graph-line');
    var length = path.getTotalLength();
    path.style.transition = path.style[TRANSITION_PROP] = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style[TRANSITION_PROP] = 'stroke-dashoffset 3s ease-in-out';
    path.style.strokeDashoffset = '0';
})();


/////////////// current btc///////////////

getRequest();

function getRequest(argument) {
    // var baseurl = 'https://api.cryptonator.com/api/ticker/btc-usd';
    var baseurl = 'https://www.bitstamp.net/api/ticker';

    $.get(baseurl, function(response) {
        // alert('ok');
        console.log(Math.round(response.last));
        $('.numbers__title-current').text(Math.round(response.last));

    }).fail(function() {
        alert("error");

    });

    setTimeout(getRequest, 3000000);
}

////////////// numbers up ////////////////

numberUpRise();
numberUpMax();

function numberUpMax() {
    var a = 0;
    var b = 0;
    obr();

    function obr() {
        $('.numbers__title-max').text(a);

        a += 100;


        timer = setTimeout(obr, 0.4);

        if (a == 19800) {
            clearInterval(timer);
        }


    }
}

function numberUpRise() {

    var b = 0;
    obr2();

    function obr2() {

        $('.numbers__title-rise').text(b);


        b += 100;

        timer2 = setTimeout(obr2, 100);

        if (b == 2600) {
            clearInterval(timer2);
        }


    }
}

$(document).ready(function() {




  



    $('.header__button').click(function() {
        $('.form').fadeTo("slow", 0.99);
        $('.header__button').css('z-index', '1');
        $('.fa-sort-down').css({ 'transform': 'rotate(0deg)' })
        $('#particles-js').addClass('bg');
        $('#particles-js').css('z-index', '1');
        // $('body').css('opasity', '0.3');



    });
    init();

    $('.form').validate({


        rules: {

            name: {
                required: true,
                minlength: 2
            }
        },

        messages: {
            name: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее 2-х символов в поле 'Имя'"
            },
            lastName: {
                required: "Поле 'Фамилия' обязательно к заполнению",
                minlength: "Введите не менее 2-х символов в поле 'Фамилия'"
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email"
            },
            location: {
                required: "Поле 'Страна' обязательно к заполнению",
                minlength: "Введите Вашу страну проживания"
            },
            number: {
                required: "Поле 'Телефон' обязательно к заполнению",
                minlength: "Введите Ваш гомер телефона"
            },

        }
    });




    $('.form__submit').click(function() {

        $('#codePhoneCountry').addClass('valid');
        $('#country').addClass('valid');



        var firstname = $('#firstName').val();
        var lastname = $('#lastName').val();
        var email = $('#email').val();
        var phoneCountry = $('#codePhoneCountry').val().replace('+', '');
        var phoneNumber = $('#phoneNumber').val();
        var phoneOperator = getphoneOperator(phoneNumber);
        phoneNumber = getphoneNumber(phoneNumber);

        var params = {
            Email: email,
            PhoneCountry: phoneCountry,
            PhoneOperator: phoneOperator,
            PhoneNumber: phoneNumber,
            FirstName: firstname,
            LinkId: '10',
            LastName: lastname
        }




        var baseurl = 'https://api.c-crypto.com/Registration/Lead';

        var url_ = getQueryString(baseurl, params);


        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();



        function validMailNotPlus(email) {
            var result = true;
            for (var i = 0; i <= email.length; i++) {
                if (email[i] == '+') {
                    result = false;
                }
            }
            return result;
        }



        if (!validMailNotPlus(email)) {

            $('#email').css('border-color', 'red');
        } else if ($('.form').valid()) {



            $.getJSON(url_, function(response) {

                $('.popup').fadeTo("slow", 1);
            
                $('.popup').css("display", "flex");

                 $('#particles-js').addClass('bg');
                $('#particles-js').css('z-index', '1');
                $('.form').css('display', 'none');



                setTimeout(function() { window.location = "https://c-crypto.com" }, 3000);

            });

        }

    });


    $('.form__close').click(function() {
        $('.form').fadeOut("slow");
        $('.fa-sort-down').css({ 'transform': 'rotate(-90deg)' });
        $('#particles-js').removeClass('bg');
        $('#particles-js').css('z-index', '-1');
         $('.header__button').css('z-index', '100');
    })
    $('.popup__close').click(function() {
        $('.popup').fadeOut("slow");
         $('.header__button').css('z-index', '100');
        $('#particles-js').removeClass('bg');
        $('#particles-js').css('z-index', '-1');
    })

     $('#particles-js').click(function() {
        $('.form').fadeOut("slow");
        $('.popup').fadeOut("slow");
        $('.fa-sort-down').css({ 'transform': 'rotate(-90deg)' });
        $('#particles-js').removeClass('bg');
        $('#particles-js').css('z-index', '-1');
    })


   






    function getQueryString(baseurl, params) {
        var url = baseurl;
        var isFirst = true;
        $.each(params, function(key, value) {
            url += isFirst ? '?' : '&';
            isFirst = false;
            url += (key.toString() + '=' + value);
        });
        return url;
    }



    function getphoneOperator(phoneNumber) {
        var parts = phoneNumber.split(' ', 2);
        if (parts && parts.length > 1) {
            return parts[0].replace('(', '').replace(')', '');
        }
        return '';
    }

    function getphoneNumber(phoneNumber) {
        var parts = phoneNumber.split(' ', 2);
        if (parts && parts.length > 1) {
            return parts[1].replace('-', '').replace('-', '');
        }
        return '';
    }

       function initMask(code) {

            if (code == '+7') {
                $("#phoneNumber").mask("(999) 999-99-99");
            }
            else if(code == '+371'){
                $("#phoneNumber").mask("(999) 99-999");
            }
            else if(code == '+370'){
                $("#phoneNumber").mask("(999) 999-99");
            }
            else{
                $("#phoneNumber").mask("(99) 999-99-99");
            }
    }

    function init() {


        // $.get("https://ipapi.co/json", function(response) {
        //     if (dialcodes[response.country]) {
        //         $('#location').val(dialcodes[response.country].toString());
        //     }

        //     $('#codePhoneCountry').val(response.country_calling_code)

        // });


           $.get("https://ipapi.co/json", function(response) {

            $('#codePhoneCountry').val(response.country_calling_code);


            console.log($('#country').val());
            // console.log($("#country option:selected").text());


            $("select option").each(function() {

                if ($(this).val() == response.country_calling_code)
                    $(this).attr("selected", "selected");
                $('#codePhoneCountry').val();
            });

            $("#country").change(function() {
                // $('#code').val('hello');
                $('#codePhoneCountry').val($(this).attr("selected", "selected").val());
                $('#codePhoneCountry').addClass('valid');
                $('#country').addClass('valid');

                initMask($('#country').val());
            });

            // if(response.country == 'RU' || response.country == 'KZ'){
            //     $("#phoneNumber").mask("(999) 999-99-99");
            // }
            

            initMask($('#country').val());

            // var country = 'UA';




        });

        // $("#phoneNumber").mask("(99) 999-99-99");
    }

    $("#codePhoneCountry").attr('disabled','disabled');


});


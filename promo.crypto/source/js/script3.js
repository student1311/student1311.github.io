$(document).ready(function() {


    var clickid;
    var aff;
    $('.footer__button, .header__nav-link').mPageScroll2id({
        offset: 80,


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






    $('.hero__form-submit').click(function() {






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

            LinkId: '14',

            LastName: lastname,

            AffiliateId: aff,

        }












        var baseurl = 'https://api.c-crypto.com/Registration/Lead';


        var url_ = getQueryString(baseurl, params);








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


               

                if (clickid) {
                    var postbackurl = 'https://offers.c3pa.net/postback?clickid=' + clickid.toString() + '&status=2'
                   
                    $.getJSON(postbackurl, function(response) {



                    });
                }

                $('.popup').fadeTo("slow", 1);



                




                setTimeout(function() { window.location = "https://c-crypto.com" }, 3000);


            });


        }

    });




    $('.popup__close').click(function() {

        $('.popup').fadeOut("slow");





    })


    $('.popup').click(function() {

        $('.popup').fadeOut("slow");
    });











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
        } else if (code == '+371') {

            $("#phoneNumber").mask("(999) 99-999");
        } else if (code == '+370') {

            $("#phoneNumber").mask("(999) 999-99");
        } else {
            $("#phoneNumber").mask("(99) 999-99-99");
        }
    }

  function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}



 

    function init() {



        var query = window.location.search.substring(1);
        var parsed_qs = parse_query_string(query);
        clickid = parsed_qs.clickid;
        aff = parsed_qs.publisherid;

        $.get("https://ipapi.co/json", function(response) {


            $('#codePhoneCountry').val(response.country_calling_code);



            console.log($('#country').val());




            $("select option").each(function() {


                if ($(this).val() == response.country_calling_code)

                    $(this).attr("selected", "selected");

                $('#codePhoneCountry').val();

            });

            $('#codePhoneCountry').addClass('valid');

            $('#country').addClass('valid');


            $("#country").change(function() {


                $('#codePhoneCountry').val($(this).attr("selected", "selected").val());



                initMask($('#country').val());

            });





            initMask($('#country').val());







        });



    }


    $("#codePhoneCountry").attr('disabled', 'disabled');


});
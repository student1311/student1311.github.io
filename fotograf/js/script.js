$(document).ready(function() {

    //magnific popup galerry
    $(".portf-in").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });


    //magnific popup feedback
    $('.popup').magnificPopup();


    //Гамбургер меню
    $('.gamb').click(function() {

        $('.menu-m').slideToggle(300, function() {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });

    });



    //Плавный переход на ссылку(якорь)menu 
    $(".top-nav a, .arrow a").mPageScroll2id();


    //Фиксированная шапка
    $("#header").removeClass("default");

    $(window).scroll(function(event) {
        if ($(this).scrollTop() > 20) {
            $("#header").addClass("default").fadeIn('fast');

        } else {
            $("#header").removeClass("default").fadeIn('fast');
        };
    });




    //slider time
    $('.carousel').carousel({
        interval: 3000
    });


    //изчезновение стрелки
    $(function(f) {
        var element = f('.arrow');
        f(window).scroll(function() {
            element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](500);
        });
    });




    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $.sweetModal({
                content: 'Спасибо, заявка отправлена!',
                icon: $.sweetModal.ICON_SUCCESS
            });
            // alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
                $.magnificPopup.close();
            }, 0);
        });
        return false;
    });






// $(window).stellar();

});

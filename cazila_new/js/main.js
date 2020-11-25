$('#slider_1').slick({   
    prevArrow: '<button type="button" class="butt_prev"><img src="img/prew.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/next.png"></button>',
   
});


$('#slider_zal').slick({
 
    prevArrow: '<button type="button" class="butt_prev"><img src="img/ar_prew.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/ar_next.png"></button>',
  
});

$('#slider_menu').slick({
  
    prevArrow: '<button type="button" class="butt_prev"><img src="img/ar_prew.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/ar_next.png"></button>',
   
});
$('#slider-tables').slick({
  
    prevArrow: '<button type="button" class="butt_prev"><img src="img/ar_prew.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/ar_next.png"></button>',
   
});
$('#slider-tables2').slick({
  
    prevArrow: '<button type="button" class="butt_prev"><img src="img/ar_prew.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/ar_next.png"></button>',
   
});
$('#slider-tables3').slick({
  
    prevArrow: '<button type="button" class="butt_prev"><img src="img/ar_prew.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/ar_next.png"></button>',
   
});
$('#slider-tables4').slick({
  
    prevArrow: '<button type="button" class="butt_prev"><img src="img/ar_prew.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/ar_next.png"></button>',
   
});

$('#slider-invitation').slick({
   
    prevArrow: '<button type="button" class="butt_prev"><img src="img/prew.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/next.png"></button>',
   
});


//перезагрузка слайдеров в табах
$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {

    let slider = $('#' + $(e.target).attr('aria-controls')).find('.slick-initialized');

    if (slider.length > 0) {}
    for (i = 0; i < slider.length; i++) {
        $("#" + slider.eq(i).attr('id')).slick('reinit');
    }

    return true;
})

// выездная вкладка сообщений слева
$(".message_al").mouseover(function() { $(this).addClass("left_mess"); });
$(".message_al").mouseout(function() { $(this).removeClass("left_mess"); });

//кнопка наверх
$(function() {
    if ($(window).width() >= 1200){
            $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 800);
        });
    }
    

});


$('.tabl_al').on('click', function() { //при нажатии на столы - изменение цвета и статуса

    $(".menu_popap").hide();

    //rgb(233,37,48) - красный
    //rgb(28,147,64) - зеленый
    //rgb(171,178,188) - серый

    if ($(this).css('background-color') == 'rgb(171, 178, 188)') { // если цвет серый
        $(this).css('background-color', 'rgb(233, 37, 48)').parent().removeClass('js_action'); //  меняем на красный
    } else if ($(this).css('background-color') == 'rgb(233, 37, 48)') { // если цвет красный
        $(this).css('background-color', 'rgb(28, 147, 64)').parent().addClass('js_action'); // при нажатии меняем на зеленый
    } else if ($(this).css('background-color') == 'rgb(28, 147, 64)') { // если цвет зеленый
        $(this).css('background-color', 'rgb(171, 178, 188)').parent().removeClass('js_action'); //  при нажатии меняем на серый
    }

});

// $('.marg_b34 .col-md-1').click(function() {



// });
//меню при наведении на забронированные столы
$("body").on({
    mouseenter: function() {

        let modal = $(this).find(".menu_popap");

        let top = $(this).offset().top - $(window).scrollTop();
        let height = $(window).height() / 2;

        let left = $(this).offset().left;

        if (height > top) {
            modal.removeClass('bott_pos').addClass('top_pos');
        } else {
            modal.removeClass('top_pos').addClass('bott_pos');
        }

        if ($(window).width() / 2 < left) {
            modal.removeClass('left_pos').addClass('right_pos');
        } else {
            modal.removeClass('right_pos').addClass('left_pos');
        }

        modal.show();

    },
    mouseleave: function() {
        $(this).find(".menu_popap").hide();
    }
}, '.js_action');


//вкладки из меню ресторана

$("[href='#salads']").trigger("click");


//выбор  кол-ва 
$('.minus').click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function() {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});


//датапикер с временем и датой
// $(function() {
//     $('#datetimepicker5').datetimepicker({
//         defaultDate: "11/1/2019",
//         disabledDates: [
//             moment("12/25/2019"),
//             new Date(2019, 11 - 1, 21),
//             "11/22/2019 00:53"
//         ]
//     });
// });
// $(function() {
//     $('#datetimepicker6').datetimepicker({
//         defaultDate: "11/1/2019",
//         disabledDates: [
//             moment("12/25/2019"),
//             new Date(2019, 11 - 1, 21),
//             "11/22/2019 00:53"
//         ]
//     });
// });
// $(function() {
//     $('#datetimepicker7').datetimepicker({
//         defaultDate: "11/1/2019",
//         disabledDates: [
//             moment("12/25/2019"),
//             new Date(2019, 11 - 1, 21),
//             "11/22/2019 00:53"
//         ]
//     });
// });
// $(function() {
//     $('#datetimepicker8').datetimepicker({
//         defaultDate: "11/1/2019",
//         disabledDates: [
//             moment("12/25/2019"),
//             new Date(2019, 11 - 1, 21),
//             "11/22/2013 00:53"
//         ]
//     });
// });
// $(function() {
//     $('#datetimepicker9').datetimepicker({
//         defaultDate: "11/1/2019",
//         disabledDates: [
//             moment("12/25/2013"),
//             new Date(2019, 11 - 1, 21),
//             "11/22/2013 00:53"
//         ]
//     });
// });



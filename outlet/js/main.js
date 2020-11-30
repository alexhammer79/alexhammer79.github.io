$('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 105000,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="butt_prev"><img src="img/prev.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/next.png"></button>'
});

$('#slider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 105000,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="butt_prev"><img src="img/pr_arr.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/arr_right.png"></button>'
});

$('#slider_about').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 105000,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="butt_prev"><img src="img/1.png"></button>',
    nextArrow: '<button type="button" class="butt_next"><img src="img/2.png"></button>'
});
// $('#slider-for').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: true,
//     autoplaySpeed: 105000,
//     dots: false,
//     arrows: true,
//     prevArrow: '<button type="button" class="butt_prev"><img src="img/1.png"></button>',
//     nextArrow: '<button type="button" class="butt_next"><img src="img/2.png"></button>'
// });



$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'  
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: true,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding:"10px",
  prevArrow: '<button type="button" class="butt_prev"><img src="img/1.png"></button>',
  nextArrow: '<button type="button" class="butt_next"><img src="img/2.png"></button>'
});







var w;
if ($(window).width() > 1279) {
    w = $(".menu").width();
    $(".js_open_ul").width(w - 0);
}
//  else if ($(window).width() <= 991 && $(window).width() >= 768) {
//  w = $(".slider_section2").height();
//  $(".js_open_ul").height(h + 1);
// } else if ($(window).width() <= 1278 && $(window).width() >= 992) {
//  w = $(".slider_section").height();
//  $(".js_open_ul").height(h + 1);
else {
    // w = $(".menu").height();
    $(".js_open_ul").css("display", "none");
    $(".chat_person").click(
            function(){
                $(".left").css('display', 'none');
                $(".right").css('display', 'block').css('right', '0').css('transition', 'all 7s');
                $(".write").css('display', 'block').css('right', '0').css('transition', 'all 7s');
            }
    );
    $(".arr_back").click(
            function(){
                $(".left").css('display', 'block');
                $(".right").css('display', 'none').css('right', '-100%').css('transition', 'all 1s');
                $(".write").css('display', 'none').css('right', '-100%').css('transition', 'all 1s');
            }
    );
}



// $("#menu").click(function() {
//     $(".open_ul").toggle(function() {
//         $(".open_ul").css('height', '0');
//     }, function() {
//         $(".open_ul").css('height', '392');
//     });
// });

$("#menu").click(function() {
    $(".open_ul").toggle(300);
});


$(function() {
    $('#dl-menu').dlmenu({
        animationClasses: { classin: 'dl-animate-in-5', classout: 'dl-animate-out-5' }
    });
});


$(document).ready(function() {
    $("[href='#subscr']").trigger("click");
});


$('.cool-input__input').on('focus', function() {

    $(this).parent('div').find('span').addClass('test').show();

});

$('.cool-input__input').on('focusout', function() {

    if ($(this).val() != '')
        $(this).parent('div').find('span').removeClass('test').hide();
    else
        $(this).parent('div').find('span').removeClass('test');
});



$('.js-icon-open').on('click', function() {

    $(this).find(".icon-close").toggle();
    $(this).find(".icon-open").toggle();

    let input = $(this).parents('.form-group').find('input');

    if (input.attr('type') == 'password')
        input.attr('type', 'text');
    else
        input.attr('type', 'password');
});


$("#phone").mask("+7(999) 999-99-99");
$("#phone_conf").mask("+7(999) 999-99-99");






$(".box-tabs__forgot").click(function() {
    $("#lost_pass").modal('show');
});

// $(document).ready(function() {
//     $("#conf_email").modal('show');
// });
// $(document).ready(function() {
//     $("#conf_sms").modal('show');
// });




$(".js_modal_open").on("click", function(e) {

    e.preventDefault();

    $(".modal").modal('hide');
    modal_name = $(this).attr("modal_name");


    setTimeout(function() {
        $("#" + modal_name).modal('show');
    }, 500);

});

$().fancybox({
    selector: '.imglist a:visible',
    // buttons  :[
    //   'close'
    // ],
    // thumbs   : {
    //   autoStart : true
    // }

});


$(".js_tooltip_btn").hover(
        function () {
            $(this).find('.js_tooltip').toggle();
        },
        function () {
            $(this).find('.js_tooltip').toggle();
        }
);


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

// if($(".slideitem").hasClass("slick-active")){
//           $(".slider_p_top").css("animation","movetext 4s 1 ease-in-out");
//     }


//триггер для раскрытия категорий товаров
$("[href='#outerwear']").trigger("click");


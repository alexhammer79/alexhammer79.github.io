$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  adaptiveHeight: true,
  
});

$(window).scroll(function() {
    
    if($(window).scrollTop()>150 && !$(".basket_div").hasClass("right_div_static")){
          $(".basket_div").addClass("right_div_static");
    }

    if($(window).scrollTop()<150 && $(".basket_div").hasClass("right_div_static")){
          $(".basket_div").removeClass("right_div_static");
    }

});

$(document).ready(function() {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });
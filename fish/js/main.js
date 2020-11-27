$('.slider_mob').slick(
  {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000000
  
});
// $('.center').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

// $(".burg").click(function(){  
//   $(".right_block").css("display","block")
// });

$(function(){ 
          $('.burg').click(function(){
              $('.right_block').css("display","block"); 
          });
          $('.close').click(function(){
              $('.right_block').css("display","none"); 
          });
      });


//кнопка наверх
$(function() {
    if ($(window).width() >= 320){
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


jQuery(document).ready(function() {

	     $('.slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots:true,
          arrows:false
        });  


       $('.slider_gallery').slick({
          dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
    {
      breakpoint: 978,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,        
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
        });  



       $('.slider_ipad').slick({
          infinite: true,
          centerPadding: '0px',
          
          rows:2,
          slidesPerRow:2,
          dots:true,
          arrows:false,          
          slidesToScroll: 1
        });




       $('.slider_ifon').slick({
          infinite: true,
          centerPadding: '0px',
          
          rows:4,
          slidesPerRow:1,
          dots:true,
          arrows:false,          
          slidesToScroll: 1
        });



	/*   $('#slider').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      });

      $('#slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  prevArrow: '<button type="button" class="butt_prev"><img src="images/slider sport/prev.png"></button>',
nextArrow: '<button type="button" class="butt_next"><img src="images/slider sport/next.png"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


$('#slidder2').slick({
  infinite: false,
  centerPadding: '0px',
  slidesToShow: 2,
  rows:2,
  prevArrow: '<button type="button" class="butt_prev2"><img src="images/slider sport/prev1.png"></button>',
nextArrow: '<button type="button" class="butt_next2"><img src="images/slider sport/next1.png"></button>',
  slidesToScroll: 1
});*/

});



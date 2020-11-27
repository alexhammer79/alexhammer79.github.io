$(window).scroll(function() {
    
    if($(window).scrollTop()>60 ) {     //скролл
          $(".menu-primary-menu-container").addClass("displ_none");
          $(".menu-secondary-menu-container").addClass("displ_none");
          $(".menu-persistent-container").addClass("new_opasity");
          $(".menu-toggle").addClass("toggl");
          
          $(".navigation-decor").addClass("fff");
	        // $(".navigation-decor").animate({display:"none"},2000);
	     
          
    }

    if($(window).scrollTop()<60 ){
          $(".menu-primary-menu-container").removeClass("displ_none");
          $(".menu-secondary-menu-container").removeClass("displ_none");
          $(".menu-persistent-container").removeClass("new_opasity");
          $(".menu-toggle").removeClass("displ_block");
          $(".navigation-decor").removeClass("fff");
          $(".menu-toggle").removeClass("toggl");
    }



    // console.log($(window).scrollTop());
    // console.log($('.cards-quotes').offset().top - $(window).height());

});


if($(window).width() <= 1200){
          // $(".menu-primary-menu-container").css("display","none");
          // $(".menu-secondary-menu-container").css("display","none");
          $(".main-navigation").css("display","none");
          $(".navigation-decor").css("display","none");
          $(".menu-persistent-container").css("display","none");
          $(".menu-toggle").addClass("toggl2");
          $(".toggl2").click(function(){
            $(".main-navigation").toggle();
          })
    
    }






 var rellax = new Rellax('.rellax', {
    speed: 2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
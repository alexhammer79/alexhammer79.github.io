

$(document).ready(function(){  
  $(".butt_top").click(function() {    
    $("#modal1").modal('show');
  });
    
  $(".butt").click(function() {    
    $("#modal2").modal('show');
  });

  $(".butt_back").click(function() {    
    $("#modal3").modal('show');
  });
  $(".invest").click(function() {    
    $("#modal5").modal('show');
  });
  

  $('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
	});
	$(document).click(function() {
  	$('.dropdown-el').removeClass('expanded');
	});

	$('.dropdown-el2').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
	});
	$(document).click(function() {
  	$('.dropdown-el2').removeClass('expanded');
	});

  $('.dropdown-el3').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el3').removeClass('expanded');
  });

  $('.dropdown-el4').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el4').removeClass('expanded');
  });

  $('.dropdown-el5').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el5').removeClass('expanded');
  });

   $('.dropdown-el6').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el6').removeClass('expanded');
  });

   $('.dropdown-el7').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el7').removeClass('expanded');
  });

  $('.dropdown-el8').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el8').removeClass('expanded');
  });

  $('.dropdown-el9').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el9').removeClass('expanded');
  });


  $(function() {
        $('.myTabExample #buy').tab('show')
      });
  $(function() {
        $('.myTabactive #crypto').tab('show')
      });



  
    // $('.minus').click(function () {
    //             var $input = $(this).parent().find('input');
    //             var count = parseInt($input.val()) - 1;
    //             count = count < 1 ? 1 : count;
    //             $input.val(count);
    //             $input.change();
    //             return false;
    //         });
    //         $('.plus').click(function () {
    //             var $input = $(this).parent().find('input');
    //             $input.val(parseInt($input.val()) + 1);
    //             $input.change();
    //             return false;
    //         });


// function range(){
//   var
//   val = $('.range').val();
//   $('.range').css({'background':'-webkit-linear-gradient(left, #8870FF 0%, #8870FF '+val+'%, #fff '+val+'%, #fff 100%)'});
//  }
    $(".js_modal_open").on("click", function(e) {

      e.preventDefault();

      $(".modal").modal('hide');
      modal_name = $(this).attr("modal_name");
      

      setTimeout(function () {
          $("#" + modal_name).modal('show');          
      }, 500);
       
    });


    





	

});

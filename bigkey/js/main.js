//кнопка наверх
$(function() {
    if ($(window).width() >= 768){
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

$(function(){ 
    $('.burger_little').click(function(){
        $('.right_block').css("display","block"); 
    });
    $('.close').click(function(){
        $('.right_block').css("display","none"); 
    });
});

//

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});




function getCoords(elem) {
    /*Получаем координаты относительно окна браузера*/
    let coords = elem.getBoundingClientRect();
    /*Высчитываем значения координат относительно документа, вычисляя прокрутку документа*/
    return {
        top : coords.top + window.pageYOffset,
        left : coords.left + window.pageXOffset,
        leftX: coords.left,
        rigth : coords.left + window.pageXOffset + coords.width,
        bottom : coords.top + window.pageYOffset + coords.height,
        width : coords.width
    }
}

function moveRange (elem) {
    /*Находим нужный элемент по классу или id*/
    var coords = getCoords(elem);

    /*Определяем зону окрашывания*/
    var colorRange = elem.parentElement.children[1];
    var f;//устанавливаем флаг для определения мин или макс элемента
    var value; //значение фильтра

    /*Определяем второй ползунок и родителя*/
    var parent = {}
        parent.element = elem.parentElement;
        parent.coords = getCoords(parent.element);

    var block2 = {}
    if (elem.classList.contains('block-min')) {
        block2.element = elem.parentElement.children[2];
        block2.coords = getCoords(block2.element);
        f=0;
    } else {
        block2.element = elem.parentElement.children[0];
        block2.coords = getCoords(block2.element);
        f=1;
    }

    /*Делаем индикатор над ползунком*/
    var indicator = document.createElement('div');
    if (elem.children.length){
        elem.innerHTML = '';//обнуляем предыдущее значение
    }
    elem.appendChild(indicator);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);

    /*выключаем браузерное событие DaD*/
    elem.ondragstart = function(){
        return false;
    }

    function onMouseMove(e) {

        /*Определяем смещение влево*/
        e.preventDefault();//предотвратить запуск выделения элементов

        /*Определяем положение мыши в зависимости от устройства*/
        /*На мобильных устройствах может фиксироваться несколько точек касания, поэтому используется массив targetTouches*/
        /*Мы будем брать только первое зафиксированое касание по экрану targetTouches[0]*/
        if (e.touches === undefined) {
            var pos = e.clientX;
        } else {
            var pos = e.targetTouches[0].clientX;
        }

        /*Устанавливаем границы движения ползунка*/
        let newLeft = pos - parent.coords.leftX;
        let rigthEdge = parent.coords.width - (coords.width+1);

        if (newLeft<0) {
            newLeft = 0;
        } else if (newLeft > rigthEdge) {
            newLeft = rigthEdge;
        }
        if (f == 0 && pos > block2.coords.left-block2.coords.width) {
            newLeft = block2.coords.left - block2.coords.width - parent.coords.leftX;
        }else if (f == 1 && pos < block2.coords.rigth + 5) {
            newLeft = block2.coords.rigth - block2.coords.left;
        }
        /*устанавливаем отступ нашему элементу*/
        elem.style.left = newLeft + 'px';

        //     Определяем значение фильтра
        let rangeMin = +document.querySelector('.filter number:first-child').innerHTML;
        let rangeMax = +document.querySelector('.filter number:last-child').innerHTML;
        if(f==0){
          value =  (newLeft / (parent.coords.width / (rangeMax - rangeMin)) + rangeMin).toFixed(1);
        } else {
          value = (newLeft / (parent.coords.width / (rangeMax - rangeMin))+ 0.3 + rangeMin).toFixed(1);
        }

        /*Выводим значение над ползунком*/
        indicator.style.position = 'absolute';
        indicator.style.fontSize = "14px";
        indicator.style.left = - coords.width/2 + "px";
        indicator.style.top = parseFloat(window.getComputedStyle(elem).getPropertyValue('top')) - 10 +"px";

        /*Для красоты слайдера уберем вывод значений в начальной и конечной точках*/
        if (value <= rangeMin){
            indicator.innerHTML= "";
        } else if (value >= rangeMax) {
            indicator.innerHTML= "";
        } else {
            indicator.innerHTML = value;
        }


        /*Делаем цветную плашечку диапазона выбора*/
        if (f == 0) {
            colorRange.style.left = newLeft + coords.width + "px";
            colorRange.style.width = block2.coords.left - getCoords(elem).left - coords.width + "px";
        }  else {
            colorRange.style.left = block2.coords.left - parent.coords.leftX + "px";
            colorRange.style.width = getCoords(elem).left - block2.coords.left + "px";
        }    
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
    }

    
}


//accordion

  $("[href='#collapseOne']").trigger("click");




  $("[href='#el1']").trigger("click");

     



$('.slider_bank').slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: '<button type="button" class="butt_prev"><img src="img/prev.svg"></button>',
  nextArrow: '<button type="button" class="butt_next"><img src="img/next.svg"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
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
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.slider_houses').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay:false,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="butt_prev"><img src="img/novostroy/prev.svg"></button>',
  nextArrow: '<button type="button" class="butt_next"><img src="img/novostroy/next.svg"></button>',
});



// $(function() {
//     $('.myTabNew #design').tab('show')
// });

$('.descr_div').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay:false,
  slidesToShow: 5,
  slidesToScroll: 5,
  adaptiveHeight: true,  
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
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
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});







$('.plan_div').on('click', ".js_switch" , function () {

    $(this).toggleClass('alex_switch_is_active');


});




$(function() {
    $('#plot').tab('show')
  });


$("[href='#land_plot1']").trigger("click");





try{
$().fancybox({
  selector : '.imglist a:visible', 
  
});
}catch(e){
	
}



$(".js_modal_open").on("click", function(e) {
    e.preventDefault();
    $(".modal").modal('hide');
    modal_name = $(this).attr("modal_name");
    setTimeout(function() {
        $("#" + modal_name).modal('show');
    }, 100);
});



$('.js_open_pans').click( function(){

    let block_id = $(this).data('id');

    $('.js_open_pans').removeClass('active');
    $(this).addClass('active');
    $('.tab-pane').filter(function( index ) {
        return !$(this).hasClass('children');
      }).hide();
    $('#'+block_id).show();

    if (block_id=='about') {
       // $(".descr_div").slick('reinit');
    }

    if(block_id =='stroke' && !$('#image-gallery').hasClass('lSSlide')){
        
        $("#content-slider").lightSlider({
            loop:true,
            keyPress:true
        });

        $('#image-gallery').lightSlider({
            gallery:true,
            item:1,
            thumbItem:9,
            slideMargin: 0,
            speed:500,
            auto:false,
            loop:true,
            onSliderLoad: function() {
                $('#image-gallery').removeClass('cS-hidden');
            }  
        });
    }

});
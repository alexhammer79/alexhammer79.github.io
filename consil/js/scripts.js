try{
	superplaceholder({
		el: document.getElementById("diagnos"),
		sentences: [ 'Введите диагноз' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	console.log(e);
}


try{
	superplaceholder({
		el: document.getElementById("spec"),
		sentences: [ 'Введите специальность или ID' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("country"),
		sentences: [ 'Страна' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: true
		}
	});
}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("sity"),
		sentences: [ 'Город' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: true
		}
	});

}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("count"),
		sentences: [ 'Страна' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: true
		}
	});
}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("name_clinic"),
		sentences: [ 'Ваше имя или название клиники' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("email"),
		sentences: [ 'Ваш e-mail' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("problem"),
		sentences: [ 'Ваш вопрос' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("prof_count"),
		sentences: [ 'введите страну проживания' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("prof_name_clinic"),
		sentences: [ 'введите имя или название клинники' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	
}
try{
	superplaceholder({
		el: document.getElementById("prof_email"),
		sentences: [ 'введите email' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	
}

try{
	superplaceholder({
		el: document.getElementById("prof_problem"),
		sentences: [ 'Сообщение' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: true
		}
	});
}catch(e){
	
}
try{
	superplaceholder({
		el: document.getElementById("id_users"),
		sentences: [ 'Введите его ID' ],
		options: {
			letterDelay: 280,
			loop: true,
			startOnFocus: false
		}
	});
}catch(e){
	
}




//Считаем высоту видео
var video_height = $(".js_video_block").height();


//метод отображения всплывающего хедера
$(window).scroll(function() {


  if($('body').scrollTop()>video_height && !$(".top_menu").hasClass("top_menu_scrolled")){
  	$(".top_menu").addClass("top_menu_scrolled");
  }

  if($('body').scrollTop()<video_height && $(".top_menu").hasClass("top_menu_scrolled")){
  	$(".top_menu").removeClass("top_menu_scrolled");
  }

});

//в ссылку добавить js_modal_open_with_blur и modal_name ( id модального окна)
//в модальное js_modal_close_not_blur

/*Открытие модального окна с размытием*/

$(".js_modal_open_with_blur").on("click",function(e)
{      
    $(".modal").modal('hide');
	modal_name = $(this).attr("modal_name");
	e.preventDefault();
    
    setTimeout(function(){
    	$("#"+modal_name).modal('show');
    	$(".global-container").addClass("global-container_blur");
    },500);
		      
});


/*Модальное окно событие закрытия*/
$('.modal').on('hidden.bs.modal', function(e)
{
 	if(e.target.className.indexOf("js_modal_close_not_blur")>=0)
 	{
 		$(".global-container").removeClass("global-container_blur"); 
 	}		
 })

/*Модальное окно событие открытия*/
$('.modal').on('shown.bs.modal', function()
{
 	if(!$("body").hasClass("modal-open"))
 	{
		$("body").addClass("modal-open");
 	} 	 	
 })


$("body").css("width", $("body").width());


$("#soc_net_js").on("click",function(e){
	//e.preventDefault();
   	$(".fount_hide").show();
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div =$("#soc_net_js"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$(".fount_hide").hide(); // скрываем его
	}
});

$("#rec_users_js").on("click",function(e){
	//e.preventDefault();
   	$(".users_hide").show();
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div =$("#rec_users_js"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$(".users_hide").hide(); // скрываем его
	}
});


$("#transport_js").on("click",function(e){
	//e.preventDefault();
   	$(".transport_hide").show();
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div =$("#transport_js"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$(".transport_hide").hide(); // скрываем его
	}
});


$("#inet_js").on("click",function(e){
	//e.preventDefault();
   	$(".inet_hide").show();
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div =$("#inet_js"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$(".inet_hide").hide(); // скрываем его
	}
});


//Считаем высоту видео
var video_height = $(".js_video_block").height();

//метод отображения всплывающего хедера
$(window).scroll(function() {
    
    if($(window).scrollTop()>video_height && !$(".top_menu").hasClass("top_menu_scrolled")){
          $(".top_menu").addClass("top_menu_scrolled");
    }

    if($(window).scrollTop()<video_height && $(".top_menu").hasClass("top_menu_scrolled")){
          $(".top_menu").removeClass("top_menu_scrolled");
    }

});

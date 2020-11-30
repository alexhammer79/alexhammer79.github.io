function updateData() {
        let currentPosition = $("#slider-main").slider("value");
        $('#result').html(currentPosition);
    }

    $("#slider-main").slider({
        range: "min",
        value: 2,
        max: 4,
        change: updateData
    });



// function format(state) {
//     if (!state.id) return state.text; // optgroup
//     return "<img class='flag' src='img/flags/" + state.id.toLowerCase() + ".png'/>" + state.text;
// }
// $("#e4").select2({
//     formatResult: format,
//     formatSelection: format,
//     escapeMarkup: function(m) { return m; }
// });


function formatState (state) {
	if (!state.id) { return state.text;}
	var $state = $(
		'<span><img src="img/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
		);
	return $state;
};

$(".js-example-templating").select2({
	templateResult: formatState
})

$(".al_country").select2({
})

 $(".js_show_al").mouseover(function(){$(".cloud4").css("display","block")});
 $(".js_show_al").mouseout(function(){$(".cloud4").css("display","none")});
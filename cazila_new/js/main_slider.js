//ползунок
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 16,
        max: 80,
        values: [18, 40],
        slide: function(event, ui) {
            $("#amount").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val("" + $("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));
});


$(function() {
    $("#slider-range2").slider({
        range: true,
        min: 16,
        max: 80,
        values: [18, 40],
        slide: function(event, ui) {
            $("#amount2").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount2").val("" + $("#slider-range2").slider("values", 0) +
        " - " + $("#slider-range2").slider("values", 1));
});

$(function() {
    $("#slider-range3").slider({
        range: true,
        min: 0,
        max: 80,
        values: [18, 40],
        slide: function(event, ui) {
            $("#amount3").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount3").val("" + $("#slider-range3").slider("values", 0) +
        " - " + $("#slider-range3").slider("values", 1));
});

$(function() {
    $("#slider-range4").slider({
        range: true,
        min: 0,
        max: 220,
        values: [150, 180],
        slide: function(event, ui) {
            $("#amount4").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount4").val("" + $("#slider-range4").slider("values", 0) +
        " - " + $("#slider-range4").slider("values", 1));
});

$(function() {
    $("#slider-range5").slider({
        range: true,
        min: 1,
        max: 30,
        values: [1, 7],
        slide: function(event, ui) {
            $("#amount5").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount5").val("" + $("#slider-range5").slider("values", 0) +
        " - " + $("#slider-range5").slider("values", 1));
});

$(function() {
    $("#slider-range6").slider({
        range: true,
        min: 1,
        max: 12,
        values: [1, 7],
        slide: function(event, ui) {
            $("#amount6").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount6").val("" + $("#slider-range6").slider("values", 0) +
        " - " + $("#slider-range6").slider("values", 1));
});

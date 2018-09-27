$(document).ready(function() {


    $('.cool-input__input').on('focus', function() {

        $(this).parent('div').find('span').addClass('test').show();

    });

    $('.cool-input__input').on('focusout', function() {

        if ($(this).val() != '')
            $(this).parent('div').find('span').removeClass('test').hide();
        else
            $(this).parent('div').find('span').removeClass('test');
    });

    $('#select_year').styler({
        onSelectOpened: function() {
            $('.jq-selectbox__trigger-arrow').addClass('bg_arrow_top');
        },
        onSelectClosed: function() {
            $('.jq-selectbox__trigger-arrow').removeClass('bg_arrow_top');
        },
    });



    function updateData() {
        let currentPosition = $("#slider").slider("value");
        $('#result').html(currentPosition);
    }

    $("#slider").slider({
        range: "min",
        value: 3,
        max: 4,
        change: updateData
    });



});
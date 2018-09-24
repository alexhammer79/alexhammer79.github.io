$(function() {

    // Custom JS

    $width = $('body').width();
    if ($width < 768) {
        $('.autor__photo').attr('src', 'img/karen2.png');
        $('.work__graph').attr('src', 'img/graph2.png');
    }

    $('.lic__slider, .company__slider, .team__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // infinite: true,
                // dots: true
            }
        }]
    });

    $('.faq__item').click(function(event) {
        $(this).children('.faq__text').toggle(0);
    });

    $('.maps__our-item').hover(function() {
        $(this).next('.maps__item-text').fadeIn();
    }, function() {
        $(this).next('.maps__item-text').fadeOut();
    });

});

$(window).on('load', function() {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $preloader.delay(3500).fadeOut('slow');

    $('.go-item-left').addClass('animated fadeOutLeft');
    $('.go-item-right').addClass('animated fadeOutRight');

    setTimeout(function() { $('.intro__item-1').css('opacity', '1').addClass('animated fadeInDown'); }, 4800);
    setTimeout(function() { $('.intro__item-2').css('opacity', '1').addClass('animated fadeInDown'); }, 5000);
    setTimeout(function() { $('.intro__item-3').css('opacity', '1').addClass('animated fadeInDown'); }, 5200);

    $('.section__column').removeClass('wow animate fadeOut fadeIn');
});

function initialize() {
    //set array of styles
    var styles = [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
        }, {
            "color": "#000000"
        }, {
            "lightness": 40
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }, {
            "weight": 1.2
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 21
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 29
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 19
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }]

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
    var mapOptions = {
        center: new google.maps.LatLng(46.456389, 30.678995),
        zoom: 15,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeId: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var image = 'img/icon__dot.png';

    var loft2 = { lat: 46.456389, lng: 30.678995 };
    var marker2 = new google.maps.Marker({
        position: loft2,
        map: map,
        title: '',
        icon: image
    });

};

google.maps.event.addDomListener(window, 'load', initialize);

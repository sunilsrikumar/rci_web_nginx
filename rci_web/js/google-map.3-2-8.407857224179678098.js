$(document).ready(function() {
     $(".mapbutton").click(function (e) {
        var buttonid = $(this).attr("id");
        var lc = $(".contact_tab li.active").attr("id");
        var lt = countryspecific[0][buttonid].lat;
        var lg = countryspecific[0][buttonid].lng;
        $('html, body').animate({
            scrollTop:  $("#map_canvas").offset().top
        }, 800);
        show_custom_google_map_for_contact(buttonid, 1, lc, lt, lg, 15);
    }); 
});

var jQ = $.noConflict();

var countryspecific = [{
        "Fairfax":{'lat': "38.8582215", 'lng': '-77.3851351' },
        "Vazhuthacaud":{'lat': "8.498837", 'lng': '76.957913' },
        "Tejaswini":{'lat': "8.556715", 'lng': '76.882095' },
        "Pattom":{'lat': "8.527984", 'lng': '76.939439' },
        "Ganga":{'lat': "8.547629", 'lng': '76.879519' },
        "Kochi":{'lat': "10.010069", 'lng': '76.365838' },
        "Koratty":{'lat': "10.269018", 'lng': '76.354186' },
        "Calicut":{'lat': "11.276461", 'lng': '75.772169' },
        "Australia":{'lat': "-33.815182", 'lng': '151.009295' },
        "Singapore":{'lat': "1.295279", 'lng': '103.859414' },
        "Chennai":{'lat': "13.05939", 'lng': '80.24567' },
        // "Bialystok":{'lat': "53.129196", 'lng': '23.154811' },
        // "Sheffield":{'lat': "53.376279", 'lng': '-1.468971' },
        "UAE":{'lat': "25.11695", 'lng': '55.39116' },
        "Salisbury":{'lat': "51.012479", 'lng': '-1.650041' },
        "Sunnyvale":{'lat': "37.389530", 'lng': '-122.018391' },
        "Stafford":{'lat': "29.606744", 'lng': '-95.564448'}
    }];

function show_contacts_tab(option) {
    var windw = document.body.clientWidth;
    var optionid = option;
    var optiontext = $('#'+optionid).text();
    if ($('#'+optionid).hasClass("active")) {
        $('#'+optionid).siblings().removeClass("active");
        $("#postmapcont .subMenus .menuSelected li p span").text(optiontext);
        if(windw < 1025) {
           $("#postmapcont .subMenus #mobMenuHolder").css("display","none");
        }
    }
    else {
        $('#'+optionid).addClass("active").siblings().removeClass("active");
         $("#postmapcont .subMenus .menuSelected li p span").text(optiontext);
          if(windw < 1025) {
           $("#postmapcont .subMenus #mobMenuHolder").css("display","none");
        }
    }
    if ($('.'+optionid+'-Contacts').hasClass("active")) {
        $('.'+optionid+'-Contacts').siblings().removeClass("active");
    }
    else {
        $('.'+optionid+'-Contacts').addClass("active").siblings().removeClass("active");
    }
    switch (optionid) {
    case 'Americas':
        var lt = "38.8582215";
        var lg = "-77.3851351";
        break;
    case 'Asia-Pacific':
        var lt = "-11.5";
        var lg = "107.5";
        break;
    case 'Europe':
        var lt = "52.197901";
        var lg = "11.205775";
        break;
    case 'Middle-East':
        var lt = "35.8582215";
        var lg = "87.3851351";
        break;
    default:
        var lt = "-11.5";
        var lg = "107.5";
        
    };
    
    show_custom_google_map_for_contact(undefined,0,optionid, lt, lg, 3);
    $ = jQ;
};


function show_custom_google_map_for_contact(ky,flag, loc, Lat, Lng, zoom, map_canvas_id, marker_image) {

    // set default values(values for QBurst India) for map customization.
    var flag = typeof flag !== 'undefined' ? flag : 0;
    var ky = typeof flag !== 'undefined' ? ky : 'Australia';
    var loc = typeof loc !== 'undefined' ? loc : 'Asia-Pacific';
    var Lat = typeof Lat !== 'undefined' ? Lat : -11.5;
    var Lng = typeof Lng !== 'undefined' ? Lng : 107.5;
    var zoom = typeof zoom !== 'undefined' ? zoom : 3;
    var map_canvas_id = typeof map_canvas_id !== 'undefined' ? map_canvas_id : 'map_canvas';
    var marker_image = typeof marker_image !== 'undefined' ? marker_image : '/images/company/contact/Map-Bubble.png';

    // Set markers for custom map based on the location
     var markers = [{
        "Tejaswini":{'address':'<div class="mapInfoContent">\
         C22, Thejaswini<br/>\
         Technopark<br/>\
         Trivandrum - 695014<br/>','lat': "8.556715", 'lng': "76.882095"}, 
        "Vazhuthacaud":{'address':'<div class="mapInfoContent"> \
         4th Floor, Artech Magnet<br/>\
         Vazhuthacaud <br/>\
         Trivandrum - 695014<br/>','lat': "8.498837", 'lng': '76.957913'}, 
       /* "MSquared":{'address':'<div class="mapInfoContent"> \
         2nd Floor, M-Squared Building<br/>\
         Technopark<br/>\
         Trivandrum - 695581<br/>','lat': "8.561039", 'lng': '76.877244'},
        "Pattom":{'address':'<div class="mapInfoContent"> \
         3rd Floor, Leela Towers <br/>\
         Pattom<br/>\
         Trivandrum - 695004<br/>','lat': "8.527984", 'lng': '76.939439'},*/
         "Ganga":{'address':'<div class="mapInfoContent"> \
         7th Floor, Ganga <br/>\
         Phase III Campus, Technopark<br/>\
         Trivandrum - 695583<br/>','lat': "8.547629", 'lng': '76.879519'},
        "Kochi":{'address':'<div class="mapInfoContent"> \
         9th Floor, Lulu Cyber Tower<br/>\
         Infopark<br/>\
         Cochin - 682030<br/>','lat': "10.010069", 'lng': '76.365838'},
        "Koratty":{'address':'<div class="mapInfoContent"> \
         Nisagandhi, Infopark<br/>\
         Koratty<br/>\
         Trissur - 680308<br/>','lat': "10.269018", 'lng': '76.354186'},
        "Calicut":{'address':'<div class="mapInfoContent"> \
         5th Floor,<br/>\
         UL Cyber Park<br/>\
         Calicut - 673016<br/>','lat': "11.276461", 'lng': '75.772169'},
        "Chennai":{'address':'<div class="mapInfoContent"> \
         Special Module B, Tower 2<br/>\
         Chennai One IT SEZ <br/>\
         Chennai - 600097<br/>','lat': "13.05939", 'lng': '80.24567'},
        "Australia":{'address':'<div class="mapInfoContent"> \
        126 Marsden Street<br/> \
        Parramatta<br/> \
        NSW 2150<br/> \
        Phone: +61-4-5251-3104','lat': "-33.815182", 'lng': '151.009295'},
        "Singapore":{'address':'<div class="mapInfoContent"> \
         8 Temasek Boulevard<br>\
         #42-01, Suntec Tower Three<br>\
         Singapore 038988<br>\
         Phone: +65-9380-1569','lat': "1.295279", 'lng': '103.859414'}
    }];
    if (loc == 'Europe'){
        var markers = [{
            // "Sheffield":{'address':'<div class="mapInfoContent"> \
            // Sheffield Technology Parks<br/> \
            // Suite 21, Cooper Buildings<br/> \
            // Arundel Street <br/>\
            // Sheffield, S1 2NS <br/>\
            // Company No. 7495924<br/>\
            // Phone:+44-114-360-3250<br/>','lat': "53.376279", 'lng': "-1.468971"}, 
            "Salisbury":{'address':'<div class="mapInfoContent"> \
             Nunns Orchard, Dean Lane <br/> \
             Whiteparish <br/> \
             Salisbury, SP5 2RJ <br/>\
             Company No. 7495924<br/>\
             Phone:+44-114-360-3250<br/>','lat': "51.012479", 'lng': "-1.650041"} 
            // "Bialystok":{'address':'<div class="mapInfoContent"> \
            // ul. Legionowa 28, 3rd Floor <br/> \
            // 15-281 Białystok <br/> \
            // Telefon: +48-85-679-22-99\
            // </div>','lat': "53.129196", 'lng': "23.154811"}
       }];
    }
    if(loc == 'Americas'){
        var markers = [{
            "Fairfax":{'address':'<div class="mapInfoContent">\
             14150 Newbrook Drive <br/>\
             Suite 115 <br/>\
             Chantilly, VA 20151 <br/>\
             Phone: +1-571-281-2720<br/>','lat': "38.8582215", 'lng': "-77.3851351"}, 
            /*"Austin":{'address':'<div class="mapInfoContent"> \
             706 B West Ben White Blvd <br/>\
             Suite 170B <br/>\
             Austin, TX 78704 <br/>\
             Phone: +1-512-730-0443','lat': "30.2283497", 'lng': "-97.7702484"},*/
            "Stafford":{'address':'<div class="mapInfoContent"> \
             920 FM 1092 <br/>\
             # 201 <br/>\
             Stafford, TX 77477<br/>\
             Phone: +1-512-730-0443','lat': "29.606744", 'lng': "-95.564448"},
             "Sunnyvale":{'address':'<div class="mapInfoContent"> \
             1250 Oakmead Parkway<br>\
             #210<br>\
             Sunnyvale, CA 94085<br/>\
             Phone: +1-408-501-8850','lat': "37.389530", 'lng': "-122.018391"}
       }];
    }
    if(loc == 'Middle-East'){
        var markers = [{
            "UAE":{'address':'<div class="mapInfoContent">\
             E308, Dubai Silicon Oasis<br/>\
             Dubai <br/>\
             Phone: +971-4371-2632<br/>','lat': "25.11695", 'lng': "55.39116"}
        }];
    }

    var marker_title='QBurst ' + location;
    var compLatLng = new google.maps.LatLng(Lat, Lng);

    initializeQBContactMaps(ky, flag, markers, Lat, Lng, compLatLng, zoom, marker_title, map_canvas_id, marker_image);
}
function initializeQBContactMaps(ky,flag, markers, Lat, Lng, compLatLng, zoom, marker_title, map_canvas_id, marker_image) {

    var mapOptions = {
        center: compLatLng,
        zoom: zoom,
        scrollwheel: false,
        draggable: true,
        keyboardShortcuts : false,
        styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    


    if(document.getElementById(map_canvas_id)){
        var map = new google.maps.Map(document.getElementById(map_canvas_id), mapOptions);
         google.maps.event.addListener(map, 'click', function(e){
            e.stopPropagation(); 
        });
    }
    var qbMarkerImage = new google.maps.MarkerImage(marker_image,
        new google.maps.Size(38,35),
        new google.maps.Point(0,0),
        new google.maps.Point(19,35)
        );
    var infowindow = new google.maps.InfoWindow(), marker, i;
    var obj = markers[0];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var val = obj[key];
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(val.lat, val.lng),
                    map: map,
                    icon: qbMarkerImage,
                    title: marker_title
            });
            google.maps.event.addListener(marker, 'click', (function(marker, key) {
                return function() {                   
                    infowindow.setContent(obj[key].address);
                    infowindow.open(map, marker);
                }
            })(marker, key));
        }
        if(flag==1) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(obj[ky].lat, obj[ky].lng),
                map: map,
                icon: qbMarkerImage,
                title: marker_title
            });
            infowindow.setContent(obj[ky].address);
            infowindow.open(map, marker);
        }
    }
}
function calcRoute() {
        var start = jQ("#start").val();
        var end = compLatLngStr;
        var request = {
            origin:start,
            destination:end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                jQ('#directionsErr').show();
            }
        });
    }

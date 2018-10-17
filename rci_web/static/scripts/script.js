var ww = document.body.clientWidth;
var currentHtml;
var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() || isMobile.Opera() ||
                isMobile.Windows());
        }
};

$(window).load(function() {
    $(".inquiryModel").css("display","block");
    $(".searchHolder").css("display","block");
    var userAgent = navigator.userAgent.toString().toLowerCase();
    if(userAgent.toLowerCase().indexOf('macintosh') !== -1){
        $('body').addClass('mac');
    }
});



$(document).ready(function(){
	if(window.location.search.indexOf('error') > -1){
	      if(window.location.search.indexOf('error=access_denied') > -1){
		testInquiry();
	    }}
	$("#switching").attr("value","false");
    /*--------testimonial - scroller-----------*/
    if(document.getElementById("scroller") != null) {
        jQuery('#scroller').flexslider({
        	animation: "fade"
    	});

    }
  $('#topSearch').submit(function() {
                    var result = checkSearch();
                    return result;
            });
            $("#protype_id" ).change(function() {
        var index = $(this)[0].selectedIndex;
        if (index == 0) {
            if (!$(this).hasClass('placeholder')) {
                $(this).addClass('placeholder');
            }
        }
        else {
            if ($(this).hasClass('placeholder')) {
                $(this).removeClass('placeholder');
            }
        }
    });
  var counter = 0;
    var windhei = $(window).height();
    var headerHei = $("#header").outerHeight();
 	$(window).scroll(function(event){
        var scroll = $(window).scrollTop();
        if (scroll > headerHei) {
            if(counter == 0) {
                $('.scrolTp').fadeIn();
            }
            $("#header").addClass("moveHead");
        } else {
            counter = 0;
            $('.scrolTp').hide();
            $("#header").removeClass("moveHead");
        }
            if(scroll + $(window).height() == $(document).height()) {
                $(".inqtext").css("display","table-cell");
                $("#menuIconInquiry").addClass("scrollBtm");
            }
            else {
                $("#menuIconInquiry").removeClass("scrollBtm");
                $(".inqtext").css("display","none");
                $("#menuIconInquiry").css({
                    "background-color": "transparent"
                });
            }

    });
    $('.scrolTp').click(function(){
        counter = 1;
        $(this).hide();
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });



 // A jQuery based placeholder polyfill
    function add() {
        if($(this).val() === ''){
          $(this).val($(this).attr('placeholder')).addClass('placeholder');
        }
      }
      function remove() {
        if($(this).val() === $(this).attr('placeholder')){
          $(this).val('').removeClass('placeholder');
        }
      }

      // Create a dummy element for feature detection
      if (!('placeholder' in $('<input>')[0])) {

        // Select the elements that have a placeholder attribute
        $('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add);

        // Remove the placeholder text before the form is submitted
        $('form').submit(function(){
          $(this).find('input[placeholder], textarea[placeholder]').each(remove);
        });
      }
	/*$(".closeInquiry").click(function () {
		$("#menuIconInquiry").removeClass("active");
		$(".mobBorder").show();
		$(".mobBorder").css("display","block");
		$("#openModal").css({
		    display: "none",
		    opacity: "0"
		}).siblings().css("opacity", "1");
    	});*/
	$(".floatLeft small").html(function(index, currentHtml) {
    	return currentHtml.replace(/;/g,'<br>');
	});
	$("#menuIconInquiry").on("click", function(){
		testInquiry();
	});
	$("#toggleMenu").on("click", function(){
		testMenu();
	});
	$(".searchWrapper").on("click",function(){
			 testSearch();
	});
	$(".close-menu").on( "click", function(){
            var wid = $(".main-menu").width();
            $(".main-menu").animate({"right":"-"+wid}, 500);
						$(this).siblings("ul").find(".childMenu").hide();
    				$(this).siblings("ul").find(".subMenu").hide();
					//$(".holder").css("background-color","#0a0a0a");
    				$(this).parent().find("div.activeParent").removeClass("activeParent");
   					$(this).siblings("ul").find(".toChild").removeClass("activeMenu");

                $("body").css({
                    "overflow-x":"hidden",
                    "overflow-y":"scroll"
                });
		$("html").css({
                    "overflow-y":"auto"
                });

                $(".mask").remove();
		$("body").removeClass("smr-open");
                activeNav = "";
                setTimeout(function() {

                    $(".main-menu").css("display","none");

            }, 500);


    });
    $(".closesrch").on( "click", function(){
        $(".searchHolder").animate({"right":"-100%"}, 500);
        $("body").removeClass("srch-open");
            activeNav = "";
            $("#q").val("");

            $(".masksrch").remove();
    });
    $(".howtocontact").find("ul li:last-child label").attr("class","active");

	$(".howtocontact").find("input").click(function(){
        $(this).parent().addClass("active").parent().siblings("li")//focus issue
        .children("label").removeClass("active");
    });
//focus issue 
	$( "#submitbtn_id" ).click(function() {
  		$( "#name_id" ).focus();
	});

	deviceMenuFunctionality();
	$("#scheduleMeeting").click(function(){
           inquiryOpenOptions();
           disableBackground();
           $("#openModalForEvents").css({ // this is just for style
                       "display":"block",
                       "opacity" : "1.5"
            });
            $("#openModalForEvents").animate({"right":"0"}, 500);
               /*$("#openModalForEvents").css({"display":"block","opacity":"1"}).siblings().css("opacity","0.4");
               if ($('#show').css('display') != 'block' ){
                       jQuery("#cform").hide();
               jQuery("#show").show();
           }*/
           $('html, body').animate({
                   scrollTop: $("#openModalForEvents").offset().top
               }, 1000);
               $("#name_idSM").focus();
               $('#submitbtnSM_id').removeAttr('disabled');
       });

       $("#closeScheduleMeeting").click(function(){
               $("#openModalForEvents").css({"display":"none","opacity":"0"}).siblings().css("opacity","1");
               /$('#openModalForEvents').fadeOut("slow");<form method="post" id="career_idsSM" name="SMform_1">/
               $("#container").css({
                       "opacity" : "1"
               });
               enableBackground();
               $('#career_idsSM').clearForm();
       });
	$(".mobExpand a").click(function(){
		 $(".expandText").slideToggle();
	});
	$('.subMenus ul li a').click(subMenuimg);
	adjustMenu();
	$(window).resize(function() {
		adjustMenu();
        deviceMenuFunctionality();
	});

	if(isMobile.any()) {
		jQuery(document).click(function (tar) {
		    if($(tar.target).is('#cform form input.submitBtn')){
		        check();
		        $("#cform").show();
		    }
		});
		if (ww < 686) {
		    $("#openModal").css("overflow-x","hidden");
		}
		$(document).mouseup(function (e) {
		    var container = $("#cform");
		    var clientContainer = $("#filters");
		    if (!container.is(e.target) && container.has(e.target).length === 0) {
		        container.hide();
		        $("#show").show();
		    }
		    if (!clientContainer.is(e.target) && clientContainer.has(e.target).length === 0) {
		        clientContainer.hide();
		    }
		});
    	} else {
        	jQuery(document).click(function (tar){
		    if (($(tar.target).is('#cform form input.feedbackTxt'))
		        || ($(tar.target).is('#cform img')) || ($(tar.target).is('#cform form'))
		        || ($(tar.target).is('#cform'))
		        || ($(tar.target).is('#cform div')) || ($(tar.target).is('#cform form textarea'))
		        || ($(tar.target).is('#cform form span')) || ($(tar.target).is('#filters'))
		        || ($(tar.target).is('.filterSelected li')) ) {

		        return false;

		    }else if($(tar.target).is('#cform form input.submitBtn')){
		        check();
		        $("#cform").show();
		    }else{
		        $("#filters").hide();
		        $("#cform").hide();
		        $("#show").show();
		    }

        	   if (ww > 1224) {
			    if ( $(tar.target).is('.search') || $(tar.target).is('.searchBox') ) {
				return false;
			     }
			    else if($(tar.target).is('.searchBtn')) {
				return true;
			     }
			    else {
				 $("#containerSubmenu").animate({
                    "right":"3%"
                 },500);
                $(".searchBox").animate({
                    "right":"-100%"
                },500);
                $(".searchBtn").css({
                   "border-left" : "1px solid #d1d1d1"
                });
                $(".searchBtn").animate({
                    borderLeftWidth: "1px",
                    borderLeftColor:"#d1d1d1"
                },1000);

			     }
        	   }
        	   else if(ww > 1024 && ww < 1224) {

			    if ( $(tar.target).is('.search') || $(tar.target).is('.searchBox') ) {
				return false;
			     }
			    else if($(tar.target).is('.searchBtn')) {
				return true;
			     }
			    else {

				$("#containerSubmenu").animate({
				    "right":"5%"
				 },500);
				$(".searchBox").animate({
				    "right":"-100%"
				},500);
				$(".searchBtn").css({
				   "border-left" : "1px solid #fff"
				});
				$(".searchBtn").animate({
				    borderLeftWidth: "1px",
				    borderLeftColor:"#d1d1d1"
				},1000);
			     }
       		 }

             });
      }


});

function inquiryOpenOptions() {
    if ($("#openModal").is(":hidden")) {
    	InquiryClearOptions();
        $("#descrtextarea").val("");
        $("#descrtextarea").attr('placeholder', 'Brief Description of Your Project');
        $("#captcha_id").val("");
    } else {
    }
}
var subMenuimg = function () {
	$(this).parent().addClass("active").siblings("li").removeClass("active");
		var active =$(this).find('img').attr("src");
		active= active.replace(/Normal/g,"Active");
		$(this).find('img').attr("src",active);

	$(this).parent().siblings("li").each(function(){
		var normal =$(this).find('img').attr("src");
		normal = normal.replace(/Active/g,"Normal");
		$(this).find('img').attr("src",normal);
	});
};



var adjustMenu = function () {
    var clientwidth = document.body.clientWidth;
    var contentHeight = $(".newsContent p:last-child").height();
    $(".newsContent p:first-child img").css("height", contentHeight);
    if (clientwidth < 686) {
       	$(".search").addClass("searchNav");
        $(".search").css("display", "none");
        $(".searchNav").removeClass("search");
        $("#switching").attr("value", "true");
	 $(".howtocontact").insertBefore("#contactInquiryRight");;
	$("#inquiryHead").click(function () {
                $("#openModal").siblings().css("opacity", "1");
        });
        $("#benefit_container .data p:last-child").css("display", "none");
        $(".subMenus ul").css("display", "none");
        $(".subMenus ul li").css("display", "none");
        $(".selectBox").css("display", "block");
        $("#openModal").siblings().css("opacity", "1");
        enableSelectBoxes();
        if ($(".leftContainer div").first().hasClass("lftConleft")) {
            $(".leftContainer .lftConleft").insertAfter(".leftContainer .lftConright")
        }
        if ($(".methodology div").first().hasClass("secondBlock")) {
            $(".methodology div.secondBlock").insertAfter(".methodology .firstBlock")
        }
        if ($(".tools div").first().hasClass("secondBlock")) {
            $(".tools div.secondBlock").insertAfter(".tools .firstBlock")
        }
        $("#toggleMenu").css("display", "inline-block");
        if (!$("#toggleMenu").hasClass("active")) {
            $("#navMenu").hide()
        } else {
            $("#navMenu").show()
        }
        //$("#navMenu").unbind("mouseenter mouseleave");
        //devicemenufunctionality();
    } else {
        if(clientwidth==1280){
            $(".search").addClass("searchNav");
            $(".search").css("display", "none");
            $(".searchNav").removeClass("search");
            $(".searchNav").css("display", "none");
	    $(".howtocontact").insertAfter(".styled-select");
        }else if (clientwidth > 688 && clientwidth < 1025) {
            $(".search").addClass("searchNav");
            $(".search").css("display", "none");
            $(".searchNav").removeClass("search");
	    if($(".searchNav").css("display") == "none") {
                $(".searchWrapper").removeClass("active");
                $(".mobBorderSearch").css("display","block");
            }
            $("#inquiryHead").click(function () {
                $("#openModal").siblings().css("opacity", "1");
            });
            $("#switching").attr("value", "true");
            $(".searchBtn").attr("value", "");
            $("#benefit_container .data p:last-child").css("display", "none");
            $(".subMenus ul").css("display", "none");
            $(".subMenus ul li").css("display", "none");
            $(".selectBox").css("display", "block");
            $(".howtocontact").insertBefore("#contactInquiryRight");
            $("#openModal").siblings().css("opacity", "1");
            enableSelectBoxes();
            $(".lastBlock ul li b:last-child").insertAfter(".lastBlock ul li.separator .mobBorder");
            $(".subMenus ul li a").click(function () {
                var submenuclick = $(this).find("span").attr("value");
                $(this).parent().addClass("active").siblings("li").removeClass("active");
                $("div.selectBox").attr("value", submenuclick)
            });
            if ($(".leftContainer div").first().hasClass("lftConleft")) {
                $(".leftContainer .lftConleft").insertAfter(".leftContainer .lftConright")
            }
            $("#navMenu").unbind("mouseenter mouseleave");
            deviceMenuFunctionality();
        }
        else if(clientwidth > 1600) {
		if($(".searchBox").css("right") == "0px") {
		        $("#containerSubmenu").css({
		            "right":"23%"
		        });

		    }
		    else {
		       $("#containerSubmenu").css({
		            "right":"3%"
		        });
		    }

            	$('#tezzleImg').attr('src', '/images/responsive/common/tezzleAdvtReplace.png');
		$("#topMenu .drop .toChild").css("display","none");
                    var timer;
                    $("#topMenu ul li.drop").hover(function () {
                        var link = $(this).children(".dropdownDiv");
                        var $top = $(this);
                         $top.children("a").css("color","#393939");
                        timer = setTimeout(function(){
                            link.css({"visibility":"visible"});
                            $top.children("a").css("color","#fff");
                            $top.addClass("check");
                            $top.children("a").find(".arrow-down").css("visibility","visible");
                        },300);
                    },
                    function(){
                        clearTimeout(timer);
                        $(this).children("a").css("color","#393939");
                        $(this).removeClass("check");
                        $(this).children("a").find(".arrow-down").css("visibility","hidden");
                        $(".dropdownDiv").css({"visibility":"hidden"});

                    });
        }
	 else if (clientwidth > 1024 && clientwidth < 1224) {
            if($(".searchBox").css("right") == "0px") {
                $("#containerSubmenu").css({
                    "right":"29%"
                });
            }
            else {
               $("#containerSubmenu").css({
                    "right":"5%"
                });
            }
            if ($.browser.msie && $.browser.version == '8.0') {
                    $("#topSearch input[type='submit']").click(function(e) {
                        e.preventDefault();
                    if($(".searchBox").css("right") == "0px" || $(".searchBox").css("right") == "auto") {
                        var result = checkSearch();
                        if(result == true) {
                            $(this).closest("form").submit();
                        }
                        return result;

                    }
                    else {
                        $("#containerSubmenu").animate({
                            "right":"23%"
                        },1000);
                        $(".searchBtn").animate({
                            "border-left":"0px"
                        },1000);
                        $(".searchBox").animate({
                            "right":"0px"
                        },1000);
                        jQuery("#q").css("color", "#666");
                        jQuery("#q").val("Search");
                        return false;
                    }
                });
            }


            /*MENU*/

                  $("#topMenu .drop .toChild").css("display","none");
                    var timer;
                    $("#topMenu ul li.drop").hover(function () {
                        var link = $(this).children(".dropdownDiv");
                        var $top = $(this);
                         $top.children("a").css("color","#393939");
                        timer = setTimeout(function(){
                            link.css({"visibility":"visible"});
                            $top.children("a").css("color","#fff");
                            $top.addClass("check");
                            $top.children("a").find(".arrow-down").css("visibility","visible");
                        },300);
                    },
                    function(){
                        clearTimeout(timer);
                        $(this).children("a").css("color","#393939");
                        $(this).removeClass("check");
                        $(this).children("a").find(".arrow-down").css("visibility","hidden");
                        $(".dropdownDiv").css({"visibility":"hidden"});

                    });
                $('#tezzleImg').attr('src', '/images/responsive/common/tezzleAdvt.png');
                $(".howtocontact").insertAfter("#contactInquiryLeft .styled-select");
                $(".searchNav").addClass("search");
                $(".search").css("display", "block");
                $(".searchNav").css("display", "none");
                $(".search").removeClass("searchNav");
                $("#mobMenuHolder").css("display","block");
                $("#switching").attr("value", "false");
                $(".search").css("display", "block");


                $("#navMenu").css("display", "none");
               /* if ($("#openModal").css("display") == "block") {
                    $("#openModal").siblings().css("opacity", "0.4");
                }
                else{
                    $("#openModal").siblings().css("opacity", "1");
                }*/
                $(".subMenus ul li a").click(function () {
                    var submenuclick = $(this).find("span").attr("value");
                    $(this).parent().addClass("active").siblings("li").removeClass("active");
                });
        }
        else {
            if (clientwidth > 1024) {
                if($(".searchBox").css("right") == "0px") {
                    $("#containerSubmenu").css({
                        "right":"23%"
                    });
                }
                else {
                   $("#containerSubmenu").css({
                        "right":"3%"
                    });
                }
                if ($.browser.msie && $.browser.version == '8.0') {
                    $("#topSearch input[type='submit']").click(function(e) {
                        e.preventDefault();
                    if($(".searchBox").css("right") == "0px" || $(".searchBox").css("right") == "auto") {
                        var result = checkSearch();
                        if(result == true) {
                            $(this).closest("form").submit();
                        }
                        return result;

                    }
                    else {
                        $("#containerSubmenu").animate({
                            "right":"23%"
                        },1000);
                        $(".searchBtn").animate({
                            "border-left":"0px"
                        },1000);
                        $(".searchBox").animate({
                            "right":"0px"
                        },1000);
                        jQuery("#q").css("color", "#666");
                        jQuery("#q").val("Search");
                        return false;
                    }
                });
                }


            /*MENU*/

                  $("#topMenu .drop .toChild").css("display","none");
                    var timer;
                    $("#topMenu ul li.drop").hover(function () {
                        var link = $(this).children(".dropdownDiv");
                        var $top = $(this);
                         $top.children("a").css("color","#393939");
                        timer = setTimeout(function(){
                            link.css({"visibility":"visible"});
                            $top.children("a").css("color","#fff");
                            $top.addClass("check");
                            $top.children("a").find(".arrow-down").css("visibility","visible");
                        },300);
                    },
                    function(){
                        clearTimeout(timer);
                        $(this).children("a").css("color","#393939");
                        $(this).removeClass("check");
                        $(this).children("a").find(".arrow-down").css("visibility","hidden");
                        $(".dropdownDiv").css({"visibility":"hidden"});

                    });
                $('#tezzleImg').attr('src', '/images/responsive/common/tezzleAdvt.png');
                $(".howtocontact").insertAfter("#contactInquiryLeft .styled-select");
                $(".searchNav").addClass("search");
                $(".search").css("display", "block");
                $(".searchNav").css("display", "none");
                $(".search").removeClass("searchNav");
                $("#mobMenuHolder").css("display","block");
                $("#switching").attr("value", "false");
                $(".search").css("display", "block");


                $("#navMenu").css("display", "none");
                /*if ($("#openModal").css("display") == "block") {
                    $("#openModal").siblings().css("opacity", "0.4");
                }
                else{
                    $("#openModal").siblings().css("opacity", "1");
                }*/
                $(".subMenus ul li a").click(function () {
                    var submenuclick = $(this).find("span").attr("value");
                    $(this).parent().addClass("active").siblings("li").removeClass("active");
                });
            }
        }
    }
};
function deviceMenuFunctionality(){
    $(".expanded-list li, .expand-inner").unbind("click").bind("click", function(e) {
        var thisElement = $(this),
            currentElement = thisElement.children('ul'),
            currentArow = thisElement.find(".toChild").first();
        if ($(this).parent().hasClass('subMenu')) {
            var thisChild = thisElement.find(".childMenu")
            $('.subMenu .childMenu').not(thisChild).hide();
            $('.subMenu .toChild').not(currentArow).removeClass('activeMenu');
            currentArow.toggleClass('activeMenu');
            thisChild.slideToggle();
            e.stopPropagation();
            return;
        }
        $(".toChild").not(currentArow).removeClass('activeMenu');
        $(".subMenu").not(currentElement).hide();
        $(".childMenu").not(currentElement).hide();
        currentArow.toggleClass('activeMenu')
        thisElement.children('ul').slideToggle();

    })
    $(".childMenu li a").click(function(e){  
         e.stopPropagation();  
    });
}
function enableSelectBoxes(){
	var child = $(".subMenus ul li.active").find('span').attr("value");
	$("div.selectBox").attr('value',child);
    $('div.selectBox').each(function(){
	   	if(child != undefined){
	    $(this).children('span.selected').html($(this).children('div.selectOptions').children("span[value='" +child+ "']").html());
	    	$(this).attr('value',$(this).children('div.selectOptions').children("span[value='" +child+ "']").attr('value'));
	    }
	    else{
	    	$(this).children("span.selected").html($(this).children('div.selectOptions').children("span").html());
	    	$(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
	    }
		jQuery(this).find('span.selected').click(function() {
	    	if(($(this).parent().children('div.selectOptions').css('display')) == 'none'){

	        	$(this).parent().children('div.selectOptions').css('display','block');
	    	}else if(($(this).parent().children('div.selectOptions').css('display')) == 'block'){

	        	$(this).parent().children('div.selectOptions').css('display','none');
	   		}
		});
		$(this).children('span.selectArrow').click(function(){
		    if($(this).parent().children('div.selectOptions').css('display') == 'none'){
		        $(this).parent().children('div.selectOptions').css('display','block');
		    }else if(($(this).parent().children('div.selectOptions').css('display')) == 'block'){
	        	console.log();
	        	$(this).parent().children('div.selectOptions').css('display','none');
	   		}
		});
		$(this).find('span.selectOption').click(function(){
	    	$(this).parent().css('display','none');
	   		$(".subMenus ul").find("span[value='" + $(this).attr('value') + "']").closest("li").addClass("active").siblings("li").removeClass("active");
		    if($(".subMenus ul li.active")){
				var y =$(".subMenus ul li.active").find('img').attr("src");
				y = y.replace(/Normal/g,"Active");
				$(".subMenus ul li.active").find('img').attr("src",y);
			}
			else{return;}
		    $(this).closest('div.selectBox').attr('value',$(this).attr('value'));
		    $(this).parent().siblings('span.selected').html($(this).html());
		});
    });
}



/*Footer More*/
$('#moreButton').click(function () {
    $("#contactSubList").slideDown(1000);
    $('#moreButton').find("button").css("text-indent", "-999px");
    $("#lessButton").css("display" , "block");
    $('#moreButton').css("display", "none");
});
$("#lessButton").click(function () {
    $("#contactSubList").slideUp(1000);
    $('#moreButton').find("button").css("text-indent", "1px");
    $('#moreButton').css({
        "display": "block",
        "height":"auto"
    });
    $("#lessButton").css("display" , "none");
});
function InquiryClearOptions(){
	$(".applyForm_enquiry").css("display", "block");
	$('.contactInquiry #content').css("display", "none");
	$("#name_id").val("");
    $("#email_id").val("");
    $("#protype_id").val("");
    $("#descrtextarea").val("");
    $("#captcha_id").val("");
    $("#phone_id").val("");
    $("#company_id").val("");
    $(".error_msgInquiry label").text("");
    if(window.location.pathname == '/services/web-development/rich-internet-applications/html5/flash-to-html5'){
        _gaq.push(['_trackEvent', 'Flash_to_HTML5_Offer', 'Flash_to_HTML5_Offer_Viewed', 'Flash to HTML5 Offer Viewed']);
    }
    if(window.location.pathname == '/services/cloud-solutions/salesforce'){
        _gaq.push(['_trackEvent', 'Salesforce_Free_Quote_Offer', 'Salesforce_Free_Quote_Offer_Viewed', 'Salesforce Free Quote Offer Viewed']);
    }
    if(window.location.pathname == '/services/testing/portfolio/security'){
        _gaq.push(['_trackEvent', 'Security_Testing_Free_Offer', 'Security_Testing_Free_Offer_Viewed', 'Security Testing Free Offer Viewed']);
    }
}

function testSearch() {
    $(".searchHolder").animate({"right":"0"}, 500);
    $("body").addClass("srch-open");
        $("body").append("<div class='masksrch'></div>");
        activeNav = "srch-open";
        $(".masksrch").click(function() {
           $("body").removeClass(activeNav);
            activeNav = "";
            $(".masksrch").remove();
            $(".searchHolder").animate({"right":"-100%"}, 500);
	    $("#q").val("");

        });
    $(".searchBox").focus();
}
$(".main-menu").css("display","block");
    var holderWidth;
            $('ul li.expand-inner .holder').each(function() {
              holderWidth = $(this).css('width');
              $(this).parent('.expand-inner').css('width', holderWidth);
            });

   $(".main-menu").css("display","none");
function testMenu() {

    var wid = $(".main-menu").width();
    $(".main-menu").css("display","block");
    
    $(".main-menu").animate({"right":"0"}, 500);

                $("body").addClass("smr-open");
		$("html").css("overflow-y","hidden");
                $("body").css({
                    "overflow":"hidden"
                });
                $("body").append("<div class='mask'></div>");

            activeNav = "smr-open";
        $(".mask").click(function() {

                $(".main-menu").animate({"right":"-"+wid}, 500);
		$("body").removeClass("smr-open");
                activeNav = "";
                $(".mask").remove();
		$("html").css("overflow-y","scroll");
                setTimeout(function() {

                        $(".main-menu").css("display","none");


                }, 500);

        });
}

function testInquiry() {
    inquiryOpenOptions();
    $(".inquiryModel").animate({"right":"0"}, 500);
		$("#name_id").focus();
    $("body").addClass("inqy-open");
    $("body").append("<div class='mask'></div>");
        activeNav = "inqy-open";
	$("body").css("overflow-y","hidden");
        $(".mask").click(function() {
           $("body").removeClass(activeNav);
            activeNav = "";
            $(".mask").remove();
	    $("body").css("overflow-y","scroll");
             $(".inquiryModel").animate({"right":"-100%"}, 500);
        });
	if ($(window).width() > 767) {
            $("#name_id").focus();
        } else {
            $("#career_ids input[type='radio']").focus();
        }

    InquiryClearOptions();
}
$('.closeInquiry').click(function(){
        $('#captchaImageSendInquiry').attr('src','/Captcha/captchasecurityfeedback.php?');
	$(".howtocontact").find("ul li:last-child label").addClass("active");
    	$(".howtocontact").find("ul li:first-child label").removeClass("active");
        $("#descrtextarea").css("height","38px");
        $("#menuIconInquiry").removeClass('scrollBtm');
});

jQuery(document).ready(function($){

	if ( $.browser.msie ) {
        if($.browser.version == '7.0'){
        	$('#containerWidth').css("display","none");
        }
	}
    /*-----------------search------------------*/
   // $("#q").click(function() {
        // if ($("#q").val() == "Type and press enter to search" || $("#q").val() == "Enter search text")
           // $("#q").val("");
   // });
   // $("#q").blur(function() {
       // if ($("#q").val() == "")
           // $("#q").val("Type and press enter to search");
   // });

    // run the currently selected effect
    function runEffect(effects) {
        // get effect type from
        var selectedEffect = effects;

        // most effect types need no options passed by default
        var options = {};

        // run the effect
        jQuery("#cform").effect(selectedEffect, options, 750, callback);
    };

    // callback function to bring a hidden box back
    function callback() {

        setTimeout(function() {
            jQuery("#cform:hidden").removeAttr('style').hide().fadeOut();
        }, 100);
        jQuery("#id_email").focus();
    };

    // set effect from select menu value
    jQuery("#show").click(function() {
        jQuery("#show").hide();
        runEffect('slide');
        if (document.getElementById("myHeader") != null) {

            if ($('#myHeader').css('display') == 'none') {

                jQuery("#myContent").hide();

                if ($(".confmtnMsg").length > 0) {
                } else {
                    jQuery("#myHeader").css('display', 'block');
                }
            }
        }
        if ($("#openModal").is(":visible")) {
        	$("#openModal").css({"display":"none","opacity":"0"}).siblings().css("opacity","1");
        	$("#cform").css("opacity","1");
        }
    });
    jQuery(".close").click(function() {
        runEffect('drop');
        jQuery("#show").show();
    });
});

function checkSearch() {

    if ($("#q").val() == "" || $("#q").val() == "Type and press enter to search" || $("#q").val() == "Enter search text") {

        // $("#q").val(enterSrchTxt);
        return false;
    }

    else {

            return true;
        }
}
$("#id_email").bind({
    keyup : function() {
        limitText(this, 100);
    }
});

$("#id_comments").bind({
    keyup : function() {
        limitText(this, 1000);
    },
    keypress : function(e) {
        validate_character(e);
    }
});
$("#id_submitResumeName").bind({
    keyup : function() {
        limitText(this, 75);
    },
    keypress : function(e) {
        validate_alphabet(e);
    }
});
function validateFeedbackForm(params, url, callback) {

    var mail = document.getElementById('id_email').value;
    var coment = document.getElementById('id_comments').value;
    var captcha_code_feed = document.getElementById('id_captcha').value;
    var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag1 = 0;
    var flag2 = 0;
    var flag3 = 0;
    mail = mail.trim();
    coment = coment.trim();

    if (mail == '') {
        document.getElementById('mailValmsg').innerHTML = 'Enter a valid email';
        document.getElementById('mailValmsg').style.color = '#FF0000';
        flag1 = 0;
    } else if (emailRegExp.test(mail) == false) {
        document.getElementById('mailValmsg').innerHTML = 'Invalid email id';
        document.getElementById('mailValmsg').style.color = '#FF0000';
        flag1 = 0;
    } else {
        document.getElementById('mailValmsg').innerHTML = '';
        document.getElementById('mailValmsg').style.color = '';
        flag1 = 1;
    }
    if (coment == '') {
        document.getElementById('comntValmsg').innerHTML = 'Feedback is required';
        document.getElementById('comntValmsg').style.color = '#FF0000';
        flag2 = 0;
    } else {
        document.getElementById('comntValmsg').innerHTML = '';
        document.getElementById('comntValmsg').style.color = '';
        flag2 = 1;
    }
    if (captcha_code_feed == '') {
        document.getElementById('captchafeedValMsg').innerHTML = 'Security code is required';
        document.getElementById('captchafeedValMsg').style.color = '#FF0000';
        flag3 = 0;
    }
    if (captcha_code_feed != '') {

        var result = JSONRemoteCall([ params ], url, callback);

        if (result != true) {
            flag3 = 0;
        } else {
            flag3 = 1;
        }
    }

    if (flag1 == 1 && flag2 == 1 && flag3 == 1) {
        return true;
    } else {
        return false;
    }
}

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [ o[this.name] ];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$("#feedbackForm").submit(function() {
    var contact = true;
    var email = document.getElementById('id_email').value;
    var coment = document.getElementById('id_comments').value;
    var captcha = document.getElementById('id_captcha').value;

    var validateUrl = "/rpc/feedback";
    var callback = feedback;

    var params = $(this).serializeObject();
    contact = validateFeedbackForm(params, validateUrl, callback);

    return false;
});

function clear() {
    $('#id_email').val('');
    $('#id_comments').val('');
    $('#id_captcha').val('');
}
function validate_alphabet(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode == 46)
        return true;
    if (charCode == 37)
        return true
    if (charCode == 39)
        return true;
    if (charCode > 32 && charCode < 47)
        return false;
    if (charCode > 32 && charCode > 39 && (charCode < 65 || charCode > 90)
        && (charCode < 97 || charCode > 122)) {
        return false;
    }
    return true;
}
function validate_digit(evt) {

  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode == 40) {
      return true
  }
  if (charCode == 41) {
      return true
  }
  if (charCode == 43) {
      return true
  }
  if (evt.key == "%") {
        return false;
    }
  if (charCode == 37 || charCode == 32 || charCode == 45 || charCode == 44 || charCode == 46 || charCode == 47) {
      return true
  }
  if (charCode == 39) {
      return true
  }
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
  }
  return true

}
function validate_character(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 32 && charCode > 34 && charCode > 39 && charCode > 59
        && (charCode < 65 || charCode > 90)
        && (charCode < 97 || charCode > 122)
        && (charCode < 48 || charCode > 57)) {

        return false;
    }
    return true;
}
function limitText(field, maxChar){
    $(field).attr('maxlength',maxChar);
}
function limitTextChara(limitField, limitCount, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}
function h(e) {
    $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight);
}
$('textarea').each(function () {
  h(this);
}).on('input', function () {
  h(this);
});

/* phone number validation */
if( !isMobile.Android() ) {

$("#phone_id").keydown(function(e) {
    if(e.shiftKey && (e.keyCode == 191 || e.keyCode == 190 || e.keyCode == 188)) {
        e.preventDefault();
    }
    // Allow: backspace, delete, tab, escape, enter and .
    var FF = navigator.userAgent.toLowerCase().indexOf('firefox');

    if ((FF > -1 && e.keyCode == 61) || (FF > -1 && e.keyCode == 173)) {
        return;
    }
    if(isMobile.iOS() && e.keyCode == 187) {
	return;
    }
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      // Allow: Ctrl+A,Ctrl+C,Ctrl+V, Command+A
      ((e.keyCode == 65 || e.keyCode == 86 || e.keyCode == 88 || e.keyCode == 67) && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.keyCode >= 35 && e.keyCode <= 40) ||
      (e.keyCode == 32 || e.keyCode == 189 || e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 111 || e.keyCode == 188 || e.keyCode == 191 || (e.shiftKey === true && e.keyCode == 187 || e.keyCode == 57 || e.keyCode == 48))) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }


  });
}
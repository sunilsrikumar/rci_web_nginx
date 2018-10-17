!function(e){e.flexslider=function(t,n){var a=e(t),i=e.extend({},e.flexslider.defaults,n),o=i.namespace,s="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,r=s?"touchend":"click",l="vertical"===i.direction,c=i.reverse,d=i.itemWidth>0,u="fade"===i.animation,p=""!==i.asNavFor,m={};e.data(t,"flexslider",a),m={init:function(){a.animating=!1,a.currentSlide=i.startAt,a.animatingTo=a.currentSlide,a.atEnd=0===a.currentSlide||a.currentSlide===a.last,a.containerSelector=i.selector.substr(0,i.selector.search(" ")),a.slides=e(i.selector,a),a.container=e(a.containerSelector,a),a.count=a.slides.length,a.syncExists=e(i.sync).length>0,"slide"===i.animation&&(i.animation="swing"),a.prop=l?"top":"marginLeft",a.args={},a.manualPause=!1,a.transitions=!i.video&&!u&&i.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return a.pfx=t[n].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}(),""!==i.controlsContainer&&(a.controlsContainer=e(i.controlsContainer).length>0&&e(i.controlsContainer)),""!==i.manualControls&&(a.manualControls=e(i.manualControls).length>0&&e(i.manualControls)),i.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides)),a.doMath(),p&&m.asNav.setup(),a.setup("init"),i.controlNav&&m.controlNav.setup(),i.directionNav&&m.directionNav.setup(),i.keyboard&&(1===e(a.containerSelector).length||i.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!a.animating&&(39===t||37===t)){var n=39===t?a.getTarget("next"):37===t?a.getTarget("prev"):!1;a.flexAnimate(n,i.pauseOnAction)}}),i.mousewheel&&a.bind("mousewheel",function(e,t,n,o){e.preventDefault();var s=0>t?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(s,i.pauseOnAction)}),i.pausePlay&&m.pausePlay.setup(),i.slideshow&&(i.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.play()}),i.initDelay>0?setTimeout(a.play,i.initDelay):a.play()),s&&i.touch&&m.touch(),(!u||u&&i.smoothHeight)&&e(window).bind("resize focus",m.resize),setTimeout(function(){i.start(a),e(".flex-direction-nav a").addClass("icon_HomeLeft")},200)},asNav:{setup:function(){a.asNav=!0,a.animatingTo=Math.floor(a.currentSlide/a.move),a.currentItem=a.currentSlide,a.slides.removeClass(o+"active-slide").eq(a.currentItem).addClass(o+"active-slide"),a.slides.click(function(t){t.preventDefault();var n=e(this),o=n.index();e(i.asNavFor).data("flexslider").animating||n.hasClass("active")||(a.direction=a.currentItem<o?"next":"prev",a.flexAnimate(o,i.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var t,n="thumbnails"===i.controlNav?"control-thumbs":"control-paging",l=1;if(a.controlNavScaffold=e('<ol class="'+o+"control-nav "+o+n+'"></ol>'),a.pagingCount>1)for(var c=0;c<a.pagingCount;c++)t="thumbnails"===i.controlNav?'<img src="'+a.slides.eq(c).attr("data-thumb")+'"/>':"<a>"+l+"</a>",a.controlNavScaffold.append("<li>"+t+"</li>"),l++;a.controlsContainer?e(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),a.controlNavScaffold.delegate("a, img",r,function(t){t.preventDefault();var n=e(this),s=a.controlNav.index(n);n.hasClass(o+"active")||(a.direction=s>a.currentSlide?"next":"prev",a.flexAnimate(s,i.pauseOnAction))}),s&&a.controlNavScaffold.delegate("a","click touchstart",function(e){e.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls,m.controlNav.active(),a.controlNav.live(r,function(t){t.preventDefault();var n=e(this),s=a.controlNav.index(n);n.hasClass(o+"active")||(s>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(s,i.pauseOnAction))}),s&&a.controlNav.live("click touchstart",function(e){e.preventDefault()})},set:function(){var t="thumbnails"===i.controlNav?"img":"a";a.controlNav=e("."+o+"control-nav li "+t,a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(o+"active").eq(a.animatingTo).addClass(o+"active")},update:function(t,n){a.pagingCount>1&&"add"===t?a.controlNavScaffold.append(e("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(n).closest("li").remove(),m.controlNav.set(),a.pagingCount>1&&a.pagingCount!==a.controlNav.length?a.update(n,t):m.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+o+'direction-nav"><li><a class="'+o+'prev" href="#">'+i.prevText+'</a></li><li><a class="'+o+'next" href="#">'+i.nextText+"</a></li></ul>");a.controlsContainer?(e(".navigationArrow").append(t),a.directionNav=e("."+o+"direction-nav li a",a.controlsContainer)):(e(".navigationArrow").append(t),a.directionNav=e("."+o+"direction-nav li a",a)),m.directionNav.update(),a.directionNav.bind(r,function(t){t.preventDefault();var n=e(this).hasClass(o+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(n,i.pauseOnAction)}),s&&a.directionNav.bind("click touchstart",function(e){e.preventDefault()})},update:function(){var e=o+"disabled";1===a.pagingCount?a.directionNav.addClass(e):i.animationLoop?a.directionNav.removeClass(e):0===a.animatingTo?a.directionNav.removeClass(e).filter("."+o+"prev").addClass(e):a.animatingTo===a.last?a.directionNav.removeClass(e).filter("."+o+"next").addClass(e):a.directionNav.removeClass(e)}},pausePlay:{setup:function(){var t=e('<div class="'+o+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(t),a.pausePlay=e("."+o+"pauseplay a",a.controlsContainer)):(a.append(t),a.pausePlay=e("."+o+"pauseplay a",a)),m.pausePlay.update(i.slideshow?o+"pause":o+"play"),a.pausePlay.bind(r,function(t){t.preventDefault(),e(this).hasClass(o+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())}),s&&a.pausePlay.bind("click touchstart",function(e){e.preventDefault()})},update:function(e){"play"===e?a.pausePlay.removeClass(o+"pause").addClass(o+"play").text(i.playText):a.pausePlay.removeClass(o+"play").addClass(o+"pause").text(i.pauseText)}},touch:function(){function e(e){a.animating?e.preventDefault():1===e.touches.length&&(a.pause(),m=l?a.h:a.w,f=Number(new Date),p=d&&c&&a.animatingTo===a.last?0:d&&c?a.limit-(a.itemW+i.itemMargin)*a.move*a.animatingTo:d&&a.currentSlide===a.last?a.limit:d?(a.itemW+i.itemMargin)*a.move*a.currentSlide:c?(a.last-a.currentSlide+a.cloneOffset)*m:(a.currentSlide+a.cloneOffset)*m,s=l?e.touches[0].pageY:e.touches[0].pageX,r=l?e.touches[0].pageX:e.touches[0].pageY,t.addEventListener("touchmove",n,!1),t.addEventListener("touchend",o,!1))}function n(e){v=l?s-e.touches[0].pageY:s-e.touches[0].pageX,g=l?Math.abs(v)<Math.abs(e.touches[0].pageX-r):Math.abs(v)<Math.abs(e.touches[0].pageY-r),(!g||Number(new Date)-f>500)&&(e.preventDefault(),!u&&a.transitions&&(i.animationLoop||(v/=0===a.currentSlide&&0>v||a.currentSlide===a.last&&v>0?Math.abs(v)/m+2:1),a.setProps(p+v,"setTouch")))}function o(e){if(a.animatingTo===a.currentSlide&&!g&&null!==v){var l=c?-v:v,d=l>0?a.getTarget("next"):a.getTarget("prev");a.canAdvance(d)&&(Number(new Date)-f<550&&Math.abs(l)>50||Math.abs(l)>m/2)?a.flexAnimate(d,i.pauseOnAction):a.flexAnimate(a.currentSlide,i.pauseOnAction,!0)}t.removeEventListener("touchmove",n,!1),t.removeEventListener("touchend",o,!1),s=null,r=null,v=null,p=null}var s,r,p,m,v,f,g=!1;t.addEventListener("touchstart",e,!1)},resize:function(){!a.animating&&a.is(":visible")&&(d||a.doMath(),u?m.smoothHeight():d?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(i.smoothHeight&&m.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(e){if(!l||u){var t=u?a:a.viewport;e?t.animate({height:a.slides.eq(a.animatingTo).height()},e):t.height(a.slides.eq(a.animatingTo).height())}},sync:function(t){var n=e(i.sync).data("flexslider"),o=a.animatingTo;switch(t){case"animate":n.flexAnimate(o,i.pauseOnAction,!1,!0);break;case"play":n.playing||n.asNav||n.play();break;case"pause":n.pause()}}},a.flexAnimate=function(t,n,s,r,v){if(p&&1===a.pagingCount&&(a.direction=a.currentItem<t?"next":"prev"),!a.animating&&(a.canAdvance(t,v)||s)&&a.is(":visible")){if(p&&r){var f=e(i.asNavFor).data("flexslider");if(a.atEnd=0===t||t===a.count-1,f.flexAnimate(t,!0,!1,!0,v),a.direction=a.currentItem<t?"next":"prev",f.direction=a.direction,Math.ceil((t+1)/a.visible)-1===a.currentSlide||0===t)return a.currentItem=t,a.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),!1;a.currentItem=t,a.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),t=Math.floor(t/a.visible)}if(a.animating=!0,a.animatingTo=t,i.before(a),n&&a.pause(),a.syncExists&&!v&&m.sync("animate"),i.controlNav&&m.controlNav.active(),d||a.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),a.atEnd=0===t||t===a.last,i.directionNav&&m.directionNav.update(),t===a.last&&(i.end(a),i.animationLoop||a.pause()),u)a.slides.eq(a.currentSlide).fadeOut(i.animationSpeed,i.easing),a.slides.eq(t).fadeIn(i.animationSpeed,i.easing,a.wrapup);else{var g,h,x,S=l?a.slides.filter(":first").height():a.computedW;d?(g=i.itemWidth>a.w?2*i.itemMargin:i.itemMargin,x=(a.itemW+g)*a.move*a.animatingTo,h=x>a.limit&&1!==a.visible?a.limit:x):h=0===a.currentSlide&&t===a.count-1&&i.animationLoop&&"next"!==a.direction?c?(a.count+a.cloneOffset)*S:0:a.currentSlide===a.last&&0===t&&i.animationLoop&&"prev"!==a.direction?c?0:(a.count+1)*S:c?(a.count-1-t+a.cloneOffset)*S:(t+a.cloneOffset)*S,a.setProps(h,"",i.animationSpeed),a.transitions?(i.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(S)})):a.container.animate(a.args,i.animationSpeed,i.easing,function(){a.wrapup(S)})}i.smoothHeight&&m.smoothHeight(i.animationSpeed)}},a.wrapup=function(e){u||d||(0===a.currentSlide&&a.animatingTo===a.last&&i.animationLoop?a.setProps(e,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&i.animationLoop&&a.setProps(e,"jumpStart")),a.animating=!1,a.currentSlide=a.animatingTo,i.after(a)},a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))},a.pause=function(){clearInterval(a.animatedSlides),a.playing=!1,i.pausePlay&&m.pausePlay.update("play"),a.syncExists&&m.sync("pause")},a.play=function(){a.animatedSlides=setInterval(a.animateSlides,i.slideshowSpeed),a.playing=!0,i.pausePlay&&m.pausePlay.update("pause"),a.syncExists&&m.sync("play")},a.canAdvance=function(e,t){var n=p?a.pagingCount-1:a.last;return t?!0:p&&a.currentItem===a.count-1&&0===e&&"prev"===a.direction?!0:p&&0===a.currentItem&&e===a.pagingCount-1&&"next"!==a.direction?!1:e!==a.currentSlide||p?i.animationLoop?!0:a.atEnd&&0===a.currentSlide&&e===n&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===n&&0===e&&"next"===a.direction?!1:!0:!1},a.getTarget=function(e){return a.direction=e,"next"===e?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1},a.setProps=function(e,t,n){var o=function(){var n=e?e:(a.itemW+i.itemMargin)*a.move*a.animatingTo,o=function(){if(d)return"setTouch"===t?e:c&&a.animatingTo===a.last?0:c?a.limit-(a.itemW+i.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:n;switch(t){case"setTotal":return c?(a.count-1-a.currentSlide+a.cloneOffset)*e:(a.currentSlide+a.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:a.count*e;case"jumpStart":return c?a.count*e:e;default:return e}}();return-1*o+"px"}();a.transitions&&(o=l?"translate3d(0,"+o+",0)":"translate3d("+o+",0,0)",n=void 0!==n?n/1e3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",n)),a.args[a.prop]=o,(a.transitions||void 0===n)&&a.container.css(a.args)},a.setup=function(t){if(u)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&a.slides.eq(a.currentSlide).fadeIn(i.animationSpeed,i.easing),i.smoothHeight&&m.smoothHeight();else{var n,s;"init"===t&&(a.viewport=e('<div class="'+o+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,c&&(s=e.makeArray(a.slides).reverse(),a.slides=e(s),a.container.empty().append(a.slides))),i.animationLoop&&!d&&(a.cloneCount=2,a.cloneOffset=1,"init"!==t&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone"))),a.newSlides=e(i.selector,a),n=c?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset,l&&!d?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"}),a.doMath(),a.viewport.height(a.h),a.setProps(n*a.h,"init")},"init"===t?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(n*a.computedW,"init"),setTimeout(function(){a.doMath(),a.newSlides.css({width:a.computedW,"float":"left",display:"block"}),i.smoothHeight&&m.smoothHeight()},"init"===t?100:0))}d||a.slides.removeClass(o+"active-slide").eq(a.currentSlide).addClass(o+"active-slide")},a.doMath=function(){var e=a.slides.first(),t=i.itemMargin,n=i.minItems,o=i.maxItems;a.w=a.width(),a.h=e.height(),a.boxPadding=e.outerWidth()-e.width(),d?(a.itemT=i.itemWidth+t,a.minW=n?n*a.itemT:a.w,a.maxW=o?o*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-t*n)/n:a.maxW<a.w?(a.w-t*o)/o:i.itemWidth>a.w?a.w:i.itemWidth,a.visible=Math.floor(a.w/(a.itemW+t)),a.move=i.move>0&&i.move<a.visible?i.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:i.itemWidth>a.w?(a.itemW+2*t)*a.count-a.w-t:(a.itemW+t)*a.count-a.w-t):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1),a.computedW=a.itemW-a.boxPadding},a.update=function(e,t){a.doMath(),d||(e<a.currentSlide?a.currentSlide+=1:e<=a.currentSlide&&0!==e&&(a.currentSlide-=1),a.animatingTo=a.currentSlide),i.controlNav&&!a.manualControls&&("add"===t&&!d||a.pagingCount>a.controlNav.length?m.controlNav.update("add"):("remove"===t&&!d||a.pagingCount<a.controlNav.length)&&(d&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),m.controlNav.update("remove",a.last))),i.directionNav&&m.directionNav.update()},a.addSlide=function(t,n){var o=e(t);a.count+=1,a.last=a.count-1,l&&c?void 0!==n?a.slides.eq(a.count-n).after(o):a.container.prepend(o):void 0!==n?a.slides.eq(n).before(o):a.container.append(o),a.update(n,"add"),a.slides=e(i.selector+":not(.clone)",a),a.setup(),i.added(a)},a.removeSlide=function(t){var n=isNaN(t)?a.slides.index(e(t)):t;a.count-=1,a.last=a.count-1,isNaN(t)?e(t,a.slides).remove():l&&c?a.slides.eq(a.last).remove():a.slides.eq(t).remove(),a.doMath(),a.update(n,"remove"),a.slides=e(i.selector+":not(.clone)",a),a.setup(),i.removed(a)},m.init()},e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previoussss",nextText:"Nexssssts",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var n=e(this),a=t.selector?t.selector:".slides > li",i=n.find(a);1===i.length?(i.fadeIn(400),t.start&&t.start(n)):void 0===n.data("flexslider")&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previousasaas":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof t&&n.flexAnimate(t,!0)}}}(jQuery);
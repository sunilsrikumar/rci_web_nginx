var ww = document.body.clientWidth;
var $container = $('#casecontainer');
var elementsection = {
    element: $(".elements"),
    elementimg: $(".elements img"),
    loadmore: $(".loadMore"),
    loadmorechild: $(".loadMore p")
};
if($('#casecontainer').hasClass("loadspecific")) {
    var flag = 1;
}
else {
    var flag = 0;
}
var marleft = parseFloat(elementsection.element.css("margin-left"));
var marrgt = parseFloat(elementsection.element.css("margin-right"));
var borderwidth = 2 * parseFloat(elementsection.element.css("border-left-width"));

function coladjust() {
    var colw = elementsection.element.width()+marleft+marrgt+borderwidth;
    $(".caseloader").css("display","none");
    $("#casecontainer").css({"opacity": "1"});
    
    $container.isotope({
        itemSelector: '.elements',
        isResizeBound: true,
        masonry: {
            columnWidth: colw
        }
    });
}

$(window).on('resize', function () {
     coladjust();
 });

elementsection.loadmorechild.click(function () {
    coladjust();
    $("div.hiddenBlock").slice(0, 10).slideDown("slow").addClass("view viewBlock").removeClass("hiddenBlock");
    if ($("div.hiddenBlock").length === 0) {
        elementsection.loadmore.css("display", "none");
    }
});

$.Isotope.prototype._getCenteredMasonryColumns = function () {
    this.width = this.element.width();
    var parentWidth = this.element.parent().width();
    // options.masonry && options.masonry.columnWidth
    var colW = this.options.masonry && this.options.masonry.columnWidth ||
    // or use the size of the first item
    this.$filteredAtoms.outerWidth(true) ||
    // if there's no items, use size of container
    parentWidth;
    var cols = Math.floor(parentWidth / colW);
    cols = Math.max(cols, 1);
    // i.e. this.masonry.cols = ....
    this.masonry.cols = cols;
    // i.e. this.masonry.columnWidth = ...
    this.masonry.columnWidth = colW;
};

$.Isotope.prototype._masonryReset = function () {
    // layout-specific props
    this.masonry = {};
    // FIXME shouldn't have to call this again
    this._getCenteredMasonryColumns();
    var i = this.masonry.cols;
    this.masonry.colYs = [];
    while (i--) {
        this.masonry.colYs.push(0);
    }
};

$.Isotope.prototype._masonryResizeChanged = function () {
    var prevColCount = this.masonry.cols;
    // get updated colCount
    this._getCenteredMasonryColumns();
    return (this.masonry.cols !== prevColCount);
};

$.Isotope.prototype._masonryGetContainerSize = function () {
    var gh = this.options.filter === undefined ? "*" : this.options.filter;
    var unusedCols = 0,
        i = this.masonry.cols;
    // count unused columns
    if (gh === "*") {
        $("div.viewBlock").removeClass("view").addClass("hiddenBlock").removeClass("viewBlock");
        elementsection.loadmore.css("display", "block");
        elementsection.loadmorechild.removeClass("selected");
        var colH = $("div.view").outerHeight(true);
        var numitems = $("div.view").length;
        var numrows = Math.ceil(numitems / i);
        if(flag == 1) {
            var a = (numrows * colH);
        }
        else {
            var a = Math.max.apply(Math, this.masonry.colYs);
        }
        var tWid = (this.masonry.cols - unusedCols) * this.masonry.columnWidth;
        var emtWid = parseFloat(elementsection.element.css("margin-left"));
        calWid = tWid - (emtWid * 2);
        windwid = document.body.clientWidth;
        elementsection.loadmore.css("width", calWid);
        var windw = document.body.clientWidth;
        if(windw > 686) {
            $(".caseText").css("width", calWid);
            $("#hor_testimonial").css("width", calWid);
        }
        else {
            $(".caseText").css("width", "100%");
            $("#hor_testimonial").css("width", "100%");
        }
        
    } else if (gh === ".inactive") {
        var a = Math.max.apply(Math, this.masonry.colYs);
        var tWid = (this.masonry.cols - unusedCols) * this.masonry.columnWidth;
        var emtWid = parseFloat(elementsection.element.css("margin-left"));
        calWid = tWid - (emtWid * 2);
        windwid = document.body.clientWidth;
        elementsection.loadmore.css("width", calWid);
        elementsection.loadmorechild.removeClass("selected");
        var windw = document.body.clientWidth;
        if(windw > 686) {
            $(".caseText").css("width", calWid);
            $("#hor_testimonial").css("width", calWid);
        }
        else {
            $(".caseText").css("width", "100%");
            $("#hor_testimonial").css("width", "100%");
        }

    } else {
        elementsection.loadmore.css("display", "none");
        elementsection.loadmorechild.removeClass("selected");
        var a = Math.max.apply(Math, this.masonry.colYs);
    }
    while (--i) {
        if (this.masonry.colYs[i] !== 0) {
            break;
        }
        unusedCols++;
    }
    $(window).resize(function () {
            var fltWid = $(".filterSelected").width();
            $("#filters").css("width", fltWid);
            if(windw > 686) {
                $(".caseText").css("width", calWid);
                $("#hor_testimonial").css("width", calWid);
            }
            else {
                $(".caseText").css("width", "100%");
                $("#hor_testimonial").css("width", "100%");
            }
    });
        var fltWid = $(".filterSelected").width();
        $("#filters").css("width", fltWid);
    return {
        height: a,
        width: (this.masonry.cols - unusedCols) * this.masonry.columnWidth
    };
};

$(window).load(function() { 
    coladjust();   
    if(location.hash) {    
        var target =window.location.href;
        var d = target.split("#");
        pos = d[1];
        setTimeout(function () {
           $('html,body').animate({
                scrollTop: $("#"+pos).offset().top
            },0);
        }, 400);
    }   
});
/*
$(window).resize(function() { 
    setTimeout(function() {
        var colw = elementsection.element.width()+marleft+marrgt+borderwidth;
        $(".caseloader").css("display","none");
        $("#casecontainer").css({"opacity": "1"});
        $("#casecontainer .elements").transition({
              x: 0, 
              y: 0 ,
              duration: 2300 
        });
        $container.isotope({
            itemSelector: '.elements',
            masonry: {
                columnWidth: colw
            }
        });  
     }, 2000);
});
*/
$(function () {
    var $optionSets = $('.option-set'),
        $optionLinks = $optionSets.find("p");
    $optionLinks.click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $optionSet.find('.parent').removeClass('parent');
        $this.addClass('selected');
        $this.parent('li').addClass('parent');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});
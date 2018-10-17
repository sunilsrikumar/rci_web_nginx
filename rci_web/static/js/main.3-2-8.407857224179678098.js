var ww = document.body.clientWidth;
var $container = $("#clicontainer");
var elementsection = {
    element: $(".elements"),
    loadmore: $(".loadMore"),
    loadmorechild: $(".loadMore p")
};

function coladjust() {
    var a;
    if (ww > 1800) {
        elementsection.element.css({
            margin: "10px",
            width: "270px",
            height: "190px"
        });
        a = 296
    } else {
        if (ww > 1024 && ww < 1600) {
            elementsection.element.css({
                margin: "10px",
                width: "182px",
                height: "160px"
            });
            a = 208
        } else {
            if (ww > 400 && ww < 560) {
                elementsection.element.css({
                    margin: "10px",
                    width: "250px",
                    height: "160px"
                });
                a = 276
            } else {
                if (ww < 400) {
                    elementsection.element.css({
                        "margin-top": "10px",
                        "margin-bottom": "10px",
                        "margin-left": "0",
                        "margin-right": "0",
                        width: "250px",
                        height: "160px"
                    });
                    a = 256
                } else {
                    elementsection.element.css({
                        width: "182px",
                        height: "160px"
                    });
                    a = 218
                }
            }
        }
    }
    $container.isotope({
        itemSelector: ".elements",
        masonry: {
            columnWidth: a
        }
    })
}
elementsection.loadmorechild.click(function () {
    coladjust();
    $("div.hiddenBlock").slideDown("slow").addClass("view viewBlock").removeClass("hiddenBlock");
    if ($("div.hiddenBlock").length === 0) {
        elementsection.loadmore.css("display", "none")
    }
});

$.Isotope.prototype._getCenteredMasonryColumns = function () {
    this.width = this.element.width();
    var b = this.element.parent().width();
    var a = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(true) || b;
    var c = Math.floor(b / a);
    c = Math.max(c, 1);
    this.masonry.cols = c;
    this.masonry.columnWidth = a
};
$.Isotope.prototype._masonryReset = function () {
    this.masonry = {};
    this._getCenteredMasonryColumns();
    var a = this.masonry.cols;
    this.masonry.colYs = [];
    while (a--) {
        this.masonry.colYs.push(0)
    }
};
$.Isotope.prototype._masonryResizeChanged = function () {
    var a = this.masonry.cols;
    this._getCenteredMasonryColumns();
    return (this.masonry.cols !== a)
};
$.Isotope.prototype._masonryGetContainerSize = function () {
    var k = this.options.filter === undefined ? "*" : this.options.filter;
    var g = 0,
        h = this.masonry.cols;
    if (k === "*") {
        $("div.viewBlock").removeClass("view").addClass("hiddenBlock").removeClass("viewBlock");
        elementsection.loadmore.css("display", "block");
        elementsection.loadmorechild.removeClass("selected");
        if (ww > 1800) {
            var j = $("div.view").height() + 26
        } else {
            if (ww > 1024 && ww < 1600) {
                var j = $("div.view").height() + 26
            } else {
                if (ww > 400 && ww < 560) {
                    var j = $("div.view").height() + 26
                } else {
                    if (ww < 400) {
                        var j = $("div.view").height() + 26
                    } else {
                        var j = $("div.view").height() + 36
                    }
                }
            }
        }
        var p = $("div.view").length;
        var d = Math.ceil(p / h);
        var o = (d * j);
        var n = (this.masonry.cols - g) * this.masonry.columnWidth;
        var e = elementsection.element.css("margin-left");
        e = parseInt(e);
        calWid = n - (e * 2);
        elementsection.loadmore.css("width", calWid);
        $(".clientText").css("width", calWid)
    } else {
        if (k === ".inactive") {
            if (ww > 1800) {
                var j = $("div.view").height() + 26
            } else {
                if (ww > 1024 && ww < 1600) {
                    var j = $("div.view").height() + 26
                } else {
                    if (ww > 400 && ww < 560) {
                        var j = $("div.view").height() + 26
                    } else {
                        if (ww < 400) {
                            var j = $("div.view").height() + 26
                        } else {
                            var j = $("div.view").height() + 36
                        }
                    }
                }
            }
            var o = Math.max.apply(Math, this.masonry.colYs);
            var n = (this.masonry.cols - g) * this.masonry.columnWidth;
            var e = elementsection.element.css("margin-left");
            e = parseInt(e);
            calWid = n - (e * 2);
            elementsection.loadmore.css("width", calWid);
            $(".clientText").css("width", calWid);
            elementsection.loadmorechild.removeClass("selected")
        } else {
            elementsection.loadmore.css("display", "none");
            elementsection.loadmorechild.removeClass("selected");
            var o = Math.max.apply(Math, this.masonry.colYs)
        }
    }
    while (--h) {
        if (this.masonry.colYs[h] !== 0) {
            break
        }
        g++
    }
    var b = $(".homeWrapper").width();
    var f = $(".clientText").offset();
    var c = f.left;
    var m = $(".clientText").width();
    var q = b - (m + c);
    var l = $(".filterSelected").width();
    $("#filters").css("width", l);
    return {
        height: o,
        width: (this.masonry.cols - g) * this.masonry.columnWidth
    }
};
$(function () {
    coladjust();
    var a = $(".option-set"),
        b = a.find("p");
    b.click(function () {
        var g = $(this);
        if (g.hasClass("selected")) {
            return false
        }
        var e = g.parents(".option-set");
        e.find(".selected").removeClass("selected");
        g.addClass("selected");
        var c = {},
            d = e.attr("data-option-key"),
            f = g.attr("data-option-value");
        f = f === "false" ? false : f;
        c[d] = f;
        if (d === "layoutMode" && typeof changeLayoutMode === "function") {
            changeLayoutMode(g, c)
        } else {
            $container.isotope(c)
        }
        return false
    })
});
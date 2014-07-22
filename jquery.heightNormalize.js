

(function ($) {

    $.fn.heightNormalize = function (options) {
        var settings = $.extend({
            addToHeight: 0
        }, options);
        var oldIE = $("html").is("ie8") || $("html").is("ie7") || $("html").is("lt-ie7");
        var heights = new Array(this.length);
        if (this.length > 1) {
            $.each(this, function (idx, item) {
                var height = 0;
                var childrens = $(item).children();
                if (childrens.length != 0) {
                    if (oldIE) {
                        height = $(item).height();
                    } else {
                        $.each(childrens, function (id, child) {
                            if ($(child).css("display") !== "none")
                                height += $(child).height();
                        });
                        $(item).height(height);
                    }
                } else {
                    height = $(item).height();
                }

                heights[idx] = height;
            });
            var maxheight = 0;
            $.each(heights, function (id, height) {
                if (height >= maxheight) {
                    maxheight = height;
                }
            });
            $.each(this, function (idx, item) {
                $(item).height(maxheight + settings.addToHeight);

            });
            contentAreaHeight = maxheight;
        }
        return this;

    };

}(jQuery));

$(document).ready(function() {
// ***************************
    $('.next').click(
        function() {
            sliderNext();
    });

    $('.prev').click(
        function() {
            sliderPrev();
    });

    $('.nav i').click(
        function() {
            sliderCircleManually(this);
    });

    $(document).keydown(function() {
        switch (event.which) {
            case 37:
                sliderPrev();
                break;
            case 39:
                sliderNext();
                break;
        };
    });
// ***************************
});

// ***************************
function sliderNext() {
    var imageActive = $('img.active');
    var circleActive = $('i.active');
    if (imageActive.hasClass('last')) {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        $('img.first').addClass('active');
        $('i.first').addClass('active');
    } else {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        imageActive.next().addClass('active');
        circleActive.next().addClass('active');
    };
};

function sliderPrev() {
    var imageActive = $('img.active');
    var circleActive = $('i.active');
    if (imageActive.hasClass('first')) {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        $('img.last').addClass('active');
        $('i.last').addClass('active');
    } else {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        imageActive.prev().addClass('active');
        circleActive.prev().addClass('active');
    };
};

function sliderCircleManually(thisCircle) {
    $('img.active').removeClass('active');
    $('i.active').removeClass('active');
    $('.images img').eq($(thisCircle).index()).addClass('active');
    $('.nav i').eq($(thisCircle).index()).addClass('active');
};
// ***************************

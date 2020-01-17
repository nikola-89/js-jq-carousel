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
    var imageNext = imageActive.next();
    var circleNext = circleActive.next();

    if (imageActive.hasClass('last')) {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        $('img.first').addClass('active');
        $('i.first').addClass('active');
    } else {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        imageNext.addClass('active');
        circleNext.addClass('active');
    }
}

function sliderPrev() {
    var imageActive = $('img.active');
    var circleActive = $('i.active');
    var imagePrev = imageActive.prev();
    var circlePrev = circleActive.prev();

    if (imageActive.hasClass('first')) {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        $('img.last').addClass('active');
        $('i.last').addClass('active');
    } else {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        imagePrev.addClass('active');
        circlePrev.addClass('active');
    }
}

function sliderCircleManually(thisCircle, image, icon) {
    var indexNumber = $(thisCircle).index();
    // ($('.images img').eq(indexNumber).prop('src'));
    icon.eq(indexNumber).removeClass('active');
    image.eq(indexNumber).removeClass('active');
    icon.eq(indexNumber).addClass('active');
    image.eq(indexNumber).addClass('active');
}
// ***************************

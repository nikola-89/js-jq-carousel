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
    var imageNext = imageActive.prev();
    var circleNext = circleActive.prev();

    if (imageActive.hasClass('first')) {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        $('img.last').addClass('active');
        $('i.last').addClass('active');
    } else {
        imageActive.removeClass('active');
        circleActive.removeClass('active');
        imageNext.addClass('active');
        circleNext.addClass('active');
    }
}
// ***************************

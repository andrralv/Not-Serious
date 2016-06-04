$(window).load(function(){
    $('#wrapper').fadeIn("slow");
});

$('html').waitForImages(function() {
    // show html once all images load
    $('html').css('visibility', 'visible');
});
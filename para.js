function parallax_height(){
    let scroll_top = $(window).scrollTop();
    let header_height = $(".header-section").outerHeight();
    $(".section").css({
        "margin-top": header_height
    });
    $(".header").css({
        "height": header_height - scroll_top
    });        
}

parallax_height();

$(window).scroll(function(){
    parallax_height();
});
$(window).resize(function(){
    parallax_height();
});
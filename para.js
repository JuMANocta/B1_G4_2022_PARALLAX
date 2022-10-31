function parallax_height(){
    let scroll_top = $(this).scrollTop();
    let section_top = $('.section').offset().top;
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
function moveToDiv(id) {
    $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1500);
}
// Smooth scroll function
function moveToDiv(id) {
    $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1500);
}

// Function to make elements with class "hidden" appear when in view
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hidden').each( function(i){
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){  
                $(this).animate({'opacity':'1'},500);       
            }   
        }); 
    });
});
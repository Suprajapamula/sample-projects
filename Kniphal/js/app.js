
window.onscroll = function () {
    const logo = document.getElementById('header');
    if (window.scrollY > 0) {
        logo.classList.add('scrolled');
    } else {
        logo.classList.remove('scrolled');
    }
};
$(document).ready(function(){
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    
    $("#home").click(function(){
        $('html,body').animate({ scrollTop: $("body").offset().top - 0 }, 'slow');
    })
    $("#portfolioLink").click(function(){
        $('html,body').animate({ scrollTop: $("#protfolio").offset().top - 150 }, 'slow');
    })
    $("#webshopLink").click(function(){
        $('html,body').animate({ scrollTop: $("#webshop").offset().top - 0 }, 'slow');
    })
    $("#contactLink").click(function(){
        $('html,body').animate({ scrollTop: $("#contact").offset().top - 150 }, 'slow');
    })

})
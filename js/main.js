AOS.init();

var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

// Scroll to top
$('#to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});


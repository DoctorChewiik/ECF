$(function () {
    const words = [
        'En recherche de stage',
        'Ceci est une catchphrase'
    ]
    i = 0;

    // affichage du menu responsif écran inférieur ou égaux a md
    // $(".navbar-responsive").toggle();

    // $(".menu").click(function () {
    //     $(".navbar-responsive").toggle("slow");
    });
    // affichage aléatoire des phrases d'accroches du header (toutes les 3,5s)
    setInterval(function() {
        $("#word").fadeOut(function() {
            $(this).html(words [i = (i + 1) % words.length]).fadeIn();
        });
    }, 3500);

    // scroll vers les différentes section du site

    $(".scroll").click(function() {
        const section = $("." + this.id);
        $("html,body").animate({scrollTop: section.offset().top}, 'slow')
    });

    // affichage des progressbar des compétences
    window.sr = ScrollReveal();
    sr.reveal('.progress-bar', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    });
//     $("#myCarousel").carousel();

//     // Enable Carousel Indicators
//     $(".item").click(function(){
//         $("#myCarousel").carousel(1);
//     });

//     // Enable Carousel Controls
//     $(".carousel-control-prev").click(function(){
//         $("#myCarousel").carousel("prev");
//     });
// });


$(document).ready(function(){

    $('#mobile_btn_lateral').on('click', function () {

        $('#mobile_navegacao').toggleClass('active');
        $('#mobile_btn_lateral').find('i').toggleClass('fa-x');

    });

    

    const sections = $('section');

    const nav_items = $('.nav_item');

    $(window).on('scroll', function () {

        const header = $('header');

        let activesectionindex = 0;

        const scrollposition = $(window).scrollTop() - header.outerHeight();

        if(scrollposition <= 0){

            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.43)');
        }

        sections.each(function(i) {

            const section = $(this);
            const sectiontop = section.offset().top - 96;
            const sectionbottom  = sectiontop + outerHeight();

            if(scrollposition >= sectiontop &&  scrollposition < sectionbottom){

                activesectionindex = i;

                return false;
            }
        });

        nav_items.removeClass('active');
        $(nav_items[activesectionindex]).addClass('active');


    });

    ScrollReveal().reveal('#cta', {

        origin: 'left',

        duration: 2000,

        distance: '20%',
    })

    ScrollReveal().reveal('.dish', {

        origin: 'left',

        duration: 2000,

        distance: '20%',
    })

    ScrollReveal().reveal('#testimonial_chef', {

        origin: 'left',

        duration: 2000,

        distance: '20%',
    })

    ScrollReveal().reveal('.feedback', {

        origin: 'right',

        duration: 2000,

        distance: '20%',
    })
});
$(function() {

    //BEGIN
    $(".accordion__title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this);

        // if (!$this.hasClass("accordion-active")) {
        //     $(".accordion__content").slideUp(400);
        //     $(".accordion__title").removeClass("accordion-active");
        //     $('.accordion__arrow').removeClass('accordion__rotate');
        // }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END

});

$(document).ready(function () {
    $('.mobile-menu').click(function(event) {
        $('.mobile-menu').toggleClass('open');
        $('.navbar-mobile').toggleClass('open-nav');

    });
    $('.open-filter').click(function(event) {
        $('.filter-items').show();
        $('.bg-black').show();
    });
    $('#close-filter').click(function(event) {
        $('.filter-items').hide();
        $('.bg-black').hide();
    });

    $('.open-sort').click(function(event) {
        $('.sort-block').show();
        $('.bg-black').show();
    });
    $('#close-sort').click(function(event) {
        $('.sort-block').hide();
        $('.bg-black').hide();
    });
    $('.tablet-menu').click(function(event) {
        $('.tablet-menu').toggleClass('open');
        $('#navigation').toggleClass('open-nav');
        $('.bg-black').toggleClass('d-block');
    });
});
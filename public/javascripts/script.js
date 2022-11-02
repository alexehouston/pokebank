$("#menu").click(function () {
    $(".navbar").toggleClass('is-open');
    $(".overlay").toggleClass('is-visible');
    $(this).toggleClass('open');
});
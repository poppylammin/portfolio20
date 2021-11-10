function scrollToPortfolio() {
    return $("html, body").animate({ scrollTop: $("#portfolio").offset().top }, 1e3), !1;
}
(window.onload = function () {
    $(".Preload").fadeOut("slow"), $("body").css("overflow", "visible");
})
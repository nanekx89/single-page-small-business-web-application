// import $ from "jquery";

$("#nav-toggle").on("click", function () {
    $("#nav-menu").toggleClass("show-menu");
});

$(window).on("scroll", function () {
    if (this.scrollY >= 100) {
        $("#header").addClass("scroll-header");
    } else {
        $("#header").removeClass("scroll-header");
    }

    $("section").each(function (i) {
        const sectionHeight = $("section")[i].offsetHeight;
        const sectionTop = $("section")[i].offsetTop - 50;
        const sectionId = $("section")[i].getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            $(`.nav__menu a[href*= ${sectionId}]`).addClass("active-link");
        } else {
            $(`.nav__menu a[href*= ${sectionId}]`).removeClass("active-link");
        }
    });

    if (this.scrollY >= 560) {
        $("#scroll-up").addClass("show-scroll");
    } else {
        $("#scroll-up").removeClass("show-scroll");
    }
});

$(".nav__link").each(function (i) {
    $(".nav__link").on("click", function () {
        $("#nav-menu").removeClass("show-menu");
    });
});
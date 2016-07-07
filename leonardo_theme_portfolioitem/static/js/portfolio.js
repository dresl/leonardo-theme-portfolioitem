$(document).ready(function(){
  $(".fakeloader").fakeLoader({
    timeToHide:900,
    bgColor:"#69A5ED",
    spinner:"spinner7"
  });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#main_content").css("padding-top", "170px");
        $(".main-navbar-fixed").addClass("navbar-static-top");
        $(".main-navbar-fixed").removeClass("navbar-fixed-top");
    } else {
        $("#main_content").css("padding-top", "70px");
        $(".main-navbar-fixed").addClass("navbar-fixed-top");
        $(".main-navbar-fixed").removeClass("navbar-static-top");
    }
});
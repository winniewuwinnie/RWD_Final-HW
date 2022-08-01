$("document").ready(function () {
  $(".order_main_search_checkOut a").hover(
    function () {
      // over
      $(".order_main_search_checkOut a").addClass(
        "animate__animated animate__rubberBand"
      );
    },
    function () {
      // out
      $(".order_main_search_checkOut a").removeClass(
        "animate__animated animate__rubberBand"
      );
    }
  );
  $(".order_main_item .like").hover(
    function () {
      // over
      $(this).addClass("animate__animated animate__tada");
    },
    function () {
      // out
      $(this).removeClass("animate__animated animate__tada");
    }
  );
  $(".m-menuBar-open").click(function (event) {
    event.preventDefault();
    $(".wrap").addClass("active");
    $(this)
      .css("display", "none")
      .siblings(".m-menuBar-close")
      .css("display", "block");
  });
  $(".m-menuBar-close").click(function (event) {
    event.preventDefault();
    $(".wrap").removeClass("active");
    $(".dropdown").removeClass("active");
    $(".dropdown-open").slideUp();
    $(this)
      .css("display", "none")
      .siblings(".m-menuBar-open")
      .css("display", "block");
  });
  $(".dropdown").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings(".dropdown-open").slideToggle();
    $(this).parent("li").siblings().find(".dropdown").removeClass("active");
    $(this)
      .parent("li")
      .siblings()
      .find(".dropdown")
      .siblings(".dropdown-open")
      .slideUp();
  });
  $(".order_main_item .fa-regular").click(function (event) {
    event.preventDefault();
    $(this)
      .css("display", "none")
      .parent(".like")
      .siblings(".dislike")
      .find(".fa-solid")
      .css("display", "block");
  });
  $(".order_main_item .fa-solid").click(function (event) {
    event.preventDefault();
    $(this)
      .css("display", "none")
      .parent(".dislike")
      .siblings(".like")
      .find(".fa-regular")
      .css("display", "block");
  });
  $(".scrollTop a").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
});

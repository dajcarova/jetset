$(function(){
  let scrollUp = $("#scroll-up");
  let viewportHeight = $(window).height();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function(){
    scrollPos = $(this).scrollTop();

    if(scrollPos > viewportHeight){
      scrollUp.addClass("scroll-up--visible");
    } else {
      scrollUp.removeClass("scroll-up--visible");
    }
  });


  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top

    console.log(elementOffset);

    $("html, body").animate({
      scrollTop: elementOffset - $("#header").innerHeight()
    });
  });
});
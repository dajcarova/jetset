$(function(){
  let scrollUp = $("#scroll-up");
  
  $(window).on("scroll load resize", function(){
    
    if($(this).scrollTop() > 40){
      scrollUp.fadeIn();
    } else {
      scrollUp.fadeOut();
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
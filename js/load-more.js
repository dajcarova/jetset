$(".blog__item").slice(0, 6).show();

$(".button--loadMore").on("click",function(){
  $(".blog__item:hidden").slice(0, 2).slideDown();

  if($(".blog__item:hidden").length == 0){
    $(".button--loadMore").fadeOut();
  }
})
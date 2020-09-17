
$(document).ready(function(){

    $('.slider').slick();
    $('.acordion-body__name').click(function(event) {
      if($('.acordion-body__items').hasClass('one')){
        $('.acordion-body__name').not($(this)).removeClass('active');
        $('.acordion-body__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.header-nav, .top-menu__burger ').click(function(event) {
      $('.header-nav, .top-menu__burger').toggleClass('active');
      
     
  });
});

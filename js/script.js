/*==========================================
# wow
===========================================*/
new WOW().init();

/*==========================================
#  スムーススクロール
===========================================*/
jQuery('a[href^="#"]').click(function() {
  let header = jQuery(".header").innerHeight();
  let speed = 500;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  let position = jQuery(target).offset().top - header;
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

/*==========================================
# トップへ戻る
===========================================*/
jQuery(window).on("scroll", function() {
  if (100 < jQuery(this).scrollTop()) {
 jQuery('.totop').addClass( 'is-show' );
  } else {
  jQuery('.totop').removeClass( 'is-show' );
  }
});

/*==========================================
# ナビゲーションに下線を付与
===========================================*/
jQuery('.header-nav .nav-list .nav-item a').click(function() {
  jQuery('.header-nav .nav-list .nav-item a').removeClass( 'is-active' );
  jQuery(this).addClass( 'is-active' );
  return false;
});

/*==========================================
# drawer
===========================================*/
jQuery('.drawer-icon').on('click',function(e){
  e.preventDefault();
  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-bg').toggleClass('is-active');

  return false;
});
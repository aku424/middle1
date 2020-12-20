$(function(){
    $('.drawer').drawer();
    $(window).scroll(function(){
        var now = $(window).scrollTop();
        if (now > 500){
            $(".warp-top-icon").fadeIn(700);
        }else{
            $(".warp-top-icon").fadeOut(700);
        }
        });
    
    $(".warp-top").click(function(){
        $("html,body").animate({scrollTop:0}, 500)
        return false;
    });
    // drawer
    $('.drawer-hamburger').click(function(){
        if ($('.drawer').hasClass('.drawer-open')) {
            $('.open-bg').addClass('.header-nav-open-bg')
        }else{
            $('.open-bg').removeClass('.header-nav-open-bg')
        }
        
    });
    //  =========page link=======
    // #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = $("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        $("html, body").animate(
        {
            scrollTop: position
        },
        speed
        );
        return false;
    });
    // qa
    $('.qa-item').click(function(){
        if ($(this).find('#js-answer').hasClass('.active')) {
            $(this).find('.qa-puls').text('+');
            $(this).find('#js-answer').slideUp();
            $(this).find('#js-answer').removeClass('.active');
        } else {
            $(this).find('.qa-puls').text('-');
            $(this).find('#js-answer').slideDown();
            $(this).find('#js-answer').addClass('.active');            
        }
    });
    // //slick
    // $('.slick').slick({
    // });
    $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,

        responsive: [{
            breakpoint: 768,  //ブレイクポイントを指定
            settings: {
                slidesToShow: 1,
            },
        }]
    });
});
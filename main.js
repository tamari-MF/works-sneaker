$(function(){
    $('.toggle_btn').on('click',function(){
        if($('#header').hasClass('open')){
            $('#header').removeClass('open')
        }else{
            $('#header').addClass('open')
        }
    })

    $('#mask').on('click',function(){
        $('#header').removeClass('open');
    })

    $('#navi a').on('click',function(){
        $('#header').removeClass('open')
    })

    /*スムーススクロール*/

    $('a[href^="#"]').click(function(){
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;

        $("html , body").animate({scrollTop:position},600,"swing");
        return false;
    });

    /*pickupスライダー*/

    $('.slick-area').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerPadding: '50px',
              slidesToShow: 1
            }
          }
        ]
    });

    /*フェードイン*/
    $(window).scroll(function(){
        $('.fadein').each(function(){
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();

            // fadeinクラスの要素が画面下にきてから200px通過した
            // タイミングで要素を表示
            if (scroll > target - windowHeight + 200){
                $(this).css('opacity','1')
                $(this).css('transform','transrateY(0)')
            }

        })
    })

})





$(function () {
  //window는 viewport를 뜻함 화면(viewport)이 스크롤 될 때마다 내부코드를 실행해주세요.
  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    console.log(sct);

    // if (sct == 650) {
    //   $('.card-box').eq(0).css('opacity', 1)
    // } else if (sct == 1150) {
    //   $('.card-box').eq(0).css('opacity', 0)
    // }


    //첫번째 card-box => scrollTop이 650~1150일때 0~1이 되는 투명도, 크기는?
    var 투명도 = (-1 / 500) * sct + (2.3);
    $('.card-box').eq(0).css('opacity', 투명도)
    // 투명도 = a * sct + b
    // 1 = a * 650 + b
    // 0 = a * 1150 + b
    // a = -1/500;
    // b = 115/50 = 2.3
    // 따라서 투명도 = (-1/500) * sct + (115/50)
    var 크기 = (-1 / 5000) * sct + (1.13);
    $('.card-box').eq(0).css('transform', `scale(${크기})`)
    // 크기 = a * sct + b
    // 1 = a * 650 + b
    // 0.9 = a * 1150 + b
    // a = -1/5000;
    // b = 115/50 = 1.13
    // 따라서 투명도 = (-1/500) * sct + 1.13

    //두번째 card-box => scrollTop이 1430~1930일때 0~1이 되는 투명도, 크기는?
    var 투명도 = (-1 / 500) * sct + (193 / 50);
    $('.card-box').eq(1).css('opacity', 투명도)
    var 크기 = (-1 / 5000) * sct + (643 / 500);
    $('.card-box').eq(1).css('transform', `scale(${크기})`)

  });


})

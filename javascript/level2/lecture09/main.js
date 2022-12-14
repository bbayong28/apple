// 버튼 0누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼 0 에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show클래스명 추가

//jquery

$('.tab-button').eq(0).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange'); 
});

//나머지 과제로 하기
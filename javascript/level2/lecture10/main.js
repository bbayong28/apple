// 버튼 0누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼 0 에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show클래스명 추가

//jquery
//$('.tab-button').eq(0).on('click', function () {
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(0).addClass('orange');    
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(0).addClass('show');
//});
//$('.tab-button').eq(1).on('click', function () {
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(1).addClass('orange');    
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(1).addClass('show');
//});
//$('.tab-button').eq(2).on('click', function () {
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(2).addClass('orange');    
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(2).addClass('show');
//});
// 좋은 관습 : 자주쓰는 셀렉터 변수에 넣어쓰기
//셀렉터 문법은 느림

var 버튼 = $('.tab-button');
var 내용 = $('.tab-content');
//버튼.eq(0).on('click', function () {
//    버튼.removeClass('orange');
//    버튼.eq(0).addClass('orange');
//    내용.removeClass('show');
//    내용.eq(0).addClass('show');
//});
//버튼.eq(1).on('click', function () {
//    버튼.removeClass('orange');
//    버튼.eq(1).addClass('orange');
//    내용.removeClass('show');
//    내용.eq(1).addClass('show');
//});
//버튼.eq(2).on('click', function () {
//    버튼.removeClass('orange');
//    버튼.eq(2).addClass('orange');
//    내용.removeClass('show');
//    내용.eq(2).addClass('show');
//});
//이렇게 하면 될줄 알았는데 에러가 남 
//for (var i = 0; i < 3;  i++) { 
//    버튼.eq(i).on('click', function () {
//        버튼.removeClass('orange');
//        버튼.eq(i).addClass('orange');    
//        내용.removeClass('show');
//        내용.eq(i).addClass('show');
//    });
//}
// var를 let으로 바꿔주자!!!!
//for (let i = 0; i < 3;  i++) { 
//    버튼.eq(i).on('click', function () {
//        버튼.removeClass('orange');
//        버튼.eq(i).addClass('orange');    
//        내용.removeClass('show');
//        내용.eq(i).addClass('show');
//    });
//}

//탭이 4,5 개로 늘어나도 잘 작동하는 코드? = 확장성 있는 코드로 바꿔보기
for (let i = 0; i < $('.tab-button').length;  i++) { 
    $('.tab-button').eq(i).on('click', function () {
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');    
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}
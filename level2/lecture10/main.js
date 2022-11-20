//window.addEventListener('DOMContentLoaded', ()  => {
//    document.querySelector('.tab-button')[0].addEventListener('click', function () {
//        this.classList.add('orange');
//    })
//})



// 버튼 0누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼 0 에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show클래스명 추가
//document.querySelectorAll('.tab-button').classList.remove('orange');
//document.querySelectorAll('.tab-button')[0].classList.add('orange');
//document.querySelectorAll('.tab-content').classList.remove('show');
//document.querySelectorAll('.tab-content')[0].classList.add('show');

//js
// document.querySelectorAll('.tab-button').addEventListener('click', function () {
//     document.querySelectorAll('.tab-button').classList.remove('orange')
//     document.querySelectorAll('.tab-button').classList.add('orange')
// })

//jquery

$('.tab-button').eq(0).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');    
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
});
$('.tab-button').eq(1).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');    
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
});
$('.tab-button').eq(2).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');    
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
});
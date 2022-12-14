// 탭기능 다르게 만들기 -> 이벤트리스너 하나만 쓰기
function 탭열기(구멍) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(구멍).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(구멍).addClass('show');
};

//몰래 심어놓은 데이터로 위의 반복되는 코딩 축약하기
$('.list').click(function (e) {
    탭열기(e.target.dataset.id)
});

//object안에 아무거나 다 넣을 수 있음 Object, array 넣기도 가능
//var car2 = { name: '소나타', price: [50000, 3000, 4000] }
//document.querySelector('.car-price').innerHTML = car2.price[0]

//셔츠 선택하면 사이즈<select> 하나더 보여주기
//유저가 shirt를 클릭하면 block이 되어라(form-hide를 떼라)
//var value = $('.form-select').eq(0).val();
//if(value == '셔츠'){
//    $('.form-select').eq(1).removeClass('form-hide')
//}
//<script> 안에 대충 적은 코드는 페이지 로드 시 1회만 실행됨.
//유저가 선택할 때마다 이 코드 실행하게 만들어야 함
//input이벤트 : 유저가 <input> 값을 변경할 때 input 이벤트 발동!!
$('.form-select').eq(0).on('input', function (e) { 
    var value = e.currentTarget.value;
    //var value = this.value;
    //var value = $('.form-select').eq(0).val();
    if(value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide')
    }
})

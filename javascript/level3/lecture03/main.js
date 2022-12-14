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

//var car2 = { name: '소나타', price: 50000 }
//document.querySelector('.car-title').innerHTML = car2.name;// 변수 넣기 불가
// = document.querySelector('.car-title').innerHTML = car2['name']; 변수 넣기 가능
//document.querySelector('.car-price').innerHTML = car2.price;


//object안에 아무거나 다 넣을 수 있음 Object, array 넣기도 가능
var car2 = { name: '소나타', price: [50000, 3000, 4000] }
document.querySelector('.car-price').innerHTML = car2.price[0]

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

//var car = '소나타';
//var price = 50000;
//var color = 'white';
//변수 하나에 여러자료 저장 가능
//var car = '소나타 50000 white'
//but 꺼내쓰기 어려움 => 그래서 [] 배열(array)로 만들어 줌
//array쓰면 여러자료를 변수 하나에 저장가능
//var car = ['소나타', 50000, 'white']
//car[0] = '벤츠' // 배열 수정
//car[3] = '벤츠' // 배열 추가
//console.log(car[0])
//document.querySelector('.car_name')[0].innerHTML = car;

//객체 object자료형
//var car2 = { name: '소나타', price: 50000, color: 'white' }
//car2.name = '벤츠' // 배열 수정
//car2.tire = 4 // 배열 추가
//console.log(car2.name)
//console.log(car2['name'])

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
$('.form-select').eq(0).on('input', function () {
    var value = this.value;
    //var value = e.currentTarget.value; //function (e) e적기!
    //var value = $('.form-select').eq(0).val();

    if (value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide')
    } else if (value == '바지') {
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        var pantsSize = `
            <option>사이즈를 선택하세요.</option>
            <option>28</option>
            <option>30</option>
        `;
        $('.form-select').eq(1).append(pantsSize);
    }
});
//바지를 눌렀다가 셔츠를 누르면 이상해짐 (알아서 해결)


//아래의 내용으로 데이터를 보내면서 pants의 데이터 갯수만큼 <option>생성해주세요.

var pants = [28, 30, 32, 34];
var shirt = [95, 100, 105];

$('.form-select').eq(0).on('input', function () {
    var value = this.value;

    if (value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide');
        shirt.forEach(function (shirtsdata) {
            $('.form-select').eq(1).append(`<option>${shirtsdata}</option>`)
        });
    } else if (value == '바지') {
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        //서버에서 데이터 가져와서 그거 갯수만큼 <option> 만들기

        //for (var i = 0; i < pants.length; i++) {
        //    //option태그 생성해주세요~
        //} 라고하면 길고 복잡

        //forEach반복문 => array 자료에만 붙일 수 있는 반복문
        //a => array안에 있던 데이터들임.
        //forEach 안에 파라미터 2개 생성 가능
        //첫번째 파라미터 => array안의 데이터
        //두번째 파라미터 => 0부터 1씩 증가하는 정수
        //pants.forEach(function (a, i) {
        //    //console.log(a)
        //    //console.log(1234) // 바지 선택하면 3번 반복됨
        //    $('.form-select').eq(1).append(`<option>${a}</option>`)
        //    $('.form-select').eq(1).append(`<option>${i}</option>`)
        //});
        pants.forEach(function (pantsdata) {
            //console.log(a)
            //console.log(1234) // 바지 선택하면 3번 반복됨
            $('.form-select').eq(1).append(`<option>${pantsdata}</option>`)
        });
        //arrow function 문법
        pants.forEach((pantsdata) => {
            $('.form-select').eq(1).append(`<option>${pantsdata}</option>`)
        });
    }
});
//바지를 눌렀다가 셔츠를 누르면 이상해짐 (알아서 해결)

//object 자료도 갯수만큼 반복문 돌릴 수 있음
var obj = { name: 'kim', age: '20' }
for (var key in obj) {
    //console.log(1);
    //console.log(key); // name, age
    console.log(obj[key]); // kim, age
}
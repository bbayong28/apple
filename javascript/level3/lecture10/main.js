var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

//가격 낮은 순 정렬
$('#price').on('click', function () {
    products.sort(function (a, b) {
        return a.price - b.price;
        //console.log(products)
    })

    //1. 카드 3개있던 div 내용 제거
    $('.row').html('');

    //2. products 갯수만큼 카드생성
    products.forEach((asssss, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${asssss.title}</h5>
            <p>가격 : ${asssss.price}</p>
        </div>`;
        $('.row').append(템플릿);
    })

})

//products.sort(((a, b) => a.price - b.price));


////간단한 array 자료 정렬하는 법
//var 숫자배열 = [7, 3, 5, 2, 40];
//var 문자배열 = ['a', 'c', 'b']
////sort() 함수는 문자정렬
//숫자배열.sort();
////console.log(숫자배열)// 2,3,40,5,7 로 정렬함
////숫자 오름차순 정렬 
//// 1. a, b는 array안의 자료임
//// 2. return 오른쪽이 양수면 a를 오른쪽으로
//// 3. return 오른쪽이 음수면 a를 왼쪽으로
//숫자배열.sort(function (a, b) {
//    return a - b
//});
////console.log(숫자배열)// 2,3,5,7,40 로 정렬함
//
////숫자 내림차순 정렬 
//숫자배열.sort(function (a, b) {
//    return b - a
//});
////console.log(숫자배열)// 40,7,5,3,2 로 정렬함
//
//
////문자 가나다 순 정렬하기
//문자배열.sort();
//console.log(문자배열)
//
////문자 다나가 순 정렬
//문자배열.sort(function (a, b) {
//    if (a > b) {
//        return -1
//    } else if (a < b) {
//        return 1
//    } else {
//        return 0
//    }
//});
//console.log(문자배열)
//
////문자 다나가 순 정렬
//문자배열.reverse();
//console.log(문자배열);


var arr = [7, 3, 5, 2, 40];

//array  자료 원하는 것만 필터하려면 .filter() 함수
//파라미터 a는 arr에 있는 각각의 자료들
//원본자료는 손대지 않고 새로운 배열로 만들기 때문에 새 정의 해줘야 함.
//sort()는 옛날 문법, 원본변형 O
//filter()는 원본변형 X
// map() array 자료 전부 변형.

var newarr = arr.filter(function (a) {
    return a < 4
})
console.log(newarr)// [3, 2]


var newarr = arr.map(function (a) {
    return a * 4
})
console.log(newarr)// [28, 12, 20, 8, 160]






products.forEach((asssss, i) => {
    var 템플릿 =
        `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${asssss.title}</h5>
            <p>가격 : ${asssss.price}</p>
        </div>`;
    $('.row').append(템플릿);
})

$('#more').on('click', function () {
    $.get('https://codingapple1.github.io/js/more1.json').done(function (data) {
        //console.log(data);

        data.forEach((a, i) => {
            var 템플릿 =
                `<div class="col-sm-4">
                    <img src="https://via.placeholder.com/600" class="w-100">
                    <h5>${data[i].title}</h5>
                    <p>가격 : ${data[i].price}</p>
                </div>`;
            $('.row').append(템플릿);
        })
    })
})
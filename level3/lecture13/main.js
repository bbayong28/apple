
var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

//가격 낮은 순 정렬
$('#downprice').on('click', function () {
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
    });
});

//가격 높은 순 정렬
$('#upprice').on('click', function () {
    products.sort(function (a, b) {
        return b.price - a.price;
    });

    $('.row').html('');

    products.forEach((asssss, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${asssss.title}</h5>
                        <p>가격 : ${asssss.price}</p>
                    </div>`;
        $('.row').append(템플릿);
    });
});


//상품명 가나다 순
$('#downname').on('click', function () {
    products.sort(function (a, b) {
        if (a.title < b.title) {
            return -1
        } else {
            return 1
        }
        console.log(products)
    });
    $('.row').html('');

    products.forEach((asssss, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${asssss.title}</h5>
                        <p>가격 : ${asssss.price}</p>
                    </div>`;
        $('.row').append(템플릿);
    });
});

//상품명 다나가 순
$('#upname').on('click', function () {
    products.sort(function (a, b) {
        if (a.title > b.title) {
            return -1
        } else {
            return 1
        }
        console.log(products)
    });

    $('.row').html('');

    products.forEach((asssss, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${asssss.title}</h5>
                        <p>가격 : ${asssss.price}</p>
                    </div>`;
        $('.row').append(템플릿);
    });
});

//6만원 이하상품만 보기
$('#downlimit').on('click', function () {
    /* var newlimit = products.filter(function (a) {
        return a.price <= 60000
    }) */
    //화살표 함수
    var newlimit = products.filter((a) => a.price <= 60000);


    $('.row').html('');

    /*  newlimit.forEach((asssss, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${asssss.title}</h5>
                <p>가격 : ${asssss.price}</p>
            </div>`;
        $('.row').append(템플릿);
    }) */
    newlimit.forEach((asssss, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${newlimit[i].title}</h5>
                        <p>가격 : ${newlimit[i].price}</p>
                    </div>`;
        $('.row').append(템플릿);
    })
});

//6만원 이상 상품만 보기
$('#uplimit').on('click', function () {
    var newlimit = products.filter(function (a) {
        return a.price >= 60000
    })

    $('.row').html('');

    newlimit.forEach((asssss, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${asssss.title}</h5>
                <p>가격 : ${asssss.price}</p>
            </div>`;
        $('.row').append(템플릿);
    })
});



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
//var 어레이 = ['가', '다', '나'];
//return되는게 양수다 -> a 우측으로감
//return되는게 음수다 -> b 우측으로감
//'가', '다' 일 경우 return 양수
//'다', '나' 일 경우 return 음수
////문자 가나다 순 정렬하기
// 문자배열.sort();
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



//브라우저 안에 몰래 데이터 저장 가능
//


products.forEach((asssss, i) => {
    var 템플릿 =
        `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${asssss.title}</h5>
            <p>가격 : ${asssss.price}</p>
            <button class="buy">구매</button>
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
                    <button class="buy">구매</button>
                </div>`;
            $('.row').append(템플릿);
        });
        //localStorage.setItem('이름', 'kim');
    });
});
//localStorage 저장 법
localStorage.setItem('이름', 'kim');
//localStorage 출력 법
localStorage.getItem('이름');
//console 창에 localStorage.getItem('이름'); 치면 'kim'이라고 뜸.
//localStorage 삭제 법
localStorage.removeItem('이름');
//console 창에 localStorage.getItem('이름'); 치면 null 이라고 뜸.

//localStorage에 문자 / 숫자만 저장가능(array나 object 못 넣음)
//array와 object 저장 억지로 하려면?
//localStorage.setItem('num', [1, 2, 3]);  // [1,2,3]배열이 깨지고 강제로 문자로 바껴서 1,2,3으로 저장됨.

var arr = [1, 2, 3];
//array, object를 JSON으로 바꾸면 저장 가능 => JSON.stringify()
var newArr = JSON.stringify(arr);
localStorage.setItem('num', newArr) // 이렇게하면 배열이 깨지지않고 저장됨 [1,2,3]으로 저장됨
var 꺼낸거 = localStorage.getItem('num');
//JSON을 다시 array, object로 바꾸려면 => JSON.parse()
//JSON.parse(꺼낸거)
console.log(JSON.parse(꺼낸거))// [1,2,3]
//console.log(JSON.parse(꺼낸거)[0])// 1
//console.log(JSON.parse(꺼낸거)[1])// 2
//console.log(JSON.parse(꺼낸거)[2])// 3

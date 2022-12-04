
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
                <button class="buy">구매</button>
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
                <button class="buy">구매</button>
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
                <button class="buy">구매</button>
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
                <button class="buy">구매</button>
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
                <button class="buy">구매</button>
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
                <button class="buy">구매</button>
            </div>`;
        $('.row').append(템플릿);
    })
});


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



// 1. 구매버튼 누르면
// 2. 지금누른버튼 윗윗 글자를 가져와서
// 3. localStorage에[글자] 저장

//js
// document.querySelectorAll('.buy')[0].addEventListener('click', function (e) {
//     e.target.previousElementSibling.previousElementSibling
// })

//jquery
$('.buy').on('click', function (e) {
    //$(e.target).siblings('h5').html();
    var title = $(e.target).siblings('h5').text();

    // 이미 cart라는 항목이 있으면 수정하기 근데 그게 아니면 추가해주세요
    //if(cart라는 항목이 있으면){수정하기해주세요}else{추가해주세요}

    //이미 cart 항목이 있는지 판단하려면?  => console창에 localStorage.getItem('cart')쳐 보면 됨. 있으면 항목 뜨고 없으면 null 뜸
    //localStorage.getItem('cart') = localStorage.cart
    if (localStorage.getItem('cart') != null) {
        //수정하는 법 => localStorage에 있던 array 1. 꺼내서 2. 자료 추가하고 3. 다시 넣기
        //var 꺼낸거 = localStorage.getItem('cart')
        var 꺼낸거 = JSON.parse(localStorage.cart);
        //console.log((꺼낸거))
        꺼낸거.push(title);
        //console.log(꺼낸거);
        localStorage.setItem('cart', JSON.stringify(꺼낸거));
    } else {
        //JSON.stringify([title])
        localStorage.setItem('cart', JSON.stringify([title]));
    }




});

//이미 cart 항목 있으면 array를 수정해 주세요~
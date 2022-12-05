
var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

//가격 낮은 순 정렬
$('#downprice').on('click', function () {
    products.sort(function (a, b) {
        return a.price - b.price;
    })

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
    var newlimit = products.filter((a) => a.price <= 60000);

    $('.row').html('');

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

//과제1
// 1. 구매버튼 누르면
// 2. 지금누른버튼 윗윗 글자를 가져와서
// 3. localStorage에[글자] 저장

//js
// document.querySelectorAll('.buy')[0].addEventListener('click', function (e) {
//     e.target.previousElementSibling.previousElementSibling
// })

//jquery
//$('.buy').on('click', function (e) {
//    //$(e.target).siblings('h5').html();
//    var title = $(e.target).siblings('h5').text();
//
//    // 이미 cart라는 항목이 있으면 수정하기 근데 그게 아니면 추가해주세요
//    //if(cart라는 항목이 있으면){수정하기해주세요}else{추가해주세요}
//
//    //이미 cart 항목이 있는지 판단하려면?  => console창에 localStorage.getItem('cart')쳐 보면 됨. 있으면 항목 뜨고 없으면 null 뜸
//    //localStorage.getItem('cart') = localStorage.cart
//    if (localStorage.getItem('cart') != null) {
//        //수정하는 법 => localStorage에 있던 array 1. 꺼내서 2. 자료 추가하고 3. 다시 넣기
//        //var 꺼낸거 = localStorage.getItem('cart')
//        var 꺼낸거 = JSON.parse(localStorage.cart);
//        //console.log((꺼낸거))
//        꺼낸거.push(title);
//        //console.log(꺼낸거);
//        localStorage.setItem('cart', JSON.stringify(꺼낸거));
//    } else {
//        //JSON.stringify([title])
//        localStorage.setItem('cart', JSON.stringify([title]));
//    }
//});

//jquery
$('.buy').on('click', function (e) {
    //$(e.target).siblings('h5').html();
    var title = $(e.target).siblings('h5').text();
    if (localStorage.getItem('cart') != null) {
        var 꺼낸거 = JSON.parse(localStorage.cart);
        꺼낸거.push(title);
        localStorage.setItem('cart', JSON.stringify(꺼낸거));
    } else {
        localStorage.setItem('cart', JSON.stringify([title]));
    }
});


// array안 중복제거는?
// 상품을추가하기 전에 상품명이 이미 licalStorage에 있는지 검사

//아니면 같은 상품 구매 누르면 상품갯수가 올라가게?
//상품명을 localStorage에 저장시 갯수도 저장하면 됨
//['상품명a 2개', '상품명b 4개'...]이렇게 저장해도 되겟지만 여러 정보를 한곳에 넣고 싳으면 array/object 쓰면 됨.
// [{상품명:'A', 수량 : 1}{상품명:'B', 수량 : 2}........] 이렇게 저장해놓으면 편리할 듯.!
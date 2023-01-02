//상품진열 기능

let products = [];
let cart = [];


$.get('store.json').then((data) => {
    //원본데이터 다른데서 많이 쓰니까 변수에 보관
    products = data.products

    //페이지로드시 json데이터 가져와서 메인 페이지 내용 만들기
    data.products.forEach((a, i) => {
        $('.product-list').append(`
            <div class="col-md-3">
                <div class="item" draggable="true" data-id="${a.id}">
                    <img src="${a.photo}">
                    <h4>${a.title}</h4>
                    <h4>${a.brand}</h4>
                    <p>가격 : ${a.price}</p>
                    <button class="add" data-id="${a.id}">담기</button>
            </div>
          </div>`)
    });

    //담기버튼 누르면 일어날 일들
    $('.add').click(function (e) {

        //지금누른 상품번호 
        let productId = e.target.dataset.id;

        //담기버튼 누를 때 let cart = [] 에 상품을 {} 형태로 보관부터하고 

        //let cart에 상품이 이미있는지 찾고 없으면 let cart에 {}추가, 있으면 수량만 ++;
        let 몇번째 = cart.findIndex((a) => { return a.id == productId })

        if (몇번째 == -1) {
            let 현재상품 = products.find((a) => { return a.id == productId });
            현재상품.count = 1;
            cart.push(현재상품);
        } else {
            cart[몇번째].count++;
        }
        console.log(cart);

        //담기버튼 누를 때 마다 장바구니 박스 let cart 안에 있던 {} 갯수만큼 html 생성
        $('.basket').html('');
        cart.forEach((a, i) => {
            $('.basket').append(`
            <div class="col-md-3 bg-white">
                <img src="${a.photo}">
                <h4>${a.title}</h4>
                <h4>${a.brand}</h4>
                <p>${a.price}</p>
                <input type="number" value="${a.count}" class="item-count w-100">
            </div>
            `);
        });

        //총가격 계산해서 표기해주는 기능
        가격계산();

        //input값 조절해도 총가겨 계산해서 표기해줘야 될듯
        $('.item-count').on('input', function () {
            가격계산();
        });

    });// add 버튼 끝

    //.item 드래그로 장바구니에 추가기능

    $('.item').on('dragstart', function (e) {
        e.originalEvent.dataTransfer.setData('id', e.target.dataset.id)
    });

    $('.basket').on('dragover', function (e) {
        e.preventDefault();
    });

    $('.basket').on('drop', function (e) {
        let productId = e.originalEvent.dataTransfer.getData('id');
        console.log(productId);

        $('.add').eq(productId).click();

    });
});

//$.get().then()끝

//총가격 계산해서 표기해주는 기능

function 가격계산() {
    let finalPrice = 0;

    for (let i = 0; i < $('.item-count').length; i++) {
        var price = $('.item-count').eq(i).val();
        var count = $('.item-count').eq(i).siblings('p').text();
        finalPrice += parseFloat(price * count)
    }

    console.log('총 가격', finalPrice)
    $('.final-price').html('합계 ' + finalPrice)
}

//주문 누르면 뜨는 모달창, 영수증 기능 




//최하단 주문버튼 누르면 모달창1 띄우는 기능 
$('.buy').click(function () {
    $('.modal1').css('display', 'block')
});

//모달창1에 뭐 입력하면 전역변수에 저장해둠

let 성함 = '';
let 연락처 = '';

$('#name').on('input', function () {
    성함 = $('#name').val();
});
$('#phone').on('input', function () {
    연락처 = $('#phone').val();
});

//모달창1의 완료버튼 누르면 모달창2(영수증) 보여줌
//거기 안엔 canvas태그로 그림 그려줌

$('.show-receipt').click(function () {
    $('.modal1').css('display', 'none');
    $('.modal2').css('display', 'block');

    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');
    c.font = '16px dotum';
    c.fillText('구매자 : ' + 성함, 20, 30);
    c.fillText('연락처 : ' + 연락처, 20, 60);
    c.fillText($('.final-price').html(), 20, 90);
});


//검색기능

$('#search').on('input', function () {
    let 검색어 = $('#search').val();

    //지금 입력한 글자가 제목에 있으면 let products에서 검색어 있는 것만 남기기

    let newProducts = products.filter((a) => {
        return a.title.includes(검색어) || a.brand.includes(검색어)
    });

    $('.product-list').html('');
    newProducts.forEach((a, i) => {
        $('.product-list').append(`
            <div class="col-md-3">
                <img src="">
                <h4>${a.title}</h4>
                <h4>${a.brand}</h4>
                <p>가격 : ${a.price}</p>
                <button class="add" data-id="${a.id}">닫기</button>
            </div>
        `)
    });


    //jquery로 여러개 찾은건 each반복문 붙여야 잘됨

    $('.ㅔproduct-list h4').each(function (i, html요소) {
        let title = html요소.innerHTML;
        title = title.replace(검색어, `<span style="background : yellow">${검색어}</span>`);
        console.log(title);

        html요소.innerHTML = title;
    })

    //상품목록 다시 생성했으니 $('.add') 이벤트리스너도 다시 달아놔야할듯 
    //길어서 생략함 
    //$('.add') 이벤트리스너 안에 있는 코드랑 비슷할 것 같은데 함수로 만들어 재사용하든 하셈

});

//모달창 2개 닫기 기능

$('.close').click(function (e) {
    //그냥 2개 동시에 닫음
    $(e.target).parents('.modal1').css('display', 'none');
    $(e.target).parents('.modal2').css('display', 'none');
})


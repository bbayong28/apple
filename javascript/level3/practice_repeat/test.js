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
                <button class="add" data-id"${a.id}">담기</button>
            </div>
        </div>`)
    });

    //담기버튼 누르면 일어날 일들
    $('.add').on('click', function (e) {

        //지금누른 상품번호
        let productId = e.target.dataset.id;

        //담기버능 누를 때 let cart = []에 상품을 {}형태로 보관부터하고

        //let cart에 상품이 이미있는지 찾고 없으면 let cart에 {}추가, 있으면 수량만++;
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
        $('.basket').append(`
            <div class="col-md-3 bg-white">
                <img src="${a.photo}">
                <h4>${a.title}</h4>
                <h4>${a.brand}</h4>
                <p>${a.price}</p>
                <input type="number" value="${a.cart}">
            </div>
        `)



    })

















    //html안에 basket이라는 클래스를 가진것
    $('.basket').html('');
    cart.forEach((a, i) => {
        `
        
    
        `})



})
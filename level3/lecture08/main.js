var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

//console.log(products);

//js
//document.querySelectorAll('.card-body h5')[0].innerHTML = '상품명 : ' + products[0].title
//document.querySelectorAll('.card-body p')[0].innerHTML = `가격 : ${products[0].price}`
//document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title
//document.querySelectorAll('.card-body p')[1].innerHTML = products[1].price
//document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title
//document.querySelectorAll('.card-body p')[2].innerHTML = products[2].price

//jquery
//$('.card-body h5').eq(0).html(`상품명 : ${products[0].title}`)
//$('.card-body p').eq(0).html(`가격 : ${products[0].price}`)
//$('.card-body h5').eq(1).html(`상품명 : ${products[1].title}`)
//$('.card-body p').eq(1).html(`가격 : ${products[1].price}`)
//$('.card-body h5').eq(2).html(`상품명 : ${products[2].title}`)
//$('.card-body p').eq(2).html(`가격 : ${products[2].price}`)

for (let i = 0; i < $('.card-body h5').length; i++) {
    //$('.card-body h5').eq(i).html(products[i].title)
    //$('.card-body p').eq(i).html(products[i].price)
    $('.card-body h5').eq(i).html(`상품명 : ${products[i].title}`)
    $('.card-body p').eq(i).html(`가격 : ${products[i].price}`)
}
var a = '안녕';
console.log(`${a} 만나서 반가워`)
console.log( a + ' 만나서 반가워')

//ajax로 GET요청하는 법
//$.get('url~~~~')
//$.get('https://codingapple1.github.io/hello.txt') //이라고 불러오지만 숨겨져 있음
//done(function(){}) : 다 불러오고 나서 실행할 함수
//$.get('https://codingapple1.github.io/hello.txt').done(function(){
//    console.log('done')
//})
//숨겨진 데이터는 어디에 저장 되어잇냐  => 파라미터에!
$.get('https://codingapple1.github.io/hello.txt').done(function(data){
    console.log(data) //'안녕하세요 반갑습니다요.'   
})

// url을 잘못입력하거나 인터넷이 끊겼거나 하면 ajax요청이 실패할 수도 있음.
//실패시 특정코드 실행하고 싶으면 fail(function(){}) 적으면 실패했을때 fail안의 콜백함수가 실행됨
$.get('https://codingapple1.github.io/hello.txt').done(function(data){
    console.log(data) //'안녕하세요 반갑습니다요.'   
}).fail(function () {
    console.log('실패함!')
})

$.get('https://codingapple1.github.io/price.json').done(function (data) { 
    //console.log(data.price)
    console.log(data)
}).fail(function () {
    console.log('실패함!')
})

// ajax로 POST요청하는 법
// $.post('url~~~~')
// 보낼 데이터를 두번째 파라미터에!
//post 요청을 처리해줄 서버가 없기 때문에 일단 post 주석으로 하고 get으로 해봄
//$.post('https://codingapple1.github.io/hello.txt', {name : 'kim'}).//done(function(data){
//    console.log(data) //'안녕하세요 반갑습니다요.'
//})


//js
//fetch써도 ajax가능
fetch('https://codingapple1.github.io/price.json').then(res => res.json()).then(data => {
        console.log(data)
    }).catch(error => { 
        console.log(error)
    })
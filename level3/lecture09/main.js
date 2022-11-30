var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

//내가 한 방법
//$('.row').eq(0).append('<div class="col-sm-4">')
//$('.col-sm-4').eq(0).append('<img src="https://via.placeholder.com/600" class="w-100">')
//$('.col-sm-4').eq(0).append(`<h5>${products[0].title}</h5>`)
//$('.col-sm-4').eq(0).append(`<p>가격 : ${products[0].price}</p>`)
//$('.row').eq(0).append('<div class="col-sm-4">')
//$('.col-sm-4').eq(1).append('<img src="https://via.placeholder.com/600" class="w-100">')
//$('.col-sm-4').eq(1).append(`<h5>${products[1].title}</h5>`)
//$('.col-sm-4').eq(1).append(`<p>가격 : ${products[1].price}</p>`)
//$('.row').eq(0).append('<div class="col-sm-4">')
//$('.col-sm-4').eq(2).append('<img src="https://via.placeholder.com/600" class="w-100">')
//$('.col-sm-4').eq(2).append(`<h5>${products[2].title}</h5>`)
//$('.col-sm-4').eq(2).append(`<p>가격 : ${products[2].price}</p>`)


var 템플릿 =
    `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[0].title}</h5>
        <p>가격 : ${products[0].price}</p>
    </div>`;
    $('.row').append(템플릿)
var 템플릿 =
    `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[1].title}</h5>
        <p>가격 : ${products[1].price}</p>
    </div>`;
    $('.row').append(템플릿)
var 템플릿 =
    `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[2].title}</h5>
        <p>가격 : ${products[2].price}</p>
    </div>`;
    $('.row').append(템플릿);

products.forEach((data, i)=>{
    `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
    </div>`;
    $('.row').append(템플릿);


})
    


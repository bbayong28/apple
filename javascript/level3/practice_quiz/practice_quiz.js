//$.getJSON("store.json", function (data) {
//  console.log(data.products[0].title);
//
//});

let products = [];
let cart = [];

$.get('store.json').then((data) => { 
  products = data.products
})
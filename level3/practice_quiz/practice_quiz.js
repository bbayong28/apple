
//https://www.delftstack.com/ko/howto/javascript/load-json-file-in-javascript/
//블로그 방법 1
//fetch("./students.json").then(response => {
//  return response.json();
//}).then(jsondata => console.log(jsondata));
//블로그 방법 2
//const jsonData= require('./students.json'); 
//console.log(jsonData);


$.getJSON("store.json", function (data) {
  console.log(data.products[0].title);

});
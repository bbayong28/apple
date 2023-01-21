const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.get('/', function (요청, 응답) { 
  응답.sendFile(path.join(__dirname, '리액트로 만든 html파일 경로'))
})




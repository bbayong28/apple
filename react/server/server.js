const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

//이거 추가해놔야 ajax 잘됨
app.use(express.json());
var cors = require('cors');
app.use(cors());


//이거 추가해줘야 밑에 코드 실행됨.
app.use(express.static(path.join(__dirname, 'react_server/build')))

//이거 쓰고 싶으면 위에 한 줄 추가해줘야함
app.get('/', function (요청, 응답) {   
  응답.sendFile(path.join(__dirname, 'react_server/build/index.html'))
})

//예 - DB에 있던 상품명을 보여주려면?
//리액트 파일에서 상품데이터 필요하면 /product로 GET 요청하면 끝
//근데 이거 쓰려면 위에 세 줄 추가해놔야함.
app.get('/product', function (요청, 응답) {   
  응답.json({name : 'black shoes'})
})


//리액트 라우터 쓰는경우 추가해야할 문법
//유저가 주소창에 이상한 경로를 입력했을 때, 서버에 기능 개발이 안되어 있으면 리액트로 만든 html 페이지 보여줘라.

app.get('*', function (요청, 응답) { 
  응답.sendFile(path.join(__dirname, 'react_server/build/index.html'))
})









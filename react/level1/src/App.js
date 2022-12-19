/* eslint-disable */
//터미널 WARNING message끄는 거

import './App.css';
import { useState } from 'react'

function App() {
  //자료 잠깐 저장할 땐 변수
  //let post = '강남 우동 맛집';
  //react에서 state 써도 됨
  let post = '강남 우동 맛집';
  //b는 state 변경을 도와주는 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  const [like, setLike] = useState(0);




  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>


      <button onClick={() => {
        /* 
        글제목변경('???') ???로 기존 state를 갈아 치워 줌 
        */
        /* 
        글제목변경('여자코트추천') 이렇게 하면 될거같지만 안됨 useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']) => useState('여자코트추천')으로 변해서 글제목[0]으로하면 '여'만 나오는 대참사가 일어남 
        */
        /* 
        글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']); 그래서 이렇게 해야하는데 이러면 확장성이 없음. 지금은 배열이 3개지만 만약 100개가 되면 하나때문에 100개 붙여넣기 해야하잖음? => 비효율적 
        */
        /* 
        글제목[0] = '여자 코트 추천';
        글제목변경(글제목); 
        이렇게 해도 되지만 이건 글제목[0]을 영구적으로 수정해버림=> 원본 수정됨
        array/object 다룰 때 원본은 보존하는게 좋음(but 난 이렇게 했을 때 안됨)
        글제목[0] = '여자 코트 추천';
        글제목변경([...글제목]);
        이렇게 하니까 됨.
        */
        /* 
        let copy = 글제목;
        copy[0] = '여자 코트 추천'
        글제목변경(copy) 
        이렇게 원본 변형 안시키려고 copy를 하나만들어줌
        될거같지만 이것도 안됨
        */
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy)
      }}>
        글수정</button>


      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { setLike(like + 1) }}>👍🏻</span> {like} </h4>
        <p>12월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>12월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>12월 16일 발행</p>
      </div>
    </div >
  );
}


export default App;


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

      {/*   
      <button onClick={() => {
        글제목[0] = '여자 코트 추천';
        글제목변경(글제목)
      }}>글수정</button> 
      
      (참고)
      array/object 다룰 때 원본은 보존하는게 좋음.
      글제목[0] = '여자 코트 추천'; 이렇게하면 영구적으로 수정해버린 것.
      */}
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        console.log(copy == 글제목)
        글제목변경(copy);
      }}>글수정</button>

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

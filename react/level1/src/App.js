/* eslint-disable */
//터미널 WARNING message끄는 거

import './App.css';
import { useState } from 'react'
import Modal from './Modal';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  const [like, setLike] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let organize = [...글제목];
        organize.sort();
        //console.log(organize.sort())
        글제목변경(organize);
      }}>정렬버튼</button>


      <button onClick={() => {
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
      {/* <Modal></Modal> */}
      <Modal />



    </div >
  );
}

/* function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
} 

const Modal = () =>{
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}*/


export default App;


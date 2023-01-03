/* eslint-disable */
//터미널 WARNING message끄는 거

import './App.css';
import { useState } from 'react'
import Modal from './Modal';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['한식 맛집 리뷰', '중식 맛집 리뷰', '양식 맛집 리뷰']);
  const [like, setLike] = useState([0,0,0]);
  const [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>맛집 리뷰</h4>
      </div>

      <button onClick={() => {
        let organize = [...글제목];
        organize.sort();
        글제목변경(organize);
      }}>정렬버튼</button>


      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
      }}>글수정</button>

      
      {
        글제목.map(function (a, i) { 
          return (
            <div className="list" key={i}>
              {/* <h4>{글제목[i]} <span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1
                setLike(copy)
              }}>👍🏻</span> {like[i]}</h4> */}
              <h4 onClick={() => { setModal(!modal) }}>{글제목[i]}</h4>
              <p>12월 16일 발행</p>
            </div>
          )
        })
      }

      
      {
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경} /> : null 
        
      }



    </div >
  );
}




export default App;


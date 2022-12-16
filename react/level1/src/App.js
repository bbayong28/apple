import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  //자료 잠깐 저장할 땐 변수
  //let post = '강남 우동 맛집';
  //react에서 state 써도 됨
  let post = '강남 우동 맛집';
  //b는 state 변경을 도와주는 함수
  //let [글제목a, a] = useState('남자 코트 추천')
  //let [글제목b, b] = useState('강남 우동 맛집')
  //let [글제목c, c] = useState('파이썬 독학')
  let [글제목d, d] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])



  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/*       <div className="list">
        <h4>{글제목a}</h4>
        <p>12월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목b}</h4>
        <p>12월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목c}</h4>
        <p>12월 16일 발행</p>
      </div> */}
      <div className="list">
        <h4>{글제목d[0]}</h4>
        <p>12월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목d[1]}</h4>
        <p>12월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목d[2]}</h4>
        <p>12월 16일 발행</p>
      </div>
    </div>
  );
}

export default App;

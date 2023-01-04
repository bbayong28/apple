/* eslint-disable */
//터미널 WARNING message끄는 거

import './App.css';
import { useState } from 'react'
import Modal from './Modal';

function App() {
  //자료 잠깐 저장할 땐 변수
  //let post = '강남 우동 맛집';
  //react에서 state 써도 됨
  let post = '강남 우동 맛집';
  //b는 state 변경을 도와주는 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [입력값, 입력값변경] = useState('');

  //1이 3번찍힘
  [1, 2, 3].map(function () {
    console.log(1)
  })

  //1,2,3이 찍힘  
  [1, 2, 3].map(function (a) {
    console.log(a)
  })



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
        
        이유
        
        state 변경함수의 특징
        여기서 기존state => 글제목, 신규state => copy
        - 검사를 한 번 거쳐 기존state == 신규state의 경우 변경 안해줌.(같은데 굳이?, 에너지 낭비 줄일려고)
        
        array/object의 특징
        let arr = [1,2,3]; // 변수만들고 array 데이터를 저장함.
        js에서는 1,2,3이라는 array를 arr에 집어넣어주세요가 아니라 1,2,3이라는 array를  미지의 공간에 저장을 해놓고 어디에 저장햇는지 화살표만! 저장됨
        따라서 1,2,3이라는 array는 RAM이라는 미지의 공간에 저장되어 있고 벼누안에는 1,2,3이 어딨는지 알려주는 화살표만 들어있음
        
        let arr = [1,2,3]
        글제목[0]='여자 코트 추천';
        글제목변경(글제목);
        기존 state => 글제목 , 변경 state => 글제목
        글제목에 저장되어 있던 화살표 바뀐적 없음. 그래서 기존 state == 변경 state 라고 생각함. 변경 안됨.

        let copy = 글제목; // 이 변수(글제목)에 저장되어있던건 화살표밖에 없음 따라서 copy에 let 글제목 에 있던 화살표가 복사됨.
        copy[0] = '여자 코트 추천'  // 그래서 카피 안을 수정해도 copy 안에 들어있던 화살표는 전혀 바뀌지 않음
        글제목변경(copy);
        변수1 & 변수2 화살표가 같으면 변수1 == 변수2 비교하면 true나옴.(console.log(copy == 글제목) 이라고하면 true 라고 나옴.)
        그래서 copy는 기존 state와 달라지지 않았다고 생각함.
        array, object는 reference data type이라서 그럼 궁금하면 찾아보기*/
        /*
        let copy = [...글제목]; // 새로운 화살표로 저장됨
        copy[0] = '여자 코트 추천'
        글제목변경(copy)
        [...]은 spread 문법 : 괄호 벗겨주세요 (이러면 화살표도 달라짐.)
        let copy = [...글제목]; // 새로운 화살표로 저장됨 그래서 이후 밑밑줄에서  "글제목변경(copy)" 를 새로운 state구나로 인식함. 그래서 state변경이 잘됨.
        
        빡대가리식 정리
        기존 state가 array, object면 독립적 카피본을 만들어서 수정해야 함.
        기존 state가 array, object면 shallow copy, deep copy를 만들어서 수정해야 함. => 이런 카피본을 shallow copy,  copy라고 함
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
        <h4 onClick={() => { setModal(!modal) }}>{글제목[2]}</h4>
        <p>12월 16일 발행</p>
      </div>

      {/* 반복되는 html 구조 */}
      {/* 
        [1,2,3,4] 는 하드코딩임 
        실제 블로그 글 갯수만큼 html 생성하려면? 

        [1, 2, 3, 4].map(function () { 
          return (
            <div className="list">
              <h4>{글제목[1]}</h4>
              <p>12월 16일 발행</p>
            </div>
          )
        });

        글제목.map(function () { 
          return (
            <div className="list">
              <h4>{글제목[1]}</h4>
              <p>12월 16일 발행</p>
            </div>
          )
        });

        */
/*         글제목.map(function (a) {
          return (
            <div className="list">
              <h4>{a}</h4>
              <p>12월 16일 발행</p>
            </div>
          )
        }) */


/*      
        각각따봉수 올릴 때
        글제목.map(function (a, i) { 
          return (
            <div className="list" key={i}>
              <h4>{글제목[i]} <span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1
                setLike(copy)
              }}>👍🏻</span> {like[i]}</h4>
              <p>12월 16일 발행</p>
            </div>
          )
        }) 
        
*/}


      {
        /* 모달에 배경색 넣을 때 */
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal) }}>{글제목[i]}</h4>
              <p>12월 16일 발행</p>
            </div>
          )
        })
      }

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(true); setTitle(i) }}>{글제목[i]} <span onClick={(e) => {
                e.stopPropagation()
                let copy = [...like];
                copy[i] = copy[i] + 1
                setLike(copy)
              }}>👍🏻</span> {like[i]}</h4>
              {/* <h4 onClick={() => { setModal(!modal); setTitle(i) }}>{글제목[i]} <span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1
                setLike(copy)
              }}>👍🏻</span> {like[i]}</h4> */}
              <p>12월 16일 발행</p>
              {/* <button onClick={() => {
                let copy = [...글제목]
                copy.splice(0, 1)
                글제목변경(copy)
              }}>삭제</button> */}
              <button onClick={() => {
                let copy = [...글제목]
                copy.splice(i, 1)
                글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }


      {/*       
      <input onChange={(e) => { console.log(e.target.value) }} /> 
      */}

      {/*}
      <input onChange={(e) => { 입력값변경(e.target.value) }} />
      */}

      <input onChange={(e) => {
        입력값변경(e.target.value);
        console.log(입력값);
      }} />


      {/* <button onClick={() => { setTitle(0) }}>글제목0</button>
      <button onClick={() => { setTitle(1) }}>글제목1</button>
      <button onClick={() => { setTitle(2) }}>글제목2</button> */}




      {
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경} title={title} /> : null

      }





      {/* <Modal></Modal> */}
      {/* <Modal /> */}

      {
        /* modal == true ? <Modal/> : '' */
        modal == true ? <Modal /> : null /* null은 비어있는 html용으로 자주 사용 */

      }






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
const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
      props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬독학'])
      }>글수정</button>
    </div>
  )
}


const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목]
        copy[0] = '여자 코트 추천'
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  )
}


}*/


export default App;


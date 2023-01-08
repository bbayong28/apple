/* eslint-disable */
//터미널 WARNING message끄는 거

import { useState } from 'react';
import './App.css';

/* App */
function App() {

  let [title, setTitle] = useState(['탑건:매버릭 리뷰', '육사오 리뷰', '아바타2 리뷰']);
  //like를 하나만 넣을 때
  //let [like, setLike] = useState(0);
  //like를 여러개 넣을 때
  let [like, setLike] = useState([0, 0, 0]);
  let [hi, setHi] = useState('안녕');
  let [modal, setModal] = useState(false);
  let [date, setDate] = useState(['2022.06.22', '2022.08.24', '2022.12.14']);
  let [mtitle, setMtitle] = useState(0);
  let [mdate, setMdate] = useState(0);
  let [input, setInput] = useState('')
  

  return (
    <div className="App">
      <div className='header'>
        {/* <h4 style={{color:'blue', fontSize:'16px'}}>Review</h4> */}
        <h4>Movie Diary</h4>
      </div>
      <div className='buttons'>

        <button onClick={() => { 
          let copy = [...title]
          copy[0] = '닥터스트레인지 리뷰'
          setTitle(copy);
          let datecopy = [...date]
          datecopy[0] = '2022.08.01'
          setDate(datecopy);
        }}> 글 변경 </button>

        <button onClick={() => { 
          let copy = [...title]
          copy.sort();
          setTitle(copy);
        }}>가나다순 정렬</button>

      </div>

      <div className="lists">     
        {
          title.map((a, i) => {
            return (
              <div className='list' key={i}>
                {/*
                  이렇게(!modal)하면 토글됨
                  <h4 onClick={() => { setModal(!modal) }}>  
                 */}
                <h4 onClick={() => {
                  setModal(true);
                  setMtitle(i);
                  setMdate(i);
                }}> 
                  {title[i]}
                  <span onClick={(event) => {
                    event.stopPropagation();
                    //like 하나 일때 이렇게하면 되지만 여려개일 때 이렇게하면 like숫자가 하나누르면 다른 like숫자도 같이 올라감
                    //setLike(like + 1);                    
                    //여러개일 때 이렇게하면 like숫자가 각자 올라감
                    let likecopy = [...like]
                    likecopy[i] = likecopy[i] + 1
                    setLike(likecopy);
                  }}>
                    👍🏻
                  </span>
                  {like[i]}
                </h4>
                <p>{date[i]}</p>
                <button onClick={() => { 
                  let copy = [...title]
                  //0번째 배열부터 1개씩 삭제
                  //copy.splice(0, 1)
                  //1번째 배열부터 1개씩 삭제
                  //copy.splice(1, 1)
                  //2번째 배열부터 1개씩 삭제
                  //copy.splice(2, 1)
                  //copy에서 원하는 자료 삭제(= 내가 클릭한것 삭제)
                  copy.splice(i, 1)
                  setTitle(copy)
                }}>삭제</button>
              </div> 
            )
          })
        }

        {/*
          <input onChange={(e) => { console.log(e.target.value)}} /> 
        */}
        <div className='add'>
          <input onChange={(e) => {
            setInput(e.target.value);
            /* console.log(input) */
          }} />
          <button onClick={() => { 
            let copy = [...title]
            //copy 맨 처음 위치에 유저가 입력한 글 추가
            copy.unshift(input);
            setTitle(copy);
          }}>추가</button>
        </div>
      


        {/* 
        <button onClick={() => { setMtitle(0) }}>글제목0</button>
        <button onClick={() => { setMtitle(1) }}>글제목1</button>
        <button onClick={() => { setMtitle(2) }}>글제목2</button>
        */}


        
        {/* <div className='list'>
          <h4 onClick={()=> { setModal(!modal) }}>
            {title[0]} <span onClick={() => { setLike(like+1) }}>👍🏻</span> {like}
          </h4>
          <p>2022.06.22</p>
        </div>
        <div className='list'>
          <h4>{title[1]} <span onClick={() => { setHi('반가워') }}>👋🏻</span> {hi}</h4>
          <p>2022.08.24</p>
        </div>
        <div className='list'>
          <h4>{ title[2] }</h4>
          <p>2022.12.14</p>
        </div> */}


      </div>

      {/* <Modal title={title} /> */}
      {
        /* 다양한 색의 모달창이 필요할 때  
        modal == true ? <Modal title={title} color={'skyblue'}></Modal> : null
        props 보낼때 문자, 숫자, 함수명 등등등... 가능
        modal == true ? <Modal title={title} color="0" ></Modal> : null
        modal == true ? <Modal title={title} color="skyblue" ></Modal> : null
        */
        modal == true ? <Modal title={title} setTitle={setTitle} mtitle={mtitle} date={date} mdate={mdate}></Modal> : null
      }
      <Last/>

    </div>
  );
}






/* Modal */
function Modal(props) { 
  return (
    /* 
    모달창 배경 pink로 바꾸고 싶을 때 
    <div className='modal' style={{ background: 'pink' }}>
    다양한 색의 모달창이 필요할 때 
    <div className='modal' style={ {background: props.color} }>
    */
    <div className='modal'>
      <h4>{props.title[props.mtitle]}</h4>
      <p>상세 리뷰</p>
      <strong>{ props.date[props.mdate] }</strong>
      <button onClick={() => { 
        //props.setTitle(['닥터스트레인지 리뷰', '육사오 리뷰', '아바타2 리뷰'])
        let copy = [...props.title]
        copy[0] = '닥터스트레인지 리뷰'
        props.setTitle(copy)
      }} >글수정</button>
    </div>
  )
}





/* Last */
function Last() { 
  return (
    <div className='last'>
      <p>리뷰어의 개인적 의견입니다.</p>
      <p>문의 사항이 있으신 분은 abccc@naver.com로 메일주세요.</p>
    </div>
  )
}

export default App;

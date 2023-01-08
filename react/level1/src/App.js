/* eslint-disable */
//터미널 WARNING message끄는 거

import { useState } from 'react';
import './App.css';

/* Modal */
function App() {

  let [title, setTitle] = useState(['탑건:매버릭 리뷰', '육사오 리뷰', '아바타2 리뷰']);
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
                <h4 onClick={() => {
                  setModal(true);
                  setMtitle(i);
                  setMdate(i);
                }}> 
                  {title[i]}
                  <span onClick={(event) => {
                    event.stopPropagation();
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
                  copy.splice(i, 1)
                  setTitle(copy)
                }}>삭제</button>
              </div> 
            )
          })
        }

        <div className='add'>
          <input onChange={(e) => {
            setInput(e.target.value);
          }} />
          <button onClick={() => { 
            let copy = [...title]
            copy.unshift(input);
            setTitle(copy);
          }}>추가</button>
        </div>
      
      </div>

      
      {
        modal == true ? <Modal title={title} setTitle={setTitle} mtitle={mtitle} date={date} mdate={mdate}></Modal> : null
      }
      <Last/>

    </div>
  );
}


/* Modal */
function Modal(props) { 
  return (
    <div className='modal'>
      <h4>{props.title[props.mtitle]}</h4>
      <p>상세 리뷰</p>
      <strong>{ props.date[props.mdate] }</strong>
      <button onClick={() => { 
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

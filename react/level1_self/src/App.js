/* eslint-disable */

import { useState } from 'react';
import './App.css';


function App() {

  let [title, setTitle] = useState(['탑건:매버릭 리뷰', '육사오 리뷰', '아바타2 리뷰']);
  let [like, setLike] = useState(0);
  let [hi, setHi] = useState('안녕');
  let [modal, setModal] = useState(false);
  let [date, setDate] = useState(['2022.06.22', '2022.08.24', '2022.12.14']);
  

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
                <h4 onClick={() => { setModal(!modal) }}> 
                {title[i]}
                  <span onClick={(event) => {
                    event.stopPropagation();
                    setLike(like + 1);
                  }}>
                    👍🏻
                  </span>
                  {like}
                </h4>
                <p>{date[i]}</p>
              </div> 
            )
          })
        }




        
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
        modal == true ? <Modal title={title}></Modal> : null
      }
      <Last></Last>

    </div>
  );
}


function Modal(props) { 
  return (
    <div className='modal'>
      <h4>{props.title[0]}</h4>
      <p>상세 리뷰</p>
      <strong>날짜</strong>
    </div>
  )
}

function Last() { 
  return (
    <div className='last'>
      <p>리뷰어의 개인적 의견입니다.</p>
      <p>문의 사항이 있으신 분은 abccc@naver.com로 메일주세요.</p>
    </div>
  )
}

export default App;

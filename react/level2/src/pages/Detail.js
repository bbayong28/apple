import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = (props) => {

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id
  });
  let [count, setCount] = useState(0);
  let [popup, setPopup] = useState(true);
  let [num, setNum] = useState('')

  useEffect(() => { 
    let a = setTimeout(() => { setPopup(false) }, 2000)
    return () => {
      clearTimeout(a)
    }
  }, [])
  
  useEffect(() => { 
    if (isNaN(num) == true){ 
      alert('숫자를 입력하세요.');
    }
  }, [num])
  
  return (
    <div className="container">      
      {
        popup == true
          ? <div className='alert alert-warning'>2초이내 구매시 할인</div>
          : null
      }
      {count}
      <button onClick={() => { setCount(count + 1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <input onChange={(e) => { setNum(e.target.value) }}/>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

const Detail = (props) => {

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id
  });
  let [count, setCount] = useState(0);
  let [popup, setPopup] = useState(true);
  let [num, setNum] = useState('')
  let [tab, setTab] = useState(0)

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


      {/* 탭만들기 */}
      <Nav variant="tabs"  defaultActiveKey="link0">
      <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
      </Nav.Item>
      </Nav>
      <Tabcontent tab={tab} />


    </div> 
  )
}

function Tabcontent (props) { 
  return  [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>] [props.tab]
} 



export default Detail;
import React, { useContext, useEffect, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
//import { Context1 } from '../App';
import { addItem } from '../state/store';
import { useDispatch } from 'react-redux';

const Detail = (props) => {

  //let { 재고 } = useContext(Context1);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(x => x.id == id);
  let [count, setCount] = useState(0);
  let [popup, setPopup] = useState(true);
  let [num, setNum] = useState('')
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('');


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

  useEffect(() => {
    setFade2('end')
    return () => { 
      setFade2('')  
    }
  }, [])


  let dispatch = useDispatch();
  








  
  return (
    <div className={'container start ' + fade2}>      
      
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
          <button className="btn btn-danger" onClick={() => { 
            //dispatch(addItem( {id : 1, name : 'Red Knit', count :1} ))
            dispatch(addItem( {id : 찾은상품.id, name : 찾은상품.title, count : 찾은상품.count} ))
          }}>주문하기</button> 
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

function Tabcontent({ tab }) { 
  
  //let { 재고 } = useContext(Context1);
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => { setFade('end') }, 200);    
    return () => { 
      setFade('')
    }
  }, [tab])
  
  
  return (
    <div className={'start ' + fade}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
} 



export default Detail;
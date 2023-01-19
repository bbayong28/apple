import React, { useContext, useEffect, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
//import styled from 'styled-components';
//import { Context1 } from '../App';
import { addItem } from '../state/store';
import { useDispatch } from 'react-redux';

//옛날 갈고리 다는 법
//class Detail2 extends React.Component { 
//  conponentDidMount() { 
//    //컴포넌트 mount시 여기 코드 실행됨
//  }
//  conponentDidUpdate() { 
//    //컴포넌트 mount시 여기 코드 실행됨
//  }
//  conponentDidUnmount() {
//    //컴포넌트 mount시 여기 코드 실행됨
//  }
//}

/*
let YellowBtn = styled.button`
    background : ${ props => props.bg };
    //배경이 파란색이면 글자색 흰색으로, 배경이 파란색이 아니면 글자색 검정색으로(간단한 프로그래밍 가능)
    color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding:10px;
`

let NewBtn = styled(YellowBtn)`
  font-size: 25px;
`
*/

/* let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : black;
    padding:10px;
` */
/*
  노란 버튼
  let YellowBtn = styled.button`
      background : yellow;
      color : black;
      padding:10px;
  `
  오렌지색 버튼
  let OrnageBtn = styled.button`
      background : orange;
      color : black;
      padding:10px;
*/


/* let Box = styled.div`
  background: grey;
  padding: 20px;
` */


const Detail = (props) => {

/* 
  for (var i = 0; i < 10000; i++) {
    console.log(1);
  } */
  
  // useContext(Context1);
  //let a = useContext(Context1);
  let { 재고 } = useContext(Context1);

  let { id } = useParams();
  //console.log(id);  
  //let 찾은상품 = props.shoes.find(function (x) { return x.id == id });
  let 찾은상품 = props.shoes.find(x => x.id == id); 
  let [count, setCount] = useState(0);
  let [popup, setPopup] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState('');
  let [fade2, setFade2] = useState('');
  let dispatch = useDispatch();


  
  useEffect(() => { 
    /* mount, update 시 여기 코드 발생 */
    //console.log('안녕');
    /* for (var i = 0; i < 10000; i++) {
      console.log(1);
    } */
    /* setTimeout(() => { setAlert(false) }, 2000)
    },[]) */
    let a = setTimeout(() => { setAlert(false) }, 2000)
    //console.log(2)
    return () => {
      //console.log(1)
      clearTimeout(a)
    }      
  })

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
  
  useEffect(() => { 
    //누가 Detail 페이지 접속하면 
    //그 페이지에 보이는 상품 id 가져와서 
    //localStorage에 watched s항s목에 추가해줘

  }, [])


  useEffect(() => { 
    //누가 Detail 페이지 접속하면 
  }, [])
  
  useEffect(() => { 
    //그 페이지에 보이는 상품 id 가져와서 
    console.log(찾은상품.id);
  }, [])
  
  useEffect(() => { 
  //localStorage에 watched 항목에 추가해줘
  //localStorage.setItem('watched', JSON.stringify[찾은상품.id])
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)
    //중복 제거위해 Set() 사용
    꺼낸거 = new Set(꺼낸거)
    //set에 넣은거 빼기
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])
















  return (
    <div className={'container start ' + fade2}>    
      {/* 
      <Box>
        <YellowBtn>버튼</YellowBtn>
      </Box> 
      */}
      {/* <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      <NewBtn>버튼</NewBtn> */}      
      {
      alert == true ? <div className='alert alert-warning'>2초이내 구매시 할인</div> : null
      }
      {count}
      <button onClick={() => { setCount(count + 1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          {/* 
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>  
          */}
          <input onChange={(e) => { setNum(e.target.value) }}/>
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          {/* <p>{ 재고 }</p>
          <p>{ 재고[0] }</p> */}
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
      <Tabcontent tab={tab} shoes={props.shoes}/>
    </div> 
  )
}


//function Tabcontent(props) { 
//  if (props.tab == 0) {
//    return <div>내용0</div>
//  }
//  if (props.tab == 1) {
//    return <div>내용1</div>
//  }
//  if (props.tab == 2) {
//    return <div>내용2</div>
//  }
//}


/* function Tabcontent (props) { 
  return (
    <div className='start'>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
    </div>
  )
}  */
//props 안가져오고 props명 가져올 때 {props명}
//버튼0,버튼1,버튼2를 누를때마다 end 붙이면 되는데 그럼너무 코드가 지저분해짐. 그래서 tab state가 변할 때 end 부착하도록 함.
function Tabcontent({ tab, shoes }) {
  
  //let { 재고 } = useContext(Context1);

  let [fade, setFade] = useState('');

  //useEffect(() => {
  //  setTimeout(() => { setFade('end') }, 200)    
  //  return () => { 
  //    setFade('')
  //  }
  //}, [tab])
  
  useEffect(() => {
    let a = setTimeout(() => { setFade('end') }, 200)    
    return () => {      
      clearTimeout(a);
      setFade('')
    }
  }, [tab])



  return (
    /* <div className={ 'start ' + fade }> */
    /* <div className={`start ${fade}`}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div> */
    //<div className={'start ' + fade}>
    //{[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    //</div>
    <div className={'start ' + fade}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
} 


export default Detail;
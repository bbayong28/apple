import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//import styled from 'styled-components';

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
  
  let { id } = useParams();
  //console.log(id);  
  let 찾은상품 = props.shoes.find(x => x.id == id)
  //let 찾은상품 = props.shoes.find( function (x) { return x.id == id })  
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(ture);

    useEffect(() => { 
    /* mount, update 시 여기 코드 발생 */
    //console.log('안녕');
    /* for (var i = 0; i < 10000; i++) {
      console.log(1);
    } */
    /* setTimeout(() => { setAlert(false) }, 2000)
    },[]) */
      let a = setTimeout(() => { setAlert(false) }, 2000)
      console.log(2)
      return () => {
        console.log(1)
        clearTimeout(a)
      }
      
    })

  return (
    <div className="container">
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
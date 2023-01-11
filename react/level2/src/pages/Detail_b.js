import React from 'react'
import { useParams } from 'react-router-dom';
//import styled from 'styled-components';

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


let Detail = (props) => {

  let { id } = useParams();
  //console.log(id);
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id
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
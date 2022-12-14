import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    //배경이 파란색이면 글자색 흰색으로, 배경이 파란색이 아니면 글자색 검정색으로
    color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding:10px;
`

let NewBtn = styled(YellowBtn)`
  font-size: 20px;
`

const Detail = (props) => {

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id
  });
  
  return (
    <div className="container">
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      <NewBtn bg="blue">복사한 버튼</NewBtn>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
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
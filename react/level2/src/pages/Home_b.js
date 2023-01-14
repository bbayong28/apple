import React from 'react'
import Product from '../Product'
import axios from 'axios'

const Home = (props) => {
  return (
    <div className='home'>
      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
          {/* <button onClick={() => { 
            let copy = [...props.shoes]
            copy.sort();
            props.setShoes(copy);
          }}>가나다순 정렬</button> */}
          {
            props.shoes.map((a, i) => { 
              return (
                <Product key={i} shoes={props.shoes[i]} i={i}></Product>
              ) 
            })
          }          
        </div>           
      </div>
      <button onClick={() => { 
        //로딩중 띄우기
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과) => {            
            console.log(결과.data)
            // 가져온 데이터 상품 보이게 하려면?
            // 생자스 => html 생성해주세요~
            // 리액트 => 스위치로 조작

            console.log(props.shoes)
            let copy = [...props.shoes, ...결과.data];
            props.setShoes(copy);
            //로딩중 숨기기
            
            //내가 구글링으로 한 방법.
            //console.log(Array.from(props.shoes).concat(결과.data))

            //동시에 ajax 요청 여러개 하려면
            //2번쓰먼 두개다 성공했을 애 동시에 실행해달라고 코드짜기 어려움.
            axios.get('/url1')
            axios.get('/url2')
            
            //Promise.all로 하나로 묶어서 2개다 성공했을 때 then 안의 콜백함수를 실행해주세요.
            Promise.all([axios.get('/url1'), axios.get('/url2')]).then(() => {  })          
          })

          //서버로 데이터 전송하는 POST 요청
          //axios.post('url', {전송할 데이터})
          axios.post('/efefseas', { name: 'kim' })
        
          //ajax 요청이 실패했을 때 보여질 것.
          //.catch(() => { 
          //  //로딩중 숨기기
          //  //console.log('실패함')
          //})
      }}>더보기</button>
    </div>
  )
}

export default Home;
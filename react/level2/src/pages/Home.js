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
        axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {            
            console.log(결과.data)
            console.log(props.shoes)
            let copy = [...props.shoes, ...결과.data];
            props.setShoes(copy);
          })
      }}>더보기</button>
    </div>
  )
}

export default Home;
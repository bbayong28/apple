import React from 'react'
import Product from '../Product'

const Home = (props) => {
  return (
    <div className='home'>
      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
          {
            props.shoes.map((a, i) => { 
              return (
                <Product key={i} shoes={props.shoes[i]} i={i}></Product>
              ) 
            })
          }          
        </div>           
      </div>
    </div>
  )
}

export default Home;
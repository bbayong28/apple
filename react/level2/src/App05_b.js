/* public 속 img 사용하려면 주석 풀고 src속 img 삭제해도됨 */

import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
//import bg from './img/main-bg.png'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
/* 코드가 너무 길고 복잡해져서 data.js에 넣고 가져와서 쓰기! */
/* let [shoes, setShoes] = useState([
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },

    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },

    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
  ] 
) */
  
  let [shoes] = useState(data);
  //console.log(shoes)

  return (
    <div className="App">

      

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">JShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#furniture">Furniture</Nav.Link>
            <Nav.Link href="#light">Light</Nav.Link>
            <Nav.Link href="#homedeco">HomeDeco</Nav.Link>
            <Nav.Link href="#gardening">Gardening</Nav.Link>
            <Nav.Link href="#etc">Etc.</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 페이지 이동버튼 만들기 */}
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/furniture">Furniture</Link>
      <Link to="/light">Light</Link>
      <Link to="/homedeco">HomeDeco</Link>
      <Link to="/gardening">Gardening</Link>
      <Link to="/etc">Etc</Link>






{/* 
      {/* 메인배경 넣기 */}
      {/* <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div> *
      <div className='main-bg'></div>

      {/* 상품 레이아웃 3개 - bootstrap사용 *
      <div className='container'>
        <div className='row'>
          {/* <div className='col-md-4'>
            {/* <img src={process.env.PUBLIC_URL + 'logo192.png'} width="80%"/> 
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>{shoes[0].title}</h4>
            <h4>{shoes[0].price}</h4>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>            
            <h4>{shoes[1].title}</h4>
            <h4>{shoes[1].price}</h4>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>            
            <h4>{shoes[2].title}</h4>
            <h4>{shoes[2].price}</h4>
          </div>  */}    
          
          {/* 
          <Product shoes={shoes[0]} i={1}></Product>
          <Product shoes={shoes[1]} i={2}></Product>
          <Product shoes={shoes[2]} i={3}></Product> 
          *

          {
            shoes.map((a, i) => { 
              return (
                <Product shoes={shoes[i]} i={i}></Product>
              )
            })
          }
          
        </div>           
      </div> */}

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>

      {/* 상품 레이아웃 3개 - bootstrap사용 */}
      <div className='container'>
        <div className='row'>
          {
            shoes.map((a, i) => { 
              return (
                <Product shoes={shoes[i]} i={i}></Product>
              )
            })
          }          
        </div>           
      </div>
          </>
        } />
        {/* <Route path="/detail" element={<div>상세페이지임</div>} /> */}
        <Route path="/detail" element={
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
              </div>
            </div>
          </div> 
        } />
      </Routes>

    </div>
  );
}

function Product(props){ 
  return (
    <div className='col-md-4'>      
      {/* <img src={process.env.PUBLIC_URL + './img/product0' + (props.i + 1) + '.png'} 
      width="80%"/> */}
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <h4>{props.shoes.price}</h4>
    </div>
  )
}



export default App;

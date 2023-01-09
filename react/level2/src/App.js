import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom'
//import Detail from './Detail';
//import Home from './Home';

function App() {
  let [shoes] = useState(data);

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

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {shoes.map((a, i) => { 
                    return (
                      <Product shoes={shoes[i]} i={i}></Product>
                    )})}          
              </div>           
            </div>
          </>
        } />
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
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <h4>{props.shoes.price}</h4>
    </div>
  )
}



export default App;

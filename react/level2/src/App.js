import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './pages/Detail';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate()


  return (
    <div className="App">

      

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>JShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
            <Nav.Link onClick={() => { navigate(1) }}>앞으로이동</Nav.Link>
            <Nav.Link onClick={() => { navigate(-1) }}>뒤로이동</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} /> } />{/* 
        <Route path="/detail" element={<Detail shoes={shoes} />} />     */}  
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />      
        

        <Route path="/about" element={<About />}>          
          <Route path="member" element={ <p>조직도</p> }/>
          <Route path="location" element={<p>회사위치</p>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={ <p>첫 주문시 양배추즙 서비스</p> }/>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>        
        <Route path="*" element={ <div>없는페이지요</div> }/>
      </Routes>

    </div>
  );
}




export default App;

import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { createContext, useState, useEffect } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './pages/Detail';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Cart from './pages/Cart';


//export let Context1 = createContext();


function App() {


  //useEffect(() => { 
  //  localStorage.setItem('watched', JSON.stringify( [] ))
  //},[])
  useEffect(() => { 
    if(!localStorage.getItem('watched'))
    localStorage.setItem('watched', JSON.stringify( [] ))
  },[])

  let obj = { name: 'kim' }
  
 //localStorage.setItem('data', obj);
  localStorage.setItem('data', JSON.stringify(obj));
  let 꺼낸거 = localStorage.getItem('data');
  console.log(꺼낸거)
  console.log(꺼낸거.name)
  console.log(JSON.parse(꺼낸거))
  console.log(JSON.parse(꺼낸거).name)



  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate()
  //let [재고] = useState([10, 11, 12])


  return (
    <div className="App">

      

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>JShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate(1) }}>앞으로이동</Nav.Link>
            <Nav.Link onClick={() => { navigate(-1) }}>뒤로이동</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} /> } />{/* 
        <Route path="/detail" element={<Detail shoes={shoes} />} />     */}   
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />      
        <Route path='/cart' element={ <Cart/> } />
        

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

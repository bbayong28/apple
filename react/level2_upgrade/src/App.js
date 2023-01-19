import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { lazy, Suspense ,createContext, useState, useEffect } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './pages/Detail';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Cart from './pages/Cart';
import { useQuery } from 'react-query';
import axios from 'axios';


//const Detail = lazy(() => import('./pages/Detail.js'));
//const About = lazy(() => import('./pages/About.js'));
//const Event = lazy(() => import('./pages/Event.js'));
//const Cart = lazy(() => import('./pages/Cart.js'));



//export let Context1 = createContext();


function App() {

  useEffect(() => { 
    if(!localStorage.getItem('watched'))
    localStorage.setItem('watched', JSON.stringify( [] ))
  },[])

  let obj = { name: 'kim' }
  
  localStorage.setItem('data', JSON.stringify(obj));
  let 꺼낸거 = localStorage.getItem('data');
  //console.log(꺼낸거)
  //console.log(꺼낸거.name)
  //console.log(JSON.parse(꺼낸거))
  //console.log(JSON.parse(꺼낸거).name)



  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate()
  //let [재고] = useState([10, 11, 12])



  let result = useQuery('작명', () => axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      console.log('요청됨')
      return a.data
  }),
    { staleTime : 2000 }
  )

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
          <Nav className="ms-auto">
            { result.isLoading && '로딩중입니다' }
            { result.error && '에러남' }
            { result.data && result.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} /> } />{/* 
        <Route path="/detail" element={<Detail shoes={shoes} />} />     */}   
        <Route path="/detail/:id" element={
          /* <Suspense fallback={<div>로딩중임</div>}> */
            <Detail shoes={shoes} />
          /* </Suspense> */
        } />      
        <Route path='/cart' element={
          /* <Suspense fallback={<div>로딩중임</div>}> */
            <Cart />
          /* </Suspense> */
        } />
        

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

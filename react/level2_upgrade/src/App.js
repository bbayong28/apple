/* eslint-disable  */

import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { lazy, Suspense ,createContext, useState, useEffect, startTransition, useTransition, useDeferredValue } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Home from './pages/Home';
import { useQuery } from 'react-query';
import axios from 'axios';


const Detail = lazy(() => import('./pages/Detail.js'));
const About = lazy(() => import('./pages/About.js'));
const Event = lazy(() => import('./pages/Event.js'));
const Cart = lazy(() => import('./pages/Cart.js'));
const Age = lazy(() => import('./Age.js'));

let a = new Array(10000).fill(0)


function App() {

  useEffect(() => { 
    if(!localStorage.getItem('watched'))
    localStorage.setItem('watched', JSON.stringify( [] ))
  },[])

  let obj = { name: 'kim' }
  
  localStorage.setItem('data', JSON.stringify(obj));
  let 꺼낸거 = localStorage.getItem('data');

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate()
  let [재고] = useState([10, 11, 12])

  let result = useQuery('작명', () => axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      console.log('요청됨')
      return a.data
  }),
    { staleTime : 2000 }
  )

  let [name, setName] = useState('')   

  let [isPending, 늦게처리] = useTransition()

  let statee = useDeferredValue(name)

  return (
    <div className="App">

      <input onChange={(e) => {
        늦게처리(() => { 
          setName(e.target.value)
        })
      }} />  
      {
        isPending ? '로딩중입니다.' : 
        a.map(() => { 
          return <div>{ statee }</div>
        })
      }

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
            <Nav.Link onClick={() => { navigate('/age') }}>age</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            { result.isLoading && '로딩중입니다' }
            { result.error && '에러남' }
            { result.data && result.data.name }
          </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={ <div>로딩중</div> }>
        <Routes>
          <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />} />
          {/* <Route path="/detail" element={<Detail shoes={shoes} />} /> */}   
          <Route path="/detail/:id" element={
            /* <Suspense fallback={<div>로딩중임</div>}> */
              <Detail shoes={shoes} />
            /* </Suspense> */
          } />  
          <Route path='/age' element={ <Age/> }></Route>
          
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
          
          <Route path="*" element={<div>없는페이지요</div>} />
          
        </Routes>
      </Suspense>

    </div>
  );
}




export default App;





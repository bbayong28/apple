/* public 속 img 사용하려면 주석 풀고 src속 img 삭제해도됨 */

import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './data';
//import bg from './img/main-bg.png'
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './pages/Detail';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Cart from './pages/Cart';


//context를 만들어줌. context는 state보관함임.
//let Context1 = createContext();
//export let Context1 = createContext();



function App() {



  let obj = { name: 'kim' }
  //obj가 객체라서 강제로 문자로 변환하는 과정에서 깨짐
  //localStorage.setItem('data', obj);

  //array/object를 저장하려면 JSON으로 바꾸면 됨.
  //array/object -> JSON변환은 JSON.stringify()
  //JSON.stringify(obj)
  localStorage.setItem('data', JSON.stringify(obj));
  let 꺼낸거 = localStorage.getItem('data');
  console.log(꺼낸거)
  //console.log(꺼낸거.name)
  console.log(JSON.parse(꺼낸거))
  //console.log(JSON.parse(꺼낸거).name)

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
  //console.log(shoes);
  let navigate = useNavigate()
  //props 대신 Context API 쓸거임
  //[상품0의 재고, 상품1의 재고, 상품2의 재고] => [10, 11, 12] 라고 하고 이걸 Detail, TabContent에서 쓰고 싶음
  //let [재고] = useState([10, 11, 12])



  return (
    <div className="App">
      

      <Navbar bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">JShop</Navbar.Brand> */}
          <Navbar.Brand onClick={() => {navigate('/')}}>JShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
            <Nav.Link href="#furniture">Furniture</Nav.Link>
            <Nav.Link href="#light">Light</Nav.Link>
            <Nav.Link href="#homedeco">HomeDeco</Nav.Link>
            <Nav.Link href="#gardening">Gardening</Nav.Link>
            <Nav.Link href="#etc">Etc.</Nav.Link>
            {/* 페이지 이동버튼 만들기 
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
            <Link to="/furniture">Furniture</Link>
            <Link to="/light">Light</Link>
            <Link to="/homedeco">HomeDeco</Link>
            <Link to="/gardening">Gardening</Link>
            <Link to="/etc">Etc</Link>*/}
            <Nav.Link onClick={() => { navigate(1) }}>앞으로이동</Nav.Link>
            <Nav.Link onClick={() => { navigate(-1) }}>뒤로이동</Nav.Link>

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
        {/* <Route path="/" element={
          <>
            <div className='main-bg'></div>
            {/* 상품 레이아웃 3개 - bootstrap사용 *
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
        {/* <Route path="/detail" element={<div>상세페이지임</div>} /> *
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
        } /> */}

        <Route path="/" element={<Home shoes={shoes} /> } />
        {/* <Route path="/detail" element={<Detail />} /> */} 
        {/* <Route path="/detail/:id" element={
          <Context1.Provider value={{ 재고, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />  */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} /> 
        <Route path='/cart' element={ <Cart/> } />
        
        
        {/* 
        <Route path="/detail/0" element={<Detail />} />
        <Route path="/detail/1" element={<Detail />} />
        <Route path="/detail/2" element={<Detail />} />
        <Route path="/detail/3" element={<Detail />} />
        ...
        <Route path="/detail/100" element={<Detail />} /> 
        */}
      

        {/* 
        <Route path="/about" element={<About />}/>          
        <Route path="/about/member" element={ <div>조직도</div> }/>
        <Route path="/about/location" element={<div>회사위치</div>} />
        */}        
        
        {/* 위와 같은데 이건 nasted routes 문법이라고 함. */}
        <Route path="/about" element={<About />}>          
          <Route path="member" element={ <div>조직도</div> }/>
          <Route path="location" element={<div>회사위치</div>} />
        </Route>


        <Route path="/event" element={<Event />}>
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> }/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        
        {/* 404페이지 만들기 */}
        <Route path="*" element={ <div>없는페이지요</div> }/>
      </Routes>



    </div>
  );
}

/* function Product(props){ 
  return (
    <div className='col-md-4'>      
      {/* 
      public 폴더에 있는 사진 가져올 때
      <img src={process.env.PUBLIC_URL + './img/product0' + (props.i + 1) + '.png'} 
      width="80%"/> *
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <h4>{props.shoes.price}</h4>
    </div>
  )
}

 */

export default App;

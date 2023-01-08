import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
//import bg from './img/main-bg.png'

function App() {
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

      {/* 메인배경 넣기 */}
      {/* <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div> */}
      <div className='main-bg'></div>

      {/* 상품 레이아웃 3개 - bootstrap사용 */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + 'logo192.png'} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>          
        </div>
      </div>


    </div>
  );
}

export default App;

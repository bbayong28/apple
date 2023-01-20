import {React, useState} from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//import { changeName, changeAge } from '../state/store'
import { changeName, changeAge } from '../state/userSlice'
import { addCounter } from '../state/store'
import { memo, useState, useMemo } from 'react'



//자식 컴포넌트 재렌더링 막기
//function Child() { 
//  return (    
//    <div>자식임</div>
//    
//  )
//}
//let Child = memo (function () { 
//  console.log('재렌더링됨')
//  return (
//    <div>자식임</div>    
//  )
//} )


//useMemo()
//function 함수() { 
//  return (
//    //반복문 10억번 돌린결과
//  )
//}

const Cart = () => { 

//useSelector( ( state ) => { return state } ) => Redux store 안에 있던 state 남음
  //참고 useSelector 편하게 쓰려면?
  //왜()=> { } 넣어야함 ? 리덕스 만든사람이 그렇게 하래서
  //state는 store 안에 있던 모든 state를 말하며,필요한 것들만 가져와서 서도 됨
  //let more = useSelector((state) => { return state.user })    이런식으로
  
  //return 과 중괄호는 생략 가능
  //let more = useSelector((state) => { return state })
  //let more = useSelector((state) => state)
  //console.log(state.user) // kim
  //console.log(state.stock) // [10, 11, 12]]

  //let more = useSelector((state) => state )
  //let more = useSelector((state) => state.user )
  //let more = useSelector((state) => state.stock )
  //console.log(state) // state 일 때 출력되는거 kim, [10, 11, 12]
  //console.log(state) // state.user일 때 출력되는거 kim
  //console.log(state) // state.stock 때 출력되는거 [10, 11, 12]
  
  let more = useSelector((state) => state) 
  //console.log(state.cart) => [ {}, {} ]
  //console.log(state.cart[0].name) 

  let dispatch = useDispatch();

  //let [count, setCount] = useState(0)


  //<Cart/>가 재렌더링 될 때마다 실행됨.
  //let result = 함수();
  //useMemo()쓰면 컴포넌트 렌더링 시 1회만 실행해줌
  //let result = useMemo(() => { return 함수()})
  //state가 변화할 때만 함수() 실행됨.
  let result = useMemo(() => { return 함수()},[state])
  
  
  return (
    <div>
      {/* <Child/>
      <button onClick={ setCount(count + 1) }></button> */}
      <h6>{more.user.name} {more.user.age}의 장바구니</h6>
      <button onClick={() => {
        dispatch(changeAge())
      }}>버튼</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr> */}
          {
            more.cart.map((a,i) => { 
              return (
                <tr key={i}>
                  <td>1</td>
                  <td>{ more.cart[i].name }</td>
                  <td>{ more.cart[i].count }</td>
                  <td>
                    <button onClick={() => { 
                      //dispatch(changeName())
                      dispatch(addCounter(i))
                    }}>+</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart
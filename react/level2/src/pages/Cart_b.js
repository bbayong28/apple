import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../state/store'

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

  let dispatch = useDispatch
  
  return (
    <div>
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
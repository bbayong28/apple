import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../state/store'

const Cart = () => {

  //let more = useSelector((state) => { return state })
  let more = useSelector((state) => state)
  //console.log(state.cart) => [ {}, {} ]
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
          {
            more.cart.map((a, i) => { 
              return (
                <tr key={i}>
                  <td>1</td>
                  <td>{more.cart[i].name}</td>                  
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
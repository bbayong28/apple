import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeAge } from '../state/userSlice'
import { addCounter } from '../state/store'
import { memo, useState, useMemo } from 'react'




const Cart = () => {
  let more = useSelector((state) => state)
  let dispatch = useDispatch()



  return (
    <div>
      <h6>{more.user.name} {more.user.age}의 장바구니</h6>
      <button onClick={() => {
        dispatch(changeAge(20))
      }}>버튼</button>
      
      <Table>
        <thead>
          <tr>
            <th>상품번호</th>
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
                  <td>{more.cart[i].id}</td>                  
                  <td>{more.cart[i].name}</td>                  
                  <td>{ more.cart[i].count }</td>
                  <td>
                    <button onClick={() => { 
                      //dispatch(addCounter(i))
                      dispatch(addCounter(more.cart[i].id))                      
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
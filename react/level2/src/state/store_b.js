import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  //name: 'state 이름',
  //initialState:'값'
  name: 'user',
  initialState: 'kim',
  //state 수정해주는 함수 만듦
  reducer: {
    changeName(state) { 
      //return 'john' + state
      return 'john kim'
    },
  }
})


let cart = createSlice({
    name: 'cart',
  initialState : [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
    ]
})
  
//export let { 함수1, 함수2, 함수3 ,,, } = user.actions
export let { changeName } = user.actions


let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

export default configureStore({
  reducer: {
    //여기 등록해야 사용가능
    //작명 : user.reducer 작명 귀찮으면 그냥 user 써라
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
})

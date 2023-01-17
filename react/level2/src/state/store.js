import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice'

// 길어서 userSlice.js로 따로 뺌
//let user = createSlice({
//  name: 'user',
//  initialState: { name: 'kim', age: 20 },
//  reducers: {
//    changeName(state) {
//      state.name = 'park'
//    },
//    changeAge(state, action) {
//      state.age += action.payload
//    },
//  }
//})
//export let { changeName, changeAge } = user.actions



let cart = createSlice({
  name: 'cart',
  initialState : [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],
  reducers: {
    chageCounter(state, action) { 
      state.count += state + 1
    } 
  }
})
  

export let { chageCounter } = cart.actions


let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

export default configureStore({
  reducer: { 
    user: user.reducer,
    stock: stock.reducer,
    cart : cart.reducer
  }
})


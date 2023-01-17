import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice'

//let user = createSlice({
//  //name: 'state 이름',
//  //initialState:'값'
//  name: 'user',
//  initialState: 'kim',
//  //state 수정해주는 함수 만듦
//  reducers: {
//    changeName(state) { 
//      //return 'john ' + state
//      return 'john kim'
//    },
//  }
//})



// 길어서 userSlice.js로 따로 뺌
//let user = createSlice({
//  name: 'user',
//  initialState: { name: 'kim', age: 20 },
//  reducers: {
//    changeName(state) {
//      //return { name: 'park', age: 20 }
//      state.name = 'park'
//    },
//    //changeAge(state) {
//    //  //state.age =  state.age + 1
//    //  state.age += 1
//    //},
//
//    //10 더하고 싶을때 근데 2도 더하고 5도더하고 할때마다 하나씩 더 만들거임?
//    //노노 그럴 땐 파라미터를 쓰는게 훨씬 간결함
//    //changeAge2(state) {
//    //  //state.age =  state.age + 10
//    //  state.age += 10
//    //}
//    
//    changeAge(state, action) {
//      state.age += action.payload
//    },
//  }
//})
//
////changeAge(10)
////changeAge(100)
//
//
////export let { 함수1, 함수2, 함수3 ,,, } = user.actions
////export let { changeName, changeAge, changeAge2,,,, } = user.actions
//export let { changeName, changeAge } = user.actions

let cart = createSlice({
    name: 'cart',
  initialState : [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],
  //reducers: {
  //  changeCount(state) { 
  //    return state + 1
  //  },
  //}
})
  
//export let { changeCount } = cart.actions

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

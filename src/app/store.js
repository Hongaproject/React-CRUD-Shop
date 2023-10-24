import { configureStore, createSlice } from '@reduxjs/toolkit'

// redux를 사용해서 state를 전부 보관함 

// let products = createSlice({ // data부분에 있는 부분을 가져와서 사용함.
//   name : 'product',
//   initialState : [{ // 초기 state 할당
//     id : 0,
//     title : '오둥이',
//     count : 1
//     },
//     {
//     id : 1,
//     title : '카카오 가습기',
//     count : 1
//     }
//   ]
// })

// let product = createSlice({ // action type, action 생성 함수, reducer까지 한번에 작성이 가능하다.
//   name : 'product', // reducer 이름을 지정해줌
//   initialState : [ // 초기상태이며 state 할당
//   ], // initialState에 있는 내용을 함수와 state와 action을 사용합니다.
//   reducers: {
//     addCount(state, action) {
//       let nums = state.findIndex( a => a.id === action.payload);
//       state[nums].count++;
//     },
//     minusCount(state, action) {
//       let nums = state.findIndex( a => a.id === action.payload);
//       if (state[nums].count > 1)  state[nums].count--;
//     },
//     deleteCount(state, action) {
//       action.payload.remove();
//     },
//   },
// });

const user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 21 },
});

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      const i = state.findIndex((product) => product.id === action.payload);
      state[i].count += 1;
    },
  },
});

export const { changeCount } = cart.actions;

export default configureStore({
  reducer: { 
    // product: product.reducer // product부분이 사용하는 파일 부분서 불러지는 부분
    user: user.reducer,
    cart: cart.reducer,
  }
}) 

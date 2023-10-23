import { configureStore, createSlice } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { 
    product: product.reducer
  }
}) 

let product = createSlice({ // data부분에 있는 부분을 가져와서 사용함.
  name : 'product',
  initialState : [{
    id : 1,
    title : '오둥이',
    count : 1
    },
    {
    id : 2,
    title : '카카오 가습기',
    count : 1
    }
  ]
})
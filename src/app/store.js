import { configureStore, createSlice } from '@reduxjs/toolkit'

// redux를 사용해서 state를 전부 보관함 

let products = createSlice({ // data부분에 있는 부분을 가져와서 사용함.
  name : 'product',
  initialState : [{ // 초기 state 할당
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

export default configureStore({
  reducer: { 
    product: products.reducer // product부분이 사용하는 파일 부분서 불러지는 부분
  }
}) 
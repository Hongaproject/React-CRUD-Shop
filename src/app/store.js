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

let product = createSlice({ // action type, action 생성 함수, reducer까지 한번에 작성이 가능하다.
  name : 'product', // reducer 이름을 지정해줌
  initialState : [ // 초기상태이며 state 할당
  ], 
  reducers: { // initialState에 있는 내용을 함수와 state와 action을 사용합니다.
    addCount(state, action) { 
      // Basket.js부분 addCount버튼은 basket.product[index].id 파라미터를 보내줌
      // store.js부분 addCount에서는 action 파라미터로 받아와지는것 
      // action으로 받아온 파라미터 값을 사용 하려면 payload를 사용해서 사용함.
      let nums = state.findIndex( plist => plist.id === action.payload);
      // findIndex는 자바스크립트서 배열 부분에서 사용이 되는데 순차적으로 배열을 찾아내기 때문에 결과에 만족하는 값을 찾으면 그 값을 찾아온다.
      // action.payload는 Basket.js부분에서 basket.product[index].id부분을 보낸 것
      state[nums].count++; //
    },
    minusCount(state, action) {
      let nums = state.findIndex( plist => plist.id === action.payload);
      if (state[nums].count > 1)  state[nums].count--;
    },
    deleteCount(state, action) {
      const i = state.findIndex( plist => plist.id === action.payload);
      state.splice(i, 1);
    },
    addItem(state, action) {
      const pl = {
        id: action.payload.id,
        title: action.payload.title,
        count: 1,
      };
      state.push(pl);
    },
  },
});

export const { addCount, minusCount, deleteCount, addItem } = product.actions; // reducers부분 함수를 불러와 dispatch로 사용 할 수 있게 해줌.

export default configureStore({
  reducer: { 
    product: product.reducer // product부분이 사용하는 파일 부분서 불러지는 부분
  },
   // 다음이 middleware 추가 코드이다.
   middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
   // 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
   devTools: true,
})

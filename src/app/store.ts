import { configureStore } from '@reduxjs/toolkit';

import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';
import createSagaMiddleware from 'redux-saga';
import postSaga from '../features/post/postSaga';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(postSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

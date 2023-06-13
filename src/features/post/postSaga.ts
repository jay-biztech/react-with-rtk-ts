import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Post, getPostsSuccess } from './postSlice';

function* workGetPostsFetch() {
  const posts: Post[] = yield call(() =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.data)
  );

  yield put(getPostsSuccess(posts));
}

function* postSaga() {
  yield takeEvery('posts/getPostsFetch', workGetPostsFetch);
}

export default postSaga;

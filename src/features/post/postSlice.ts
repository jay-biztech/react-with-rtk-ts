import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Post = {
  id: number;
  title: string;
};

type InitialState = {
  isLoading: boolean;
  posts: Post[];
};

const initialState: InitialState = {
  isLoading: false,
  posts: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getPostsFetch, getPostsSuccess, getPostsFailure } =
  postSlice.actions;

export default postSlice.reducer;

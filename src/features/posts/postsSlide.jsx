import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../../api/posts';

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts();
    return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { /* Actions */ } = postsSlice.actions;

export default postsSlice.reducer;
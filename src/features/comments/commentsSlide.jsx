import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    // Reducers pour gérer les commentaires
  },
});

export const { /* Actions */ } = commentsSlice.actions;

export default commentsSlice.reducer;
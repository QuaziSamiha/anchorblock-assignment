import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // user: 'samiha',
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    // logout
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, clearError } = authSlice.actions;

export default authSlice.reducer;

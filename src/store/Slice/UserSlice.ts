import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {registerUser, loginUser} from '../../services/Auth.Service';

interface User {
  id: number;
  username: string;
  email: string;
}

// Async thunk for registering a user
export const registerUserAsync = createAsyncThunk(
  'user/registerUser',
  async (
    {
      username,
      email,
      password,
    }: {username: string; email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const user = await registerUser(username, email, password);
      return user;
    } catch (error) {
      return rejectWithValue('Registration failed');
    }
  },
);

// Async thunk for logging in a user
export const loginUserAsync = createAsyncThunk(
  'user/loginUser',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const user = await loginUser(email, password);
      if (user) {
        return user; // Fulfills the thunk
      } else {
        return rejectWithValue('Invalid email or password');
      }
    } catch (error) {
      return rejectWithValue('Error logging in');
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null as User | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    logout: state => {
      state.userData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Register user cases
      .addCase(registerUserAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login user cases
      .addCase(loginUserAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;

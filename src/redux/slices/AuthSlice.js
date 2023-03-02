import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  auth,
  collection,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
  signInWithEmailAndPassword,
  signOut,
  todoCollection,
} from "./../../firebase";

const initialState = {
  user: {
    displayName: null,
    email: null,
    isVerified: null,
    phone: null,
    uid: null,
  },
  loading: false,
  error: null,
  isAuthenticated: false,
  registered: false,
};

export const register = createAsyncThunk(
  "users/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      const data = await resp?.user;
      const { displayName, emailVerified, phoneNumber, uid } =
        data?.auth?.currentUser;
      const user = {
        displayName,
        email,
        isVerified: emailVerified,
        phone: phoneNumber,
        uid,
      };
      await setDoc(doc(db, "todos", uid), { todos: [] });
      console.log("Register");
      console.log(user);
      return user;
    } catch (error) {
      console.log("Register");
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, thunkAPI) => {
    console.log("From Thunk Login");
    console.log(email);
    console.log(password);
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      const data = await resp?.user;
      const { displayName, emailVerified, phoneNumber, uid } = await data?.auth
        ?.currentUser;
      const user = {
        displayName,
        email,
        isVerified: emailVerified,
        phone: phoneNumber,
        uid,
      };
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.registered = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.registered = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.registered = null;
        state.user = initialState.user;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetRegistered } = authSlice.actions;
export default authSlice.reducer;

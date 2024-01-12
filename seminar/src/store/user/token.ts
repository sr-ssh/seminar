import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const InitialState = {
  accessToken: "",
  refreshToken: "",
};

type Token = {
  accessToken: string;
  refreshToken: string;
};

export const tokenSlice = createSlice({
  name: "token",
  initialState: InitialState,

  reducers: {
    setToken: (state: Token, action: PayloadAction<Token>) => {
      state.accessToken = action?.payload?.accessToken;
      state.refreshToken = action?.payload?.refreshToken;
    },
    tokenClear: (state: Token) => {
      state = InitialState;
      return state;
    },
  },
});

export const { setToken, tokenClear } = tokenSlice.actions;

export default tokenSlice.reducer;

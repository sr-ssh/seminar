import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";

const InitialState = {
  email: "",
  password: "",
  username: "",
  type: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: InitialState,

  reducers: {
    setUserInfo: (state, action: PayloadAction<User>) => {
      state = action.payload;
      return state;
    },
    userClear: (state) => {
      state = InitialState;
      return state;
    },
  },
});

export const { setUserInfo, userClear } = userSlice.actions;

export default userSlice.reducer;

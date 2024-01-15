import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const InitialState = {
  id: 0,
  firstName: "",
  lastName: "",
  avatar: "",
  dateJoined: "",
  isActive: false,
  isManager: false,
  isStaff: false,
  isSuperuser: false,
  lastLogin: "",
  username: "",
  email: "",
  groups: [""],
  permissions: [""],
  type: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: InitialState,

  reducers: {
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
      state.avatar = action.payload.avatar;
      state.dateJoined = action.payload.date_joined;
      state.isActive = action.payload.is_active;
      state.isManager = action.payload.is_manager;
      state.isStaff = action.payload.is_staff;
      state.isSuperuser = action.payload.is_superuser;
      state.lastLogin = action.payload.last_login;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.groups = action.payload.groups;
      state.permissions = action.payload.user_permissions;
      state.type = action.payload.user_type;

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

import { createSlice } from "@reduxjs/toolkit";

// const [form, setForm] = useState ({user: {}})

const initialState = {
  user: {},
};

const loginRegisterSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const { reducer, actions } = loginRegisterSlice;
export const { setUser } = actions;

export default reducer;

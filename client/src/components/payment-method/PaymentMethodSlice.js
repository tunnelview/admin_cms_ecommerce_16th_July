import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethods: [],
};

const paymentMthodSlice = createSlice({
  name: "paymentSlice",
  initialState,
  reducers: {
    setPaymentMethods: (state, { payload }) => {
      state.paymentMethods = payload;
    },
  },
});

import { configureStore } from "@reduxjs/toolkit";
import loginRecucer from "./pages/login-registration/loginRegisterSlice";
import systemReducer from "./pages/system-state/systemSlice";
import categoryReducer from "./pages/categories/catSlice";

const store = configureStore({
  reducer: {
    userStore: loginRecucer,
    system: systemReducer,
    categories: categoryReducer,
  },
});

export default store;

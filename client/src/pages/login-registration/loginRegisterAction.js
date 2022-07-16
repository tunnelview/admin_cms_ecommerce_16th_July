import { loginAdminUser } from "../../helpers/axiosHelper";
import { setUser } from "./loginRegisterSlice";
import { toast } from "react-toastify";

export const logonAction = (obj) => async (dispatch) => {
  //show toastify spinner
  // call axips helper
  const resultPromise = loginAdminUser(obj);

  toast.promise(resultPromise, {
    pending: "Please wait ....",
  });

  const { status, message, result } = await resultPromise;

  toast[status](message);

  status === "success" && dispatch(setUser(result));
};

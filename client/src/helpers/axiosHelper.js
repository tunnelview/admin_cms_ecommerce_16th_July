import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEp = loginRegisterEP + "/login";
const catEP = rootUrl + "/categories";

const apiProcessor = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postAdminUser = (obj) => {
  return apiProcessor("post", loginRegisterEP, obj);
};

export const emailVerificationAdminUser = (obj) => {
  return apiProcessor("patch", loginRegisterEP, obj);
};

export const loginAdminUser = (obj) => {
  return apiProcessor("post", loginEp, obj);
};

// ==== category api call
export const fetchCategory = (_id) => {
  const url = _id ? catEP + "/" + _id : catEP;
  return apiProcessor("get", url);
};
export const postCategory = (obj) => {
  return apiProcessor("post", catEP, obj);
};

export const deleteCategories = (obj) => {
  return apiProcessor("delete", catEP, obj);
};

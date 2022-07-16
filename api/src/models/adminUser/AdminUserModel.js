import AdminSchema from "./AdminUserSchema.js";

export const crateNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};

export const updateAdmin = (filter, obj) => {
  return AdminSchema.findOneAndUpdate(filter, obj, { new: true });
};

//@filter must be object i.e {email: "a@a.com"}
export const getOneAdmin = (filter) => {
  return AdminSchema.findOne(filter);
};

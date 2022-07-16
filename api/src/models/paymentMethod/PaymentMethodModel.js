import PaymentMethodSchema from "./PaymentMethodSchema.js";

export const createPaymentMethod = (Obj) => {
  return PaymentMethodSchema(Obj).save();
};

export const getPaymentMethod = () => {
  return PaymentMethodSchema.find();
};

//both @filter and @update must be an object
export const updatePaymentMethod = (filter, update) => {
  return PaymentMethodSchema.findOne(filter, update, { new: true });
};

//both @filter and @update must be an object
export const deletePaymentMethod = (filter) => {
  return PaymentMethodSchema.findOneAndDelete();
};

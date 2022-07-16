import mongoose from "mongoose";

const paymentMethodSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
      required: true,
    },

    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    description: {
      type: String,
      default: "",
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Payment_method", paymentMethodSchema);

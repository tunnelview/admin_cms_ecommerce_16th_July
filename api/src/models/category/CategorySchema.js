import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxlength: 50,
      trim: true,
    },
    parentCatId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Category", categorySchema);

import CategorySchema from "./CategorySchema.js";

//insert new category
export const addNewCategory = (obj) => {
  return CategorySchema(obj).save();
};

//Read categories
export const getCategories = () => {
  return CategorySchema.find();
};

//Read categories
export const getCategoryById = (_id) => {
  return CategorySchema.findById(_id);
};

//update categories
export const updateCategoryById = ({ _id, ...obj }) => {
  return CategorySchema.findByIdAndUpdate(_id, obj, { new: true });
};

//delete categories, @ids must be an array
export const deleteCategoriesByIds = (ids) => {
  // CategorySchema.findByIdAndDelete(_id)
  return CategorySchema.deleteMany({ _id: { $in: ids } });
};

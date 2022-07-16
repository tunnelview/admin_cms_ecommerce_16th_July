import express from "express";
import {
  newcategoryValidation,
  updateCategoryValidation,
} from "../middlewares/validationMiddleware.js";
import {
  addNewCategory,
  deleteCategoriesByIds,
  getCategories,
  getCategoryById,
  updateCategoryById,
} from "../models/category/CategoryModel.js";
const router = express.Router();

import slugify from "slugify";

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = _id ? await getCategoryById(_id) : await getCategories();

    res.json({
      status: "success",
      message: "here are the categories",
      result,
    });
  } catch (error) {
    next(error);
  }
});

// add category
router.post("/", newcategoryValidation, async (req, res, next) => {
  try {
    req.body.slug = slugify(req.body.name, {
      lower: true,
      trim: true,
    });

    const result = await addNewCategory(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New category has been added",
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to create the category please try agian later",
        });
  } catch (error) {
    error.status = 500;

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "This category has already exist, Use the different name";
    }

    next(error);
  }
});

//update category
router.put("/", updateCategoryValidation, async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await updateCategoryById(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "The category has been updated",
        })
      : res.json({
          status: "error",
          message: "Error, unable to update he category, try agian later",
        });
  } catch (error) {
    next(error);
  }
});

//update category
router.delete("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { ids } = req.body;

    const result = await deleteCategoriesByIds(ids);

    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: "The category has been deleted",
        })
      : res.json({
          status: "error",
          message: "Error, unable to update he category, try agian later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;

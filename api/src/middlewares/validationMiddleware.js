import Joi from "joi";
import {
  DOB,
  FNAME,
  LNAME,
  LONGSTR,
  PHONE,
  EMAIL,
  PASSWORD,
  ADDRESS,
  joiValidator,
  SHORTSTR,
  STATUS,
} from "./validationConstant.js";

export const adminRegistrationValidation = (req, res, next) => {
  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    dob: DOB,
    phone: PHONE,
    email: EMAIL,
    password: PASSWORD,
    address: ADDRESS,
  });
  joiValidator(schema, req, res, next);
};

export const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL,
    password: PASSWORD,
  });
  joiValidator(schema, req, res, next);
};

export const newcategoryValidation = (req, res, next) => {
  req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: SHORTSTR.allow(null),
  });
  joiValidator(schema, req, res, next);
};

export const updateCategoryValidation = (req, res, next) => {
  req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: SHORTSTR.allow(null, ""),
  });
  joiValidator(schema, req, res, next);
};

export const paymentMethodValidation = (req, res, next) => {
  req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: LONGSTR.allow(null, ""),
  });
  joiValidator(schema, req, res, next);
};

export const updatePaymentMethodValidation = (req, res, next) => {
  req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: SHORTSTR.allow(null, ""),
  });
  joiValidator(schema, req, res, next);
};

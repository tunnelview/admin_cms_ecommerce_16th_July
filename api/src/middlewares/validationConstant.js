import Joi from "joi";

export const FNAME = Joi.string().min(3).max(50).required();
export const STATUS = Joi.string().min(3).max(50).required();

export const LNAME = Joi.string().min(3).max(50).required();
export const DOB = Joi.date().allow(null, "");
export const PHONE = Joi.string().min(3).max(50).required();
export const EMAIL = Joi.string()
  .email({ minDomainSegments: 2 })
  .max(50)
  .required();
export const PASSWORD = Joi.string().min(6).max(50).required();
export const ADDRESS = Joi.string().allow("").max(50);

export const SHORTSTR = Joi.string().max(100);
export const LONGSTR = Joi.string().max(5000);

export const joiValidator = (schema, req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};

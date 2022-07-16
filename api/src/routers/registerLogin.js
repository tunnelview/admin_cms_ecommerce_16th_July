import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import {
  adminRegistrationValidation,
  loginValidation,
} from "../middlewares/validationMiddleware.js";
import {
  crateNewAdmin,
  getOneAdmin,
  updateAdmin,
} from "../models/adminUser/AdminUserModel.js";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";
import { sendAdminUserVerificationMail } from "../helpers/emailHelper.js";

router.post("/", adminRegistrationValidation, async (req, res, next) => {
  try {
    //1. encrypt password
    req.body.password = hashPassword(req.body.password);

    const verificationCode = uuidv4();
    req.body.verificationCode = verificationCode;
    //2. call model to run save query
    const result = await crateNewAdmin(req.body);

    if (result?._id) {
      console.log(result);
      //3. unique url endpoint and sent that to customer.
      sendAdminUserVerificationMail(result);
      return res.json({
        status: "success",
        message:
          "We have sent you an email, please check email and follow the instruction to activate your account.",
      });
    }

    res.json({
      status: "error",
      message: "Unable to craete an user, please try again later.",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "There is already a register user with this email, pelase login with this email or use different emal.";
    }
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;
    if (email && verificationCode) {
      console.log(req.body);
      const filter = { email, verificationCode };
      const obj = {
        status: "active",
        verificationCode: "",
      };

      const result = await updateAdmin(filter, obj);

      if (result?._id) {
        return res.json({
          status: "success",
          message: "You account has been activated, you may sing in now!",
        });
      }
    }

    res.json({
      status: "error",
      message: "Invalid or expired link",
    });
  } catch (error) {
    next(error);
  }
});

//admin user login
router.post("/login", loginValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await getOneAdmin({ email });

    if (result?._id) {
      // check if the passowd from databas end the password that client sent matches
      const isMatched = comparePassword(password, result.password);

      result.password = undefined;

      if (isMatched) {
        return result.status === "active"
          ? res.json({
              status: "success",
              message: "Login success",
              result,
            })
          : res.json({
              status: "error",
              message:
                "Your account is inactive, Please check your email and follow the instruction to very the accout.",
            });
      }
    }

    res.json({
      status: "error",
      message: "Invalid login credientials",
    });
  } catch (error) {
    next(error);
  }
});

export default router;

import { body } from "express-validator";

class AuthValidator {
  //   check = expressValidator.check;

  registerValidator() {
    return [
      body("email").isEmail().withMessage("email is invalid"),
      body("name").not().isEmpty().withMessage("name cant be empty"),
      body("password").not().isEmpty().withMessage("password cant be empty"),
    ];
  }
  loginValidator() {
    return [
      body("email").isEmail().withMessage("email is invalid"),
      body("password").not().isEmpty().withMessage("password cant be empty"),
    ];
  }
}

export = new AuthValidator();

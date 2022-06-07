"use strict";
const express_validator_1 = require("express-validator");
class AuthValidator {
    //   check = expressValidator.check;
    registerValidator() {
        return [
            (0, express_validator_1.body)("email").isEmail().withMessage("email is invalid"),
            (0, express_validator_1.body)("name").not().isEmpty().withMessage("name cant be empty"),
            (0, express_validator_1.body)("password").not().isEmpty().withMessage("password cant be empty"),
        ];
    }
    loginValidator() {
        return [
            (0, express_validator_1.body)("email").isEmail().withMessage("email is invalid"),
            (0, express_validator_1.body)("password").not().isEmpty().withMessage("password cant be empty"),
        ];
    }
}
module.exports = new AuthValidator();

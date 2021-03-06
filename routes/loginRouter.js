const express = require("express");
const {
  getLoginPage,
  loginToAccount,
  loginValidator,
  loginValidatorResult,
  logout,
} = require("../controller/loginController");
const { htmlResponse } = require("../middlewares/htmlResponse");

const router = express.Router();

const PAGE_TITLE = "Login to Account";

router.get("/", htmlResponse(PAGE_TITLE), getLoginPage);
router.post(
  "/",
  htmlResponse(PAGE_TITLE),
  loginValidator,
  loginValidatorResult,
  loginToAccount
);
router.delete("/", logout);

module.exports = router;

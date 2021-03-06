const express = require("express");
const {
  getBookingPage,
  ticketBooking,
} = require("../controller/bookingController");
const { htmlResponse } = require("../middlewares/htmlResponse");
const checkLoggedInUser = require("../middlewares/checkLoggedInUser");
const ProtectedRoute = require("../middlewares/ProtectedRoute");

const router = express.Router();

router.get(
  "/:id",
  htmlResponse("Booking Page"),
  ProtectedRoute,
  checkLoggedInUser,
  getBookingPage
);

router.post("/", ticketBooking);

module.exports = router;

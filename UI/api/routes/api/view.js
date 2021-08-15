const express = require("express");
const ViewManager = require("../../backend/business/viewManager").ViewManager;
const router = express.Router();

router.get("/view/testRoute", async function (req, res, next) {
  res.send(true)
});

router.post("/view/markView", async function (req, res, next) {
  let result = null;
  try {

    let viewManager = new ViewManager();
    result = await viewManager.markView(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

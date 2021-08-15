const express = require("express");
const SaleManager = require("../../backend/business/saleManager").SaleManager;
const router = express.Router();

router.get("/sale/testRoute", async function (req, res, next) {
  res.send(true)
});

router.post("/sale/putItemOnSale", async function (req, res, next) {
  let result = null;
  try {

    let saleManager = new SaleManager();
    result = await saleManager.putItemOnSale(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

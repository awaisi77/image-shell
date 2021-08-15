const express = require("express");
const CurrencyManager = require("../../backend/business/currencyManager").CurrencyManager;
const router = express.Router();

router.get("/currency/testRoute", async function (req, res, next) {
  res.send(true)
});

router.get("/currency/getAllCurrencies", async function (req, res, next) {
  let result = null;
  try {

    let currencyManager = new CurrencyManager();
    result = await currencyManager.getAllCurrencies();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

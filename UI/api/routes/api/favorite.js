const express = require("express");
const FavoriteManager = require("../../backend/business/favoriteManager").FavoriteManager;
const router = express.Router();

router.get("/favorite/testRoute", async function (req, res, next) {
  let result = null;
  globalVar = globalVar + 1
  res.send(true)
});

router.post("/favorite/markFavorite", async function (req, res, next) {
  let result = null;
  try {
    let favoriteManager = new FavoriteManager();
    result = await favoriteManager.markFavorite(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/favorite/unMarkFavorite", async function (req, res, next) {
  let result = null;
  try {

    let favoriteManager = new FavoriteManager();
    result = await favoriteManager.unMarkFavorite(req.body);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

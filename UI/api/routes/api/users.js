const express = require("express");
const UsersManager = require("../../backend/business/usersManager").UsersManager;
const router = express.Router();

router.get("/testRoute", async function (req, res, next) {
  let result = null;
  globalVar = globalVar + 1
  res.send(true)
});

router.get("/user/getUser", async function (req, res, next) {
  let result = null;
  try {

    let usersManager = new UsersManager();
    result = await usersManager.getUserById(req.query.UserId);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/user/updateUser", async function (req, res, next) {
  let result = null;
  try {

    let usersManager = new UsersManager();
    result = await usersManager.update(req.body.UserId, req.body);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/user/createUser", async function (req, res, next) {
  let result = null;
  try {
    console.log('Body: ', req.body);
    
    let usersManager = new UsersManager();
    result = await usersManager.createNewUser(req.body);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

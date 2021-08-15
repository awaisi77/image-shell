const express = require("express");
var multer = require('multer');
var path = require('path');
const CollectionManager = require("../../backend/business/collectionManager").CollectionManager;
const router = express.Router();
const {
  v1: uuidv1
} = require('uuid');

router.get("/collection/testRoute", async function (req, res, next) {
  res.send(true)
});

router.get("/collection/getCollectionByUser", async function (req, res, next) {
  let result = null;
  try {

    let collectionManager = new CollectionManager();
    result = await collectionManager.getCollectionsByUserId(req.query.UserId);
    if (result.success) {
      res.send(result);
    }
    else {
      res.status(500).send(result);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/collection/addCollection", async function (req, res, next) {
  let result = null;
  try {

    let uuid = uuidv1();

    let filename = "";

    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './storage')
      },
      filename: function (req, file, cb) {
        filename = uuid + path.extname(file.originalname);
        cb(null, filename)
      }
    })

    var upload = multer({ storage: storage }).single('logo')
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
        // A Multer error occurred when uploading.
      } else if (err) {
        return res.status(500).json(err);
        // An unknown error occurred when uploading.
      }
      // Everything went fine.
      let collectionManager = new CollectionManager();
      let params = req.body;
      params.Logo = filename;
      collectionManager.addNewCollection(params)
        .then((result) => {
          if (result.success) {
            res.send(result);
          } else {
            res.status(500).send(result);
          }
        });
    });

  } catch (err) {
    next(err);
  }
});

router.post("/collection/updateCollection", async function (req, res, next) {
  let result = null;
  try {

    let uuid = uuidv1();
    let filename = "";
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './storage')
      },
      filename: function (req, file, cb) {
        filename = uuid + path.extname(file.originalname);
        cb(null, filename)
      }
    })
    
    var upload = multer({ storage: storage }).single('logo')
    upload(req, res, function (err) {
      if (req.file != undefined) {
        // code
        console.log(req.file, ": File is uploaded");
      } else if (req.file == undefined) {
        // code
        console.log(req.file, ": File is not uploaded");
      }


      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
        // A Multer error occurred when uploading.
      } else if (err) {
        return res.status(500).json(err);
        // An unknown error occurred when uploading.
      }
      // Everything went fine.
      let collectionManager = new CollectionManager();
      let params = req.body;
      params.Logo = filename;
      collectionManager.updateCollection(params.CollectionId, params)
        .then((result) => {
          if (result.success) {
            res.send(result);
          } else {
            res.status(500).send(result);
          }
        });
    });

  } catch (err) {
    next(err);
  }
});

module.exports = router;

const express = require("express");
const app = express();
var cors = require('cors');
const bodyParser = require("body-parser");
var path = require('path');
var port = process.env.PORT || '3894';

(async () => {

  app.use(cors())

  //Body Parser Middleware - Should be defined before defining routes
  app.use(
    bodyParser.json({
      limit: "400000000"
    })
  );
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  /* Start Routes */
  const ItemAPI = require("./routes/api/image");



  /* End Routes*/

  //API
  app.use("/api/v1", ItemAPI);

  app.use('/storage', express.static(path.join(__dirname, '/storage')));

  const server = app.listen(port, () => {
    console.log("Listening on port: " + port);
  });

})()

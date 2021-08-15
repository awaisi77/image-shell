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
  const UsersAPI = require("./routes/api/users");
  const CollectionsAPI = require("./routes/api/collection");
  const ItemAPI = require("./routes/api/item");
  const SaleAPI = require("./routes/api/sale");
  const ViewAPI = require("./routes/api/view");
  const CurrencyAPI = require("./routes/api/currency");
  const FavoriteAPI = require("./routes/api/favorite");


  /* End Routes*/

  //API
  app.use("/api/v1", UsersAPI);
  app.use("/api/v1", CollectionsAPI);
  app.use("/api/v1", ItemAPI);
  app.use("/api/v1", SaleAPI);
  app.use("/api/v1", ViewAPI);
  app.use("/api/v1", CurrencyAPI);
  app.use("/api/v1", FavoriteAPI);

  app.use('/storage', express.static(path.join(__dirname, '/storage')));

  const server = app.listen(port, () => {
    console.log("Listening on port: " + port);
  });

})()

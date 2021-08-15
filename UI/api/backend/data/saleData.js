const Connection = require("./dbConnection").Connection;

const SaleData = function () { };

SaleData.prototype.putItemOnSale = async function (params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/sale.js");

  return sequelize
    .authenticate()
    .then(() => {

      return model
        .create({
          ItemId: params.ItemId,
          Price: params.Price,
          EndingPrice: params.EndingPrice,
          CurrencyId: params.CurrencyId,
          Type: params.Type
        })
        .then(function (result) {
          sequelize.connectionManager.close().then(() => {

          });
          return result;
        })
        .catch(error => {
          sequelize.connectionManager.close().then(() => {
          });

          throw error;
        });
    })
    .catch(error => {
      sequelize.connectionManager.close().then(() => {
      });

      throw error;
    });
};

//get user by ID
SaleData.prototype.getAllItemsOnSale = async function (userId) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/collection.js");

  return sequelize.authenticate().then(() => {
    return model
      .findAll({
        where: {
          UserId: id
        },
        raw: true
      })
      .then(function (result) {
        sequelize.connectionManager.close();
        if (result != null && result.length > 0) {
          return {
            user: result,
            message: ""
          };
        } else {
          return {
            user: null,
            message: "No collection found for this user"
          };
        }
      });
  });
};

exports.SaleData = SaleData;

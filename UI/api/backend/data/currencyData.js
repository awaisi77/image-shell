const Connection = require("./dbConnection").Connection;

const CurrencyData = function () { };

CurrencyData.prototype.getAllCurrencies = async function () {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/currency.js");

  return sequelize.authenticate().then(() => {
    return model
      .findAll()
      .then(function (result) {
        sequelize.connectionManager.close();
        return result;
      });
  });
};

exports.CurrencyData = CurrencyData;

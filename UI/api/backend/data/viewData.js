const Connection = require("./dbConnection").Connection;

const ViewData = function () { };

ViewData.prototype.markView = async function (params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/view.js");

  return sequelize
    .authenticate()
    .then(() => {
      return model
        .create({
          UserId: params.UserId,
          ItemId: params.ItemId
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

exports.ViewData = ViewData;

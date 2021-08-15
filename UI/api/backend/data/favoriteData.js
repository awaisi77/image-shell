const Connection = require("./dbConnection").Connection;

const FavoriteData = function () { };

FavoriteData.prototype.markFavorite = async function (params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/favorite.js");

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

//get user by ID
FavoriteData.prototype.unMarkFavorite = async function (params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/favorite.js");

  return sequelize
    .authenticate()
    .then(() => {
      return model
        .destroy({
          where: {
            UserId: params.UserId,
            ItemId: params.ItemId
          }
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

exports.FavoriteData = FavoriteData;

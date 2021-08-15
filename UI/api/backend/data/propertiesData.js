const Connection = require("./dbConnection").Connection;

const PropertiesData = function () { };

PropertiesData.prototype.insert = async function (params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/properties.js");

  return sequelize
    .authenticate()
    .then(() => {

      return model
        .bulkCreate(params)
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

PropertiesData.prototype.getPropertiesByItemId = async function (id) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/properties.js");

  console.log("ID: ", id);

  return sequelize.authenticate().then(() => {
    return model
      .findAll({
        attributes: { exclude: ['ItemId'] },
        raw: true,
        where: {
          ItemId: id
        }
      })
      .then(function (result) {
        sequelize.connectionManager.close();
        if (result != null && result.length > 0) {
          return result;
        } else {
          return result;
        }
      });
  });
};
exports.PropertiesData = PropertiesData;

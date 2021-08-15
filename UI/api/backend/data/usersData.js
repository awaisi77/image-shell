const Connection = require("./dbConnection").Connection;

const UsersData = function () { };

UsersData.prototype.createNewUser = async function (params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/users.js");

  return sequelize
    .authenticate()
    .then(() => {

      return model
        .create({
          UserId: params.UserId,
          UserName: params.UserName,
          EmailAddress: params.EmailAddress,
          Bio: params.Bio,
          CreatedDateTime: params.CreatedDateTime || new Date(),
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
UsersData.prototype.getUserById = async function (id) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/users.js");

  var user = {};

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
          user = {
            UserId: result[0].Id,
            UserName: result[0].UserName,
            EmailAddress: result[0].EmailAddress,
            Bio: result[0].Bio,
            CreatedDateTime: result[0].CreatedDateTime
          };

          return {
            user: user,
            message: ""
          };
        } else {
          return {
            user: null,
            message: "Username does not exist."
          };
        }

        return user;
      });
  });
};

//update AttributeGroup
UsersData.prototype.update = async function (id, params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/users.js");

  let values = {};
  Object.keys(params).forEach(function (key) {
    values[key] = params[key];
  });

  console.log('Values: ', values);

  return sequelize
    .authenticate()
    .then(() => {
      return model
        .update(values, {
          where: {
            UserId: id
          }
        })
        .catch(error => {
          sequelize.connectionManager.close();

          throw error;
        });
    })
    .catch(error => {
      sequelize.connectionManager.close();

      throw error;
    });
};

exports.UsersData = UsersData;

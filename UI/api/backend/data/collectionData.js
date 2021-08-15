const Connection = require("./dbConnection").Connection;
const {
  v1: uuidv1
} = require('uuid');

const CollectionData = function () { };

CollectionData.prototype.addNewCollection = async function (params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/collection.js");

  let existingCollection = await this.getCollectionsByCollectionName(params.UserId, params.CollectionName);

  if (existingCollection == null || existingCollection.length == 0) {
    return sequelize
      .authenticate()
      .then(() => {

        return model
          .create({
            CollectionId: uuidv1(),
            UserId: params.UserId,
            CollectionName: params.CollectionName,
            Description: params.Description,
            Logo: params.Logo
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
  }
  else {
    throw new Error("Collection Name Already Exists");
  }
};

//get user by ID
CollectionData.prototype.getCollectionsByUserId = async function (id) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/collection.js");

  try {
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
            return result;
          } else {
            return null;
          }
        });
    });
  } catch (err) {
    throw err;
  }
};

CollectionData.prototype.getCollectionsByCollectionName = async function (id, name) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/collection.js");

  try {
    return sequelize.authenticate().then(() => {
      return model
        .findAll({
          where: {
            UserId: id,
            CollectionName: name
          },
          raw: true
        })
        .then(function (result) {
          sequelize.connectionManager.close();
          if (result != null && result.length > 0) {
            return result;
          } else {
            return null;
          }
        });
    });
  } catch (err) {
    throw err;
  }
};

CollectionData.prototype.getCollectionsByCollectionId = async function (userId, collectionId) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/collection.js");

  try {
    return sequelize.authenticate().then(() => {
      return model
        .findAll({
          where: {
            UserId: userId,
            CollectionId: collectionId
          },
          raw: true
        })
        .then(function (result) {
          sequelize.connectionManager.close();
          if (result != null && result.length > 0) {
            return result;
          } else {
            return null;
          }
        });
    });
  } catch (err) {
    throw err;
  }
};

//update AttributeGroup
CollectionData.prototype.update = async function (id, params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/collection.js");

  let existingCollection = await this.getCollectionsByCollectionName(params.UserId, params.CollectionName);

  if (existingCollection == null || existingCollection.length == 0) {

    let values = {};
    Object.keys(params).forEach(function (key) {
      values[key] = params[key];
    });

    return sequelize
      .authenticate()
      .then(() => {
        return model
          .update(values, {
            where: {
              CollectionId: id
            },
            raw: true
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
  }
  else {
    throw new Error("Collection Name Already Exists");
  }
};

exports.CollectionData = CollectionData;

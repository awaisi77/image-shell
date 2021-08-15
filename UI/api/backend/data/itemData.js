const Connection = require("./dbConnection").Connection;
const LevelData = require("./levelData").LevelData;
const StatsData = require("./statsData").StatsData;
const PropertiesData = require("./propertiesData").PropertiesData;

const {
  v1: uuidv1
} = require('uuid');

const ItemData = function () { };

ItemData.prototype.addNewItem = async function (params) {
  let connection = new Connection();
  let levelData = new LevelData();
  let statsData = new StatsData();
  let propertiesData = new PropertiesData();

  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/item.js");

  return sequelize
    .authenticate()
    .then(() => {

      return model
        .create({
          ItemId: uuidv1(),
          Image: params.Image,
          Name: params.Name,
          ExternalLink: params.ExternalLink,
          Description: params.Description,
          CollectionId: params.CollectionId,
          SensitiveContent: params.SensitiveContent
        })
        .then(function (result) {
          if (result != null && params.Stats != null) {
            for (var i = 0; i < params.Stats.length; i++) {
              params.Stats[i].ItemId = result.ItemId;
            }
            statsData.insert(params.Stats).then(function (result) { });
          }
          if (result != null && params.Properties != null) {
            for (var i = 0; i < params.Properties.length; i++) {
              params.Properties[i].ItemId = result.ItemId;
            }
            propertiesData.insert(params.Properties).then(function (result) { });
          }
          if (result != null && params.Levels != null) {
            for (var i = 0; i < params.Levels.length; i++) {
              params.Levels[i].ItemId = result.ItemId;
            }
            levelData.insert(params.Levels).then(function (result) { });
          }
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
ItemData.prototype.getItemsByCollectionId = async function (userId, collectionId) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();

  try {
    let result = await sequelize.query('CALL GetItemsFromCollection(:userId, :collectionId)', {
      replacements: { userId: userId, collectionId: collectionId }
    });
    return result;
  } catch (err) {
    throw err;
  }
};

ItemData.prototype.getItemByItemId = async function (itemId) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();

  try {
    let result = await sequelize.query('CALL GetItemById(:itemId)', {
      replacements: { itemId: itemId }
    });
    return result;
  } catch (err) {
    throw err;
  }
};


//get user by ID
ItemData.prototype.getAllItemsForMarket = async function () {
  let connection = new Connection();
  let sequelize = connection.getSequelize();

  try {
    let result = await sequelize.query('CALL GetAllItemsForMarket()', {
      replacements: {}
    });
    return result;
  } catch (err) {
    throw err;
  }
};

ItemData.prototype.getUnMintedItems = async function () {
  let connection = new Connection();
  let sequelize = connection.getSequelize();

  try {
    let result = await sequelize.query('CALL GetUnMintedItems()', {
      replacements: {}
    });
    return result;
  } catch (err) {
    console.log("Error in ItemData.prototype.getItemsByCollectionId: ", err);
    return null;
  }
};

//update AttributeGroup
ItemData.prototype.update = async function (id, params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/item.js");

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
            ItemId: id
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

exports.ItemData = ItemData;

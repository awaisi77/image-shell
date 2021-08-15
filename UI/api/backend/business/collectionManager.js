const CollectionData = require("../data/collectionData").CollectionData;

const CollectionManager = function () { };

CollectionManager.prototype.addNewCollection = async function (params) {
  try {

    let collectionData = new CollectionData();
    let result = await collectionData.addNewCollection(params);
    if (result != null) {
      result = {
        success: true,
        message: "New Collection Created",
        data: result
      };
    } else {
      result = {
        success: false,
        message: "Could not save collection",
        data: null
      };
    }
    return result;
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null
    };
  }
};

CollectionManager.prototype.updateCollection = async function (id, params) {
  try {

    let collectionData = new CollectionData();
    let result = await collectionData.update(id, params);
    if (result != null) {
      result = {
        success: true,
        message: "Collection Updated Successfully",
        data: result
      };
    } else {
      result = {
        success: false,
        message: "Could not Update Collection",
        data: null
      };
    }
    return result;
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null
    };
  }
};

CollectionManager.prototype.getCollectionsByUserId = async function (id) {
  try {
    let collectionData = new CollectionData();
    let result = await collectionData.getCollectionsByUserId(id);
    if (result != null) {
      result = {
        success: true,
        message: "Collections found!!!",
        data: result
      };
    } else {
      result = {
        success: true,
        message: "There are no collection for this user",
        data: []
      };
    }
    return result;
  } catch (error) {
    console.log("Error: ", error);
    return (result = {
      success: false,
      message: error.message,
      data: null
    });
  }
};

CollectionManager.prototype.getCollectionsByCollectionId = async function (userId, collectionId) {
  try {
    let collectionData = new CollectionData();
    let result = await collectionData.getCollectionsByCollectionId(userId, collectionId);
    if (result != null) {
      result = {
        success: true,
        message: "Collections found!!!",
        data: result
      };
    } else {
      result = {
        success: true,
        message: "There are no collection for this collectionId",
        data: []
      };
    }
    return result;
  } catch (error) {
    return (result = {
      success: false,
      message: error.message,
      data: null
    });
  }
};

exports.CollectionManager = CollectionManager;

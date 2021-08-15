const LevelData = require("../data/levelData").LevelData;

const LevelManager = function () { };

LevelManager.prototype.getLevelByItemId = async function (params) {
  try {

    let levelData = new LevelData();
    let result = await levelData.getLevelByItemId(params);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: "Item is added to the Sale"
      };
    } else {
      result = {
        success: "false",
        message: "Could not add item to the sale"
      };
    }

    return result;
  } catch (error) {
    console.log("Error: ", error);
    return (result = {
      success: "false",
      message: error.message
    });
  }
};

exports.LevelManager = LevelManager;

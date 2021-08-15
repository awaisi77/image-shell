const PropertiesData = require("../data/propertiesData").PropertiesData;

const PropertiesManager = function () { };

PropertiesManager.prototype.getPropertiesByItemId = async function (params) {
  try {

    let propertiesData = new PropertiesData();
    let result = await propertiesData.getPropertiesByItemId(params);
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

exports.PropertiesManager = PropertiesManager;

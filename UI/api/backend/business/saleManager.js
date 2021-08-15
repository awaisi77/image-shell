const SaleData = require("../data/saleData").SaleData;

const SaleManager = function () { };

SaleManager.prototype.putItemOnSale = async function (params) {
  try {

    let saleData = new SaleData();
    let result = await saleData.putItemOnSale(params);
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

SaleManager.prototype.getAllItemsOnSale = async function (userId) {
  try {

    let saleData = new SaleData();
    let result = await saleData.getAllItemsOnSale(userId);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: ""
      };
    } else {
      result = {
        success: "false",
        message: "Could not find any item on sale"
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

exports.SaleManager = SaleManager;

const StatsData = require("../data/statsData").StatsData;

const StatsManager = function () { };

StatsManager.prototype.getStatsByItemId = async function (params) {
  try {

    let statsData = new StatsData();
    let result = await statsData.getStatsByItemId(params);
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

exports.StatsManager = StatsManager;

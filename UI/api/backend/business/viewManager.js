const ViewData = require("../data/viewData").ViewData;

const ViewManager = function () { };

ViewManager.prototype.markView = async function (params) {
  try {

    let viewData = new ViewData();
    let result = await viewData.markView(params);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: "Marked as viewed"
      };
    } else {
      result = {
        success: "false",
        message: "Item could not marked as viewed"
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

exports.ViewManager = ViewManager;

const CurrencyData = require("../data/currencyData").CurrencyData;

const CurrencyManager = function () { };

CurrencyManager.prototype.getAllCurrencies = async function () {
  try {

    let currencyData = new CurrencyData();
    let result = await currencyData.getAllCurrencies();
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: ""
      };
    } else {
      result = {
        success: "false",
        message: "No currencies found"
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

exports.CurrencyManager = CurrencyManager;

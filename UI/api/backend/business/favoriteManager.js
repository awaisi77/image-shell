const FavoriteData = require("../data/favoriteData").FavoriteData;

const FavoriteManager = function () { };

FavoriteManager.prototype.markFavorite = async function (params) {
  try {

    let favoriteData = new FavoriteData();
    let result = await favoriteData.markFavorite(params);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: "Item added to Favorite"
      };
    } else {
      result = {
        success: "false",
        message: "Item could not added to Favorite"
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

FavoriteManager.prototype.unMarkFavorite = async function (params) {
  try {

    let favoriteData = new FavoriteData();
    let result = await favoriteData.unMarkFavorite(params);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: "Item removed from Favorite"
      };
    } else {
      result = {
        success: "false",
        message: "Could not remove item from Favorite"
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

exports.FavoriteManager = FavoriteManager;

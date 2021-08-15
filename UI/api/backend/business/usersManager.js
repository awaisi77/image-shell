const UsersData = require("../data/usersData").UsersData;
var empty = require('is-empty');

const UsersManager = function () { };

UsersManager.prototype.createNewUser = async function (params) {
  try {
    let usersData = new UsersData();
    let result = await usersData.getUserById(params.UserId);

    if (result.user == null || result.user.length === 0) {
      result = await usersData.createNewUser(params);
      result = {
        success: "true",
        result: result,
        message: "New User Created"
      };
    } else {
      result = {
        success: "false",
        message: "User already Exists"
      };
    }

    return result;
  } catch (error) {
    return (result = {
      success: "false",
      message: error.message
    });
  }
};

UsersManager.prototype.getUserById = async function (id) {
  let usersData = new UsersData();
  let result = await usersData.getUserById(id);
  return result;
};

//update
UsersManager.prototype.update = async function (id, params) {
  try {
    let usersData = new UsersData();
    let result = await usersData.update(id, params);

    if ((result[0] = 1)) {
      result = {
        success: "true",
        result: {
          Id: id
        },
        message: "Updated Information Updated Successfully"
      };
    } else {
      result = {
        success: "false",
        message: "Unable to update user info"
      };
    }

    return result;
  } catch (error) {
    //TODO Add logger
    return (result = {
      success: "false",
      message: error.message
    });
  }
};

exports.UsersManager = UsersManager;

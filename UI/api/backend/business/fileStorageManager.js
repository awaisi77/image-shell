const LocalStorageData = require("../data/localStorageData").LocalStorageData;
const path = require("path");
const FileStorageManager = function () {
};
//Fetching all files from remote location

FileStorageManager.prototype.writeFile = async function (params) {
    try {
        let storageObject = null;
        storageObject = new LocalStorageData();

        let result = await storageObject.writeFile(params);

        if (result != null && result != undefined) {
            return {
                success: true,
                message: result
            };
        } else {
            return {
                success: false,
                message: "Unable to write file"
            };
        }
    } catch (error) {
        throw error;
    }
};

function decodeFileName(endpoints, result) {
    result.files.forEach((element, Id) => {
        let file1 = element.split("-")[0];
        let file2 = element.substring(
            element.lastIndexOf("-") + 1,
            element.lastIndexOf(".")
        );
        let name = "";
        endpoints.data.result.forEach(element => {
            file1 == element.Id ? name = `${element.Name}-` : null
        })
        endpoints.data.result.forEach(element => {
            file2 == element.Id ? name += `${element.Name}` : null
        })
        result.files[Id] = name;
    });
}

exports.FileStorageManager = FileStorageManager;
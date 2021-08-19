const fs = require("fs");
const LocalStorageData = function () {

};

LocalStorageData.prototype.writeFile = async function (params) {
  console.log('params',params)
  try {
    let dir = "./storage/" + params.folderName;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const file = fs.createWriteStream(dir + "/" + params.fileName, { mode: 0o755 });
    console.log("====================CONTENT=================")
    console.log(params.content)

    const env = await convertToEnv(params.content)
    console.log('env:',env);
    file.write(env);
   // file.write(JSON.stringify(params.content));
    file.end();
    return "File Written successfully";
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

async function convertToEnv (object) {
  let envFile = ''
  for (const key of Object.keys(object)) {
    envFile += `${key}=${object[key]}\n`
  }
  return envFile
}

function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on("data", chunk => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}

function encodeFileName(endpoints, fileName) {
  let file1 = fileName.split("-")[0];
  let file2 = fileName.substring(
    fileName.lastIndexOf("-") + 1,
    fileName.length
  );
  let name = "";
  endpoints.data.result.forEach(element => {
    file1 == element.Name ? name = `${element.Id}-` : null
  })
  endpoints.data.result.forEach(element => {
    file2 == element.Name ? name += `${element.Id}` : null
  })
  return name + ".xsl"
}
exports.LocalStorageData = LocalStorageData;

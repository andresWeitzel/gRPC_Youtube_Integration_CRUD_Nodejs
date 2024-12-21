//Const-vars
let fs = require("fs");

const createJson = async (object, dirPath) => {
  try {
    fs.writeFile(dirPath, JSON.stringify(object, null, 4), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been created");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createJson,
};

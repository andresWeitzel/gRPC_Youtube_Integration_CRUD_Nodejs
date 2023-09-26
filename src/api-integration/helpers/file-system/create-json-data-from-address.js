//Const-vars
let fs = require("fs");
let path ="../data/data-from-address.json";

const createJson = async (object) => {
  try {
    fs.writeFile(
      path,
      JSON.stringify(object, null, 4),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File has been created");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createJson
};

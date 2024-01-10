//External
let fs = require("fs");
//Const
const CREATE_JSON_ERROR = "ERROR in createJson helper function.";
//Vars
let checkCreateJson;

const createJson = async (object, dirPath) => {
  try {
    checkCreateJson = false;

    fs.writeFile(dirPath, JSON.stringify(object, null, 4), (err) => {
      if (err) {
        console.log(CREATE_JSON_ERROR);
        return checkCreateJson;
      }
      console.log("File has been created");
    });
    checkCreateJson = true;
    return checkCreateJson;
  } catch (error) {
    msgResponse = CREATE_JSON_ERROR;
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return msgResponse;
  }
};

module.exports = {
  createJson,
};

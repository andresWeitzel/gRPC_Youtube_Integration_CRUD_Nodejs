//Helpers
const {
  createJson
} = require("../../../api/helpers/file-system/create-json-data-from-address");
const {
  getDataFromSpecificAddress
} = require("../../../api/request/get-data-from-address");
//Const-vars
let data;
let json;

const generateJsonFromSpecificAddress = async (ip) => {
  try {
    data = await getDataFromSpecificAddress(ip);

    json = await createJson(data);

    return json;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generateJsonFromSpecificAddress
};

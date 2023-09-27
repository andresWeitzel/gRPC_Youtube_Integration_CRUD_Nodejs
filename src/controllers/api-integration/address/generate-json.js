//Helpers
const {
  createJson
} = require("../../../api-integration/helpers/file-system/create-json-data-from-address");
const {
  getDataFromSpecificAddress
} = require("../../../api-integration/helpers/request/get-data-from-address");
//Enums
const { statusCode } = require("../../../enums/http/status-code");
//Const-vars
const statusCodeInternalServerError = statusCode.INTERNAL_SERVER_ERROR;
const statusCodeBadRequest = statusCode.BAD_REQUEST;
const statusCodeOk = statusCode.OK;
let ipParam;
let data;
let json;

const generateJsonFromSpecificAddress = async (req, res) => {
  try {
    //-- start with ipParam ---
    ipParam = req.params.ip;

    if (ipParam == null) {
      return res
        .status(statusCodeBadRequest)
        .send({
          error: "Bad request, the value for the ip parameter does not exist."
        });
    }
    //-- end with ipParam  ---
    data = await getDataFromSpecificAddress(ipParam);

    if (data == null) {
      return res
        .status(statusCodeInternalServerError)
        .send({
          error: "Internal Server Error, the IP data could not be obtained."
        });
    }

    return res.status(200).send(data);

    //json = await createJson(data);

    //return json;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generateJsonFromSpecificAddress
};

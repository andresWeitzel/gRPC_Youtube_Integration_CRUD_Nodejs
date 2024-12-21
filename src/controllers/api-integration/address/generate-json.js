//External
let path = require("path");
//Helpers
const {
  createJson,
} = require("../../../api-integration/helpers/file-system/create-json-data-from-address");
const {
  getDataFromSpecificAddress,
  getDataFromRandomAddress,
} = require("../../../api-integration/helpers/request/get-data-from-address");
//Enums
const { statusCode } = require("../../../enums/http/status-code");
//Const-vars
const statusCodeInternalServerError = statusCode.INTERNAL_SERVER_ERROR;
const statusCodeBadRequest = statusCode.BAD_REQUEST;
const statusCodeOk = statusCode.OK;
let filePathSpecificAddress =
  "../../../../api-integration/data/address/data-from-specific-address.json";
let dirPathSpecificAddress = path.join(__dirname + filePathSpecificAddress);
let filePathRandomAddress =
  "../../../../api-integration/data/address/data-from-random-addresses.json";
let dirPathRandomAddress = path.join(__dirname + filePathRandomAddress);
let ipParam;
let data;
let json;

const generateJsonFromSpecificAddress = async (req, res) => {
  try {
    //-- start with ipParam ---
    ipParam = req.params.ip;

    if (ipParam == null) {
      return res.status(statusCodeBadRequest).send({
        error: "Bad request, the value for the ip parameter does not exist.",
      });
    }
    //-- end with ipParam  ---
    data = await getDataFromSpecificAddress(ipParam);

    if (data == null) {
      return res.status(statusCodeInternalServerError).send({
        error: "Internal Server Error, the IP data could not be obtained.",
      });
    }

    json = await createJson(data, dirPathSpecificAddress);
  } catch (error) {
    console.log(error);
    data = error;
  }

  return res.status(200).send(data);
};

const generateJsonFromRandomAddress = async (req, res) => {
  try {
    //-- start with ipParam ---
    ipParam = req.params.ip;

    if (ipParam == null) {
      return res.status(statusCodeBadRequest).send({
        error: "Bad request, the value for the ip parameter does not exist.",
      });
    }
    //-- end with ipParam  ---
    data = await getDataFromRandomAddress(ipParam);

    if (data == null) {
      return res.status(statusCodeInternalServerError).send({
        error: "Internal Server Error, the IP data could not be obtained.",
      });
    }

    json = await createJson(data, dirPathRandomAddress);
  } catch (error) {
    console.log(error);
    data = error;
  }

  return res.status(200).send(data);
};

module.exports = {
  generateJsonFromSpecificAddress,
  generateJsonFromRandomAddress,
};

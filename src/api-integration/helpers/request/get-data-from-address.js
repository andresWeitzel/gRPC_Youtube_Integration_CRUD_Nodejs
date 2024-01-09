//External
const axios = require("axios");
//Helpers
const { splitAddressByLastDot } = require("../format/address");
//Const
const URL = process.env.WHOIS_BASE_URL;
const IP_LENGTH = 100;
const GET_DATA_FROM_SPECIFIC_ADDRESS_ERROR_NAME =
  "ERROR in getDataFromSpecificAddress helper function.";
const GET_DATA_FROM_RANDOM_ADDRESS_ERROR_NAME =
  "ERROR in getDataFromRandomAddress helper function.";
//Vars
let axiosResponse;
let responseData;
let arrayDataAddress;
let msgResponse;
let msgLog;

const getDataFromSpecificAddress = async (ip) => {
  try {
    axiosResponse = await axios.get(URL + ip);

    responseData = axiosResponse?.data || null;

    return responseData;
  } catch (error) {
    msgResponse = GET_DATA_FROM_SPECIFIC_ADDRESS_ERROR_NAME;
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return msgResponse;
  }
};

const getDataFromRandomAddress = async (ip) => {
  try {
    arrayDataAddress = [];
    splitIp = await splitAddressByLastDot(ip);
    firstValueForIp = splitIp[0];
    lastValueForIp = parseInt(splitIp[1]);

    for (let i = 0; i < IP_LENGTH; i++) {
      if (lastValueForIp >= 253) return;
      ip = `${firstValueForIp}.${lastValueForIp}`;
      lastValueForIp++;
      await axios.get(URL + ip).then(function (response) {
        responseData = response?.data;
        if (responseData != undefined || null) {
          arrayDataAddress.push(responseData);
        }
      });
    }
    return arrayDataAddress;
  } catch (error) {
    msgResponse = GET_DATA_FROM_RANDOM_ADDRESS_ERROR_NAME;
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return msgResponse;
  }
};

module.exports = {
  getDataFromSpecificAddress,
  getDataFromRandomAddress,
};

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
    let arrayDataAddress = [];
    let [firstValueForIp, lastValueForIp] = await splitAddressByLastDot(ip);
    let ipBase = `${firstValueForIp}.`;

    for (let i = 0; i < IP_LENGTH; i++) {
      if (lastValueForIp >= 253) break;

      const currentIp = `${ipBase}${lastValueForIp}`;
      lastValueForIp++; 

      try {
        const response = await axios.get(URL + currentIp);
        const responseData = response?.data;

        if (responseData) {
          arrayDataAddress.push(responseData);
        }
      } catch (innerError) {
        console.log(`Error fetching data for IP ${currentIp}:`, innerError);
      }
    }

    return arrayDataAddress;
  } catch (error) {
    const msgResponse = GET_DATA_FROM_RANDOM_ADDRESS_ERROR_NAME;
    const msgLog = `${msgResponse} Caused by ${error}`;
    console.log(msgLog);
    return msgResponse;
  }
};



module.exports = {
  getDataFromSpecificAddress,
  getDataFromRandomAddress,
};

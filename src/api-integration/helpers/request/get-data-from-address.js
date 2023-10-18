//External
const axios = require("axios");
const { splitAddressByLastDot } = require("../format/address");
//Const-vars
const URL = process.env.WHOIS_BASE_URL;
let ip;
let ipsLength = 100;
let axiosResponse;
let responseData;
let arrayDataAddress;

const getDataFromSpecificAddress = async (ip) => {
  try {
    axiosResponse = await axios.get(URL + ip);

    responseData = axiosResponse?.data || null;
  } catch (error) {
    console.log(error);
    responseData = null;
  }
  return responseData;
};

const getDataFromRandomAddress = async (ip) => {
  try {
    arrayDataAddress = [];
    splitIp = await splitAddressByLastDot(ip);
    firstValueForIp = splitIp[0];
    lastValueForIp = parseInt(splitIp[1]);

    for (let i = 0; i < ipsLength; i++) {
      if (lastValueForIp >= 253) return;
      ip = `${firstValueForIp}.${lastValueForIp}`;
      lastValueForIp++;
      await axios.get(URL + ip).then(function (response) {
        responseData = response?.data;
        if (responseData != undefined || null) {
          arrayDataAddress.push(responseData);
          //console.log(responseData);
        }
      });
    }
  } catch (error) {
    console.log(error);
    arrayDataAddress = null;
  }

  return arrayDataAddress;
};

module.exports = {
  getDataFromSpecificAddress,
  getDataFromRandomAddress,
};

//External
const axios = require("axios");
//Const-vars
const URL = process.env.WHOIS_BASE_URL;
let ip;
let ipsLength = 100;
let responseData;
let arrayDataAddress;

const getDataFromSpecificAddress = async (ip) => {
  try {
  await axios.get(URL + ip).then(function (response) {
      responseData = response?.data;
    });
  } catch (error) {
    console.log(error);
    responseData = null;
  }
  return responseData;
};

const getDataFromRandomAddress = async () => {
  try {
    arrayDataAddress = [];
    for (let i = 0; i < ipsLength; i++) {
      ip = `8.8.4.${i}`;
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
  getDataFromRandomAddress
};

//External
const axios = require("axios");
const { createJson } = require("../file-system/create-json-data-from-address");
//Const-vars
const URL = process.env.WHOIS_BASE_URL;
let ip;
let ipsLength = 100;
let responseData;
let arrayDataAddress;

const getDataFromSpecificAddress = async (ip) => {
  try {
    arrayDataAddress = [];
    axios.get(URL + ip).then(function (response) {
      responseData = response?.data;
      if (responseData != undefined || null) {
        arrayDataAddress.push(responseData);
        //console.log(responseData);
      }
    });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
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
    await createJson(arrayDataAddress);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};

getDataFromRandomAddress();

module.exports = {
  getDataFromSpecificAddress,
  getDataFromRandomAddress
};

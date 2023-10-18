//External
const axios = require("axios");
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

const getDataFromRandomAddress = async () => {
  try {
    arrayDataAddress = [];
    for (let i = 0; i < ipsLength; i++) {
      ip = `8.8.4.${i}`;
      axiosResponse = await axios.get(URL + ip);

      responseData = axiosResponse?.data || null;

      if (responseData != undefined || null) {
        arrayDataAddress.push(responseData);
        //console.log(responseData);
      }
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

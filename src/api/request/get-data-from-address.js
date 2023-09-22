//External
const axios = require("axios");
//Const-vars
const urlHost = "https://ipwho.is/";
let arrayIps = ["8.8.4.4","8.8.4.5","8.1.4.4", "8.2.4.4","8.8.4.4", "8.8.4.8", "8.1.4.9", "1.4.4.4", "8.2.4.9","2.8.4.4"];
let responseData;
let arrayDataAddress = [];

const getDataFromAddress = async (arrayIps) => {
  try {
    axios.get(urlHost + arrayIps).then(function (response) {
      responseData = response?.data;
      if(responseData != undefined || null){
        arrayDataAddress.push(responseData);
        console.log(responseData);
      }
    });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};
for(let i of arrayIps){
   //console.log(i);
    getDataFromAddress(i);
}

module.exports = {
  getDataFromAddress
};

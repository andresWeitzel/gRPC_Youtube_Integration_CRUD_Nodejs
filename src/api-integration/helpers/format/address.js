"use strict";
//Const
const SPLIT_ADDRESS_ERROR = "ERROR in validatePathParameters helper function.";
//Vars
let index;
let indexFormat;
let msgResponse;
let msgLog;

const splitAddressByLastDot = async (ip) => {
  try {
    index = ip.lastIndexOf(".");
    indexFormat = [ip.slice(0, index), ip.slice(index + 1)];
    return indexFormat;
  } catch (error) {
    msgResponse = SPLIT_ADDRESS_ERROR;
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return msgResponse;
  }
};

module.exports = {
  splitAddressByLastDot,
};

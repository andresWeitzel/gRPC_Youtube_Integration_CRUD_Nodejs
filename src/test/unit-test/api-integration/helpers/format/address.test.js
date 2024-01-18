"use strict";
//Helpers
const {
  splitAddressByLastDot,
} = require("../../../../../api-integration/helpers/format/address");
//Const
const MOCK_STRING_01 = process.env.MOCK_STRING_01;
const MOCK_NUMBER_01 = parseInt(process.env.MOCK_NUMBER_01);
//Vars
let msg;
let splitAddressByLastDotResult;

describe("- splitAddressByLastDot helper (Unit Test)", () => {
  describe("1) Check cases for arguments.", () => {
    msg =
      "Should return a string type if no arguments are passed (This function expects a single argument)";
    it(msg, async () => {
      splitAddressByLastDotResult = await splitAddressByLastDot();
      await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
    });
    msg =
      "Should return a object type if a valid argument is passed (This function expects a single argument)";
    it(msg, async () => {
      splitAddressByLastDotResult = await splitAddressByLastDot(MOCK_STRING_01);
      await expect(typeof splitAddressByLastDotResult == "object").toBe(true);
    });

    msg =
      "Should return a object type if two valid arguments are passed (This function expects a single argument)";
    it(msg, async () => {
      splitAddressByLastDotResult = await splitAddressByLastDot(
        MOCK_STRING_01,
        MOCK_STRING_01
      );
      await expect(typeof splitAddressByLastDotResult == "object").toBe(true);
    });

    msg =
      "Should return a string type if an invalid argument is passed (This function expects a single argument)";
    it(msg, async () => {
      splitAddressByLastDotResult = await splitAddressByLastDot(MOCK_NUMBER_01);
      await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
    });

    msg =
      "Should return a string type if a null value is passed (This function expects a single argument)";
    it(msg, async () => {
      splitAddressByLastDotResult = await splitAddressByLastDot(null);
      await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
    });

    msg =
      "Should return a string type if a undefined value is passed (This function expects a single argument)";
    it(msg, async () => {
      splitAddressByLastDotResult = await splitAddressByLastDot(undefined);
      await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
    });
  });

  describe("2) Check cases for error.", () => {
    msg =
      "Should not return a error message and not throw an error if no argument is passed to the function.";
    it(msg, async () => {
      await expect(async () => await splitAddressByLastDot()).not.toThrow(
        Error
      );
    });

    msg =
      "Should not return a error message and not throw an error if a new Error() is passed to the function.";
    it(msg, async () => {
      await expect(
        async () => await splitAddressByLastDot(new Error())
      ).not.toThrow(Error);
    });
  });
});

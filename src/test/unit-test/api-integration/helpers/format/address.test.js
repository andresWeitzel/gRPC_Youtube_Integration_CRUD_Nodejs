"use strict";
//Helpers
const {
  splitAddressByLastDot,
} = require("../../../../../api-integration/helpers/format/address");
//Const
const MOCK_STRING_VALUE = "";
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
      splitAddressByLastDotResult = await splitAddressByLastDot(
        MOCK_STRING_VALUE
      );
      await expect(typeof splitAddressByLastDotResult == "object").toBe(true);
    });

    // msg = "Should return a string type if others arguments are passed ";
    // it(msg, async () => {
    //   splitAddressByLastDotResult = await currentDateTime(TODAY_DATE);
    //   await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
    // });

    // msg = "Should return a string type if a null value is passed";
    // it(msg, async () => {
    //   splitAddressByLastDotResult = await currentDateTime(null);
    //   await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
    // });

    // msg = "Should return a string type if a undefined value is passed";
    // it(msg, async () => {
    //   splitAddressByLastDotResult = await currentDateTime(undefined);
    //   await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
    // });
  });

  //   describe("2) Check cases for return.", () => {
  //     msg =
  //       "Should return a string type with 'DD/MM/YY HH:MM:SS' format (Ex: 2023-03-18 21:06:15)";
  //     it(msg, async () => {
  //       splitAddressByLastDotResult = await currentDateTime();
  //       await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
  //       let characters = "/,:";
  //       let totalCharacters = 4; // total characters for DD/MM/YY HH:MM:SS
  //       let numberCharactersMatch = await calculateNumberOfCharactersMatch(
  //         splitAddressByLastDotResult,
  //         characters
  //       );
  //       await expect(numberCharactersMatch >= totalCharacters).toBe(true);
  //     });
  //   });

  //   describe("3) Check cases for error.", () => {
  //     msg =
  //       "Should not return a error message if no argument is passed to the function.";
  //     it(msg, async () => {
  //       await expect(async () => await currentDateTime()).not.toThrow(Error);
  //       splitAddressByLastDotResult = await currentDateTime();
  //       await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
  //     });

  //     msg =
  //       "Should return a string and not throw an Error if a new Error is passed";
  //     it(msg, async () => {
  //       splitAddressByLastDotResult = await currentDateTime(new Error());
  //       await expect(async () => splitAddressByLastDotResult).not.toThrow(Error);
  //       await expect(typeof splitAddressByLastDotResult == "string").toBe(true);
  //     });
  //   });
});

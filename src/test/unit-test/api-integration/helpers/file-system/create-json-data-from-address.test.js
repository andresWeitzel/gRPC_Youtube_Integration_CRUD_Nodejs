"use strict";
//Helpers
const {
  createJson,
} = require("../../../../../api-integration/helpers/file-system/create-json-data-from-address");
//Const
const MOCK_STRING_VALUE = "";
const MOCK_OBJECT_VALUE ={mockObjectValue:"MOCK_OBJECT_VALUE"};
//Vars
let msg;
let createJsonResult;

describe("- createJson helper (Unit Test)", () => {
  describe("1) Check cases for arguments.", () => {
    msg =
      "Should return a string type if no arguments are passed (This function expects two arguments, the first of type string or an instance of Buffer, TypedArray or DataView. The second of type string)";
    it(msg, async () => {
      createJsonResult = await createJson();
      console.log(createJsonResult);
      await expect(typeof createJsonResult == "string").toBe(true);
    });

    msg =
    "Should return a string type if the first argument is passed (This function expects two arguments, the first of type string or an instance of Buffer, TypedArray or DataView. The second of type string)";
  it(msg, async () => {
    createJsonResult = await createJson(MOCK_OBJECT_VALUE);
    console.log(createJsonResult);
    await expect(typeof createJsonResult == "string").toBe(true);
  });
    // msg =
    //   "Should return a object type if a valid argument is passed (This function expects a single argument)";
    // it(msg, async () => {
    //   createJsonResult = await splitAddressByLastDot(
    //     MOCK_STRING_VALUE
    //   );
    //   await expect(typeof createJsonResult == "object").toBe(true);
    // });

    // msg =
    //   "Should return a object type if two valid arguments are passed (This function expects a single argument)";
    // it(msg, async () => {
    //   createJsonResult = await splitAddressByLastDot(
    //     MOCK_STRING_VALUE,
    //     MOCK_STRING_VALUE
    //   );
    //   await expect(typeof createJsonResult == "object").toBe(true);
    // });

    // msg =
    //   "Should return a string type if an invalid argument is passed (This function expects a single argument)";
    // it(msg, async () => {
    //   createJsonResult = await splitAddressByLastDot(122212131);
    //   await expect(typeof createJsonResult == "string").toBe(true);
    // });

    // msg =
    //   "Should return a string type if a null value is passed (This function expects a single argument)";
    // it(msg, async () => {
    //   createJsonResult = await splitAddressByLastDot(null);
    //   await expect(typeof createJsonResult == "string").toBe(true);
    // });

    // msg =
    //   "Should return a string type if a undefined value is passed (This function expects a single argument)";
    // it(msg, async () => {
    //   createJsonResult = await splitAddressByLastDot(undefined);
    //   await expect(typeof createJsonResult == "string").toBe(true);
    // });
  });

  //   describe("2) Check cases for error.", () => {
  //     msg =
  //       "Should not return a error message and not throw an error if no argument is passed to the function.";
  //     it(msg, async () => {
  //       await expect(async () => await splitAddressByLastDot()).not.toThrow(
  //         Error
  //       );
  //     });

  //     msg =
  //       "Should not return a error message and not throw an error if a new Error() is passed to the function.";
  //     it(msg, async () => {
  //       await expect(
  //         async () => await splitAddressByLastDot(new Error())
  //       ).not.toThrow(Error);
  //     });
  //   });
});

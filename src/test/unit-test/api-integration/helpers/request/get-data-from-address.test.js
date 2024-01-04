"use strict";
//Helpers
const {
  getDataFromSpecificAddress,
} = require("../../../../../api-integration/helpers/request/get-data-from-address");
//Const
const MOCK_OBJECT_VALUE = { mock_object_key: "mock_object_value" };
const MOCK_INVALID_IP_VALUE = "192.77";
const MOCK_VALID_IP_VALUE = "8.8.8.8";
//Vars
let msg;
let getDataFromSpecificAddressResult;

describe("- getDataFromSpecificAddress helper (Unit Test)", () => {
  describe("1) Check cases for arguments.", () => {
    msg =
      "Should return a string type if no arguments are passed (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress();
      await expect(typeof getDataFromSpecificAddressResult == "string").toBe(
        true
      );
    });

    msg =
      "Should return a string type if not string argument is passed (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
        MOCK_OBJECT_VALUE
      );
      await expect(typeof getDataFromSpecificAddressResult == "string").toBe(
        true
      );
    });

    msg =
      "Should return a string type if an invalid ip is passed (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
        MOCK_INVALID_IP_VALUE
      );
      await expect(typeof getDataFromSpecificAddressResult == "string").toBe(
        true
      );
    });

    msg =
      "Should return a string type if a valid ip is passed (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
        MOCK_VALID_IP_VALUE
      );
      await expect(typeof getDataFromSpecificAddressResult == "string").toBe(
        true
      );
    });
    // msg =
    //   "Should return a object type if a valid argument is passed (This function expects a single argument)";
    // it(msg, async () => {
    //   getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
    //     MOCK_STRING_VALUE
    //   );
    //   await expect(typeof getDataFromSpecificAddressResult == "object").toBe(true);
    // });

    // msg =
    //   "Should return a object type if two valid arguments are passed (This function expects a single argument)";
    // it(msg, async () => {
    //   getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
    //     MOCK_STRING_VALUE,
    //     MOCK_STRING_VALUE
    //   );
    //   await expect(typeof getDataFromSpecificAddressResult == "object").toBe(true);
    // });

    // msg =
    //   "Should return a string type if an invalid argument is passed (This function expects a single argument)";
    // it(msg, async () => {
    //   getDataFromSpecificAddressResult = await getDataFromSpecificAddress(122212131);
    //   await expect(typeof getDataFromSpecificAddressResult == "string").toBe(true);
    // });

    // msg =
    //   "Should return a string type if a null value is passed (This function expects a single argument)";
    // it(msg, async () => {
    //   getDataFromSpecificAddressResult = await getDataFromSpecificAddress(null);
    //   await expect(typeof getDataFromSpecificAddressResult == "string").toBe(true);
    // });

    // msg =
    //   "Should return a string type if a undefined value is passed (This function expects a single argument)";
    // it(msg, async () => {
    //   getDataFromSpecificAddressResult = await getDataFromSpecificAddress(undefined);
    //   await expect(typeof getDataFromSpecificAddressResult == "string").toBe(true);
    // });
  });

  //   describe("2) Check cases for error.", () => {
  //     msg =
  //       "Should not return a error message and not throw an error if no argument is passed to the function.";
  //     it(msg, async () => {
  //       await expect(async () => await getDataFromSpecificAddress()).not.toThrow(
  //         Error
  //       );
  //     });

  //     msg =
  //       "Should not return a error message and not throw an error if a new Error() is passed to the function.";
  //     it(msg, async () => {
  //       await expect(
  //         async () => await getDataFromSpecificAddress(new Error())
  //       ).not.toThrow(Error);
  //     });
  //   });
});

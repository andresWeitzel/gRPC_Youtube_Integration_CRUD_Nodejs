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

    msg =
      "Should return a string type if a null value is passed (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(null);
      await expect(typeof getDataFromSpecificAddressResult == "string").toBe(
        true
      );
    });

    msg =
      "Should return a string type if an undefined value is passed (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
        undefined
      );
      await expect(typeof getDataFromSpecificAddressResult == "string").toBe(
        true
      );
    });
  });

  describe("2) Check cases for error.", () => {
    msg =
      "Should not thrown an Error if a new Error is passed for arguments. (This function expects a single argument of string type)";
    it(msg, async () => {
      let newError = new Error();
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
        newError
      );
      await expect(async () => getDataFromSpecificAddressResult).not.toThrow(
        Error
      );
    });

    msg =
      "Should not thrown an Error if no arguments is passed to the function. (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress();
      await expect(async () => getDataFromSpecificAddressResult).not.toThrow(
        Error
      );
    });

    msg =
      "Should not thrown an Error if null value is passed to the function. (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(null);
      await expect(async () => getDataFromSpecificAddressResult).not.toThrow(
        Error
      );
    });

    msg =
      "Should not thrown an Error if undefined value is passed to the function. (This function expects a single argument of string type)";
    it(msg, async () => {
      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
        undefined
      );
      await expect(async () => getDataFromSpecificAddressResult).not.toThrow(
        Error
      );
    });

    msg =
      "Should return a string type with 'ERROR in getDataFromSpecificAddress helper function.' value if a new Error is passed for arguments.";
    it(msg, async () => {
      let newError = new Error();
      const GET_DATA_FROM_SPECIFIC_ADDRESS_ERROR_NAME =
        "ERROR in getDataFromSpecificAddress helper function.";

      getDataFromSpecificAddressResult = await getDataFromSpecificAddress(
        newError
      );
      await expect(getDataFromSpecificAddressResult).toMatch(
        GET_DATA_FROM_SPECIFIC_ADDRESS_ERROR_NAME
      );
    });
  });
});

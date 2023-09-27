//External
const addressRoutes = require("express").Router();
//Controllers
const {
  generateJsonFromSpecificAddress
} = require("../../../../controllers/api-integration/address/generate-json");

addressRoutes.get(
  "/generate-json-by-specific-address/:ip",
  generateJsonFromSpecificAddress
);

module.exports = addressRoutes;

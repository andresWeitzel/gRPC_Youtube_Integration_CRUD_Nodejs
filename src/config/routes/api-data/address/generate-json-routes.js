//External
const addressRoutes = require("express").Router();
//Controllers
const {
  generateJsonFromSpecificAddress,
  generateJsonFromRandomAddress,
} = require("../../../../controllers/api-integration/address/generate-json");

addressRoutes.get(
  "/generate-json-by-specific-address/:ip",
  generateJsonFromSpecificAddress,
);

addressRoutes.get(
  "/generate-json-by-random-address/:ip",
  generateJsonFromRandomAddress,
);

module.exports = addressRoutes;

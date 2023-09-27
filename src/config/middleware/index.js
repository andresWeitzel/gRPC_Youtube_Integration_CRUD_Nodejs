//External
const express = require("express");
let morgan = require("morgan");
let cors = require("cors");
let listEndpoints = require('express-list-endpoints');
//Env vars
const API_GRPC_IP_LOCAL_BASE_URL = process.env.API_GRPC_IP_LOCAL_BASE_URL;
const APP_PORT = process.env.APP_FIRST_PORT || process.env.APP_SECOND_PORT;
const API_LOCAL_BASE_ENDPOINT= `${API_GRPC_IP_LOCAL_BASE_URL}:${APP_PORT}`;
const API_GRPC_IP_ENDPOINT_ADDRESS_NAME_URL = process.env.
API_GRPC_IP_ENDPOINT_ADDRESS_NAME_URL;
//Config router
const addressRoutes = require("../routes/api-data/address/generate-json-routes");


/**
 * @description initial settings for cors, express, etc (Middleware)
 * @returns an express object with the initial settings
 */
const appMiddleware = async () => {
  try {
    const app = express();

    //Using morgan-middleware
    app.use(morgan("dev"));

    //-- start cors --
    //Set cors
    var corsOptions = {
      origin: API_LOCAL_BASE_ENDPOINT
    };
    //Use cors options
    app.use(cors(corsOptions));
    //-- end cors --

    //-- start config for data api --
    //Use express with json format
    app.use(express.json());

    //Only fort strict format configured
    app.use(express.urlencoded({ extended: true }));
    //-- end config for data api --

    //-- start with routes --
    app.use(API_GRPC_IP_ENDPOINT_ADDRESS_NAME_URL, addressRoutes);
    //-- end with routes --

    //-- See all endpoints    
    console.log(listEndpoints(app));




    return app;
  } catch (error) {
    console.log(`Error in appMiddleware() function. Caused by ${error}`);
  }
};

module.exports = {
  appMiddleware
};

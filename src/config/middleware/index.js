//External
const express = require("express");
let morgan = require("morgan");
let cors = require("cors");
let listEndpoints = require('express-list-endpoints');
//Env vars
const API_GRPC_IP_LOCAL_BASE_URL = process.env.API_GRPC_IP_LOCAL_BASE_URL;
const API_GRPC_IP_ENDPOINT_NAME_URL = process.env.API_GRPC_IP_ENDPOINT_NAME_URL;
//Config router
const filePathsCheckOpRoutes = require("../routes/file-paths/check-operations-routes");


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
      origin: API_GRPC_IP_LOCAL_BASE_URL
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
    app.use(API_GRPC_IP_ENDPOINT_NAME_URL, filePathsCheckOpRoutes);
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

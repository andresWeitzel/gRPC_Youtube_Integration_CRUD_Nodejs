
//External
require("dotenv").config();
//Environment vars
const APP_PORT = process.env.APP_FIRST_PORT || process.env.APP_SECOND_PORT;
//Config middleware
const { appMiddleware } = require("./config/middleware");
//Const-vars
let app;

/**
 * @description function in charge of starting the server, adding the initial configuration and setting the http routes
 * @returns active instance of the server for handling requests and responses
 */
const run = async () => {
  try {
    //Middleware
    app = await appMiddleware();    

    //Server
    app.listen(APP_PORT, async () => {
      console.log(`Server is running on port ${APP_PORT}`);
    });
  } catch (error) {
    msg = `Error in run() function, server.js file. Caused by ${error}`;
    console.log(msg);
  }
};

run();
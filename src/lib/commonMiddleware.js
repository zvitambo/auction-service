const cors = require("@middy/http-cors");
const middy = require("@middy/core");
const httpEventNormalizer = require("@middy/http-event-normalizer");
const httpJsonBodyParser = require("@middy/http-json-body-parser");
const httpErrorHandler = require("@middy/http-error-handler");


module.exports = (handler) =>
  middy(handler).use([
    httpJsonBodyParser(),
    httpEventNormalizer(),
    httpErrorHandler(),
    cors() 
]);


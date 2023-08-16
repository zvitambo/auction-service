const { uuid } = require('uuid').v4;
const AWS = require('aws-sdk');
const middy = require("@middy/core");
const createAuctionSchema = require("../lib/schemas/createAuctionSchema");
const validator = require("@middy/validator");

const httpEventNormalizer = require("@middy/http-event-normalizer");
const httpJsonBodyParser = require("@middy/http-json-body-parser");
const httpErrorHandler = require("@middy/http-error-handler");
const createError = require('http-errors');

const dynamodb = new AWS.DynamoDB.DocumentClient()


async function createAuction(event, context) {

  const {title} = event.body;
  const {email } = event.requestContext.authorizer
  const now = new Date();
  const endDate = new Date();
  endDate.setHours(now.getHours() + 1)

  const auction = {
    id: uuid(),
    title,
    status: "OPEN",
    createdAt: now.toISOString(),
    endingAt: endDate.toISOString(),
    highestBid: {
      amount: 0,
    },
    seller: email
  };

 
   try {
     await dynamodb
       .put({
         TableName: process.env.AUCTIONS_TABLE_NAME,
         Item: auction,
       })
       .promise();
   } catch (error) {
      console.log(error);
      throw new createError.InternalServerError(error);
   }

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}

module.exports.handler = middy(createAuction)
  .use(httpEventNormalizer())
  .use(httpJsonBodyParser())
  .use(httpErrorHandler())
  .use(validator({inputSchema: createAuctionSchema}));




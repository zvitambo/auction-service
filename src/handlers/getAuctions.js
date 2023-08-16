const AWS = require("aws-sdk");
const commonMiddleware = require("../lib/commonMiddleware");
const getAuctionSchema = require("../lib/schemas/getAuctionSchema");
const createError = require("http-errors");
const validator = require("@middy/validator");

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getAuctions(event, context) {
  let auctions;
  const { status } = event.queryStringParameters;

  try {
    const params = {
      TableName: process.env.AUCTIONS_TABLE_NAME,
      IndexName: "statusAndEndDate",
      KeyConditionExpression: "#status = :status",
      ExpressionAttributeValues: {
        ":status": status,
      },
      ExpressionAttributeNames: {
        "#status": "status",
      },
    };

    const result = await dynamodb.scan(params).promise();
    auctions = result.Items;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auctions),
  };
}

module.exports.handler = commonMiddleware(getAuctions).use(
  validator({ inputSchema: getAuctionSchema, useDefaults: true })
);

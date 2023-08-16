const AWS = require("aws-sdk");
const commonMiddleware = require("../lib/commonMiddleware");
const getAuctionById = require("../lib/getAuctionById");
const createError = require("http-errors");

const dynamodb = new AWS.DynamoDB.DocumentClient();

// async function getAuctionById(id) {
//   let auction;
//   try {
//     const result = await dynamodb
//       .get({ TableName: process.env.AUCTIONS_TABLE_NAME, key: { id: id } })
//       .promise();
//     auction = result.Item;
//   } catch (error) {
//     console.error(error);
//     throw new createError.InternalServerError(error);
//   }

//   if (!auction)
//     throw new createError.NotFound(`Auction with ID ${id} not found`);

//   return auction;
// }

async function getAuction(event, context) {
  const { id } = event.pathParameters;

  const auction = await getAuctionById(id);

  return {
    statusCode: 200,
    body: JSON.stringify(auction),
  };
}

module.exports.handler = commonMiddleware(getAuction);

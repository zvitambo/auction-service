const AWS = require("aws-sdk");
const commonMiddleware = require("../lib/commonMiddleware");
const getAuctionById = require("../lib/getAuctionById");
const createError = require("http-errors");
const validator = require("@middy/validator");
const placeBidSchema = require("../lib/schemas/placeBidSchema");

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function placeBid(event, context) {
  const { id } = event.pathParameters;
  const { amount } = event.body;
  const { email } = event.requestContext.authorizer;

  const auction = await getAuctionById(id);

  if (email === auction.seller)
    throw new createError.Forbidden("You can not bid on your own auctions");

  if (email === auction.highestBid.bidder)
    throw new createError.Forbidden("You are already the highest bidder");

  if (auction.status !== "OPEN")
    throw new createError.Forbidden("You can not bid on closed auctions");

  if (amount <= auction.highestBid.amount)
    throw new createError.Forbidden(
      `your bid must be higher than ${auction.highestBid.amount}`
    );

  try {
    const params = {
      TableName: process.env.AUCTIONS_TABLE_NAME,
      Key: { id },
      UpdateExpression:
        "set highestBid.amount = :amount, highestBid.bidder = :bidder",
      ExpressionAttributeValues: {
        ":amount": amount,
        ":bidder": email,
      },
      ReturnValues: "ALL_NEW",
    };

    let updatedAuction;

    const result = await dynamodb.update(params).promise();
    updatedAuction = result.Attributes;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  if (!updatedAuction)
    throw new createError.NotFound(`Auction with ID ${id} not found`);

  return {
    statusCode: 200,
    body: JSON.stringify(updatedAuction),
  };
}

module.exports.handler = commonMiddleware(placeBid).use(
  validator({ inputSchema: placeBidSchema })
);

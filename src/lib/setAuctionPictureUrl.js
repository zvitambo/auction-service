const AWS = require("aws-sdk");
const createError = require("http-errors");


const dynamodb = new AWS.DynamoDB.DocumentClient();

async function setAuctionPictureUrl(id, pictureUrl) {
  try {
    const params = {
      TableName: process.env.AUCTIONS_TABLE_NAME,
      Key: { id },
      UpdateExpression: "set pictureUrl = :pictureUrl",
      ExpressionAttributeValues: {
        ":pictureUrl": pictureUrl,
      },
      ReturnValues: "ALL_NEW",
    };

    let updatedAuction;

    const result = await dynamodb.update(params).promise();
    updatedAuction = result.Attributes;
    return updatedAuction;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
}

module.exports = { setAuctionPictureUrl };

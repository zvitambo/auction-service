const getAuctionById = require("../lib/getAuctionById");
const { uploadPictureToS3 } = require("../lib/uploadPictureToS3");
const { setAuctionPictureUrl } = require("../lib/setAuctionPictureUrl");
const middy = require("@middy/core");
const validator = require("@middy/validator");
const httpErrorHandler = require("@middy/http-error-handler");
const createError = require("http-errors");
const uploadAuctionPictureSchema = require("../lib/schemas/uploadAuctionPictureSchema");
const cors = require("@middy/http-cors");

async function uploadAuctionPicture(event) {
  const { id } = event.pathParameters;
  const { email } = event.requestContext.authorizer;
  const auction = await getAuctionById(id);
  const base64 = event.body.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64, "base64");
  let updatedAuction;
  try {
    if (email !== auction.seller)
      throw new createError.Forbidden(
        "Only creator of auction item can upload images to this auction"
      );

    const pictureUrl = await uploadPictureToS3(auction.id + "jpg", buffer);

    updatedAuction = setAuctionPictureUrl(id, pictureUrl);
  } catch (error) {
    console.log(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(updatedAuction),
  };
}

module.exports.handler = middy(uploadAuctionPicture)
  .use(httpErrorHandler)
  .use(validator({ inputSchema: uploadAuctionPictureSchema }))
  .use(cors());

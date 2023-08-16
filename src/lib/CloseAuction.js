const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const sqs = new AWS.SQS();


 async function CloseAuction(auction) {
  const params = {
    TableName: process.env.AUCTIONS_TABLE_NAME,
    key: { id: auction.id },
    UpdateExpression: "set #status = :status",
    ExpressionAttributeValues: {
      ":status": "CLOSED",
    },
    ExpressionAttributeNames: {
      "#status": "status",
    },
  };

  await dynamodb.query(params).promise();
  const { title, seller, highestBid } = auction;
  const { amount, bidder } = highestBid;

  if (amount === 0) {
    await sqs
      .sendMessage({
        QueueUrl: process.env.MAIL_QUEUE_URL,
        MessageBody: JSON.stringify({
          subject: "No bids on your auction item ",
          recipient: seller,
          body: `Sorry item ${title} got no bids`,
        }),
      })
      .promise();
    return;
  }

  const notifySeller = sqs
    .sendMessage({
      QueueUrl: process.env.MAIL_QUEUE_URL,
      MessageBody: JSON.stringify({
        subject: "Your Item has been sold",
        recipient: seller,
        body: `Congrats! Your item ${title} has been sold for $${amount}`,
      }),
    })
    .promise();

  const notifyBidder = sqs
    .sendMessage({
      QueueUrl: process.env.MAIL_QUEUE_URL,
      MessageBody: JSON.stringify({
        subject: "You won an auction",
        recipient: bidder,
        body: `Congrats! You got yourself item : ${title}`,
      }),
    })
    .promise();

  return Promise.all([notifySeller, notifyBidder]);
}

module.exports = CloseAuction;

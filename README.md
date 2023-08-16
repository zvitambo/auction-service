# Codingly.io: Base Serverless Framework Template

https://codingly.io

## What's included
* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/codingly-io/sls-base
cd YOUR_PROJECT_NAME
npm install
```

You are ready to go!


endpoints:
  POST - https://lzir6ni5u3.execute-api.eu-west-1.amazonaws.com/dev/auction
  GET - https://lzir6ni5u3.execute-api.eu-west-1.amazonaws.com/dev/auctions
  GET - https://lzir6ni5u3.execute-api.eu-west-1.amazonaws.com/dev/auction/{id}
  PATCH - https://lzir6ni5u3.execute-api.eu-west-1.amazonaws.com/dev/auction/{id}/bid
functions:
  createAuction: auction-service-dev-createAuction (9 MB)
  getAuctions: auction-service-dev-getAuctions (9 MB)
  getAuction: auction-service-dev-getAuction (9 MB)
  placeBid: auction-service-dev-placeBid (9 MB)

Stack Outputs:
  PlaceBidLambdaFunctionQualifiedArn: arn:aws:lambda:eu-west-1:853138671505:function:auction-service-dev-placeBid:2
  GetAuctionLambdaFunctionQualifiedArn: arn:aws:lambda:eu-west-1:853138671505:function:auction-service-dev-getAuction:1
  CreateAuctionLambdaFunctionQualifiedArn: arn:aws:lambda:eu-west-1:853138671505:function:auction-service-dev-createAuction:1
  GetAuctionsLambdaFunctionQualifiedArn: arn:aws:lambda:eu-west-1:853138671505:function:auction-service-dev-getAuctions:1
  ServiceEndpoint: https://lzir6ni5u3.execute-api.eu-west-1.amazonaws.com/dev
  ServerlessDeploymentBucketName: auction-service-dev-serverlessdeploymentbucket-1efyzygn9kg6h








curl --location --request POST 'https://zvitambothomasjindudev.eu.auth0.com/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=JTM1oL5yi4cl8AvszI8niQpGaYfe5YTA' \
--data-urlencode 'username=zvitambothomasjindudev@gmail.com' \
--data-urlencode 'password=Zvitambo_21_Thomas_12_Jindu^@*Admin' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'scope=openid' 





curl --location --request POST 'https://zvitambothomasjindudev.eu.auth0.com/oauth/token'
--header 'Content-Type: application/x-www-form-urlencoded' 
--data-urlencode 'client_id=JTM1oL5yi4cl8AvszI8niQpGaYfe5YTA' 
--data-urlencode 'username=zvitambothomasjindudev@gmail.com' 
--data-urlencode 'password=Zvitambo_21_Thomas_12_Jindu^@*Admin' 
--data-urlencode 'grant_type=password' 
--data-urlencode 'scope=openid' 




{
    "access_token": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly96dml0YW1ib3Rob21hc2ppbmR1ZGV2LmV1LmF1dGgwLmNvbS8ifQ..4gJYOD-UNT3yB_G0.zj9LOPN_PebJuxpM1g4bHaTMw9JAw-eUxr3FZ12BSVmVDTkNhYGGiM7CtQHn0Ow7BF64dhZqgzOxicNeELQ9--iIbZftnfN0z9GHZhQ5gJp7MT2rMCscGvEdAumoLw6sNqps7Sx8Y03ZPwk4eeaXbt_xM90HgBOEZDKpnYzdKajSmn-Kx85cdpakDTkqtZ125y3_ciKj02EcVHdYUl6Y8_X8DtwZj4hsxZ_lnlQXPLXuCBggyczVXn1v9V9ZEvZkjjiJKxPt-JBQrUdJAGe7ujPwE42HtWlUtT29q0eCMZBQKitfVT2G_H6JzMdnMn6ZFoiz-oXcHcLyuTFm1VTFlJf9DdG1Qm55C4g0_bBCRkbXbVz08afbYFl98tEBk9sPhrV4ttk.EZNPOA628_P84I_x3Onnqw",
    "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRwT2lVRzRKc1hDOHlrZjk5X3hTZSJ9.eyJuaWNrbmFtZSI6Inp2aXRhbWJvdGhvbWFzamluZHVkZXYiLCJuYW1lIjoienZpdGFtYm90aG9tYXNqaW5kdWRldkBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvZjFkZDQwYzYxODg1NDhiNWJjMjhkOTczMzY5YTQxOWY_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZ6di5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMy0wNS0xN1QwOToyNzo0OC42NTBaIiwiZW1haWwiOiJ6dml0YW1ib3Rob21hc2ppbmR1ZGV2QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly96dml0YW1ib3Rob21hc2ppbmR1ZGV2LmV1LmF1dGgwLmNvbS8iLCJhdWQiOiJKVE0xb0w1eWk0Y2w4QXZzekk4bmlRcEdhWWZlNVlUQSIsImlhdCI6MTY4NDMxNTY2OCwiZXhwIjoxNjg0MzUxNjY4LCJzdWIiOiJhdXRoMHw2NDY0OTYwNjQ3YTY5Y2Y4MGNjOWZjM2YifQ.ZOa4kTkTFtNRGxZNiKLGSRAdZfwkoFXGcBFSJjKP6A4zLZkii_QQc16lnOBUCUhOpBCl5GWHy5-t2OA89kVRPElPVcijEpb2Dy8sAnHtaCxjFxZMrFyxb7Q2MK6BnLAk6nE3yBilH1KX_X7QAkAvVZS2wUt70BmSseygPbI7g0CV9MEk3FSGHkRSb_QWK9buHRRUbjDJEMRkYWHt84OKPf9PMrlqtddsUjZH7S-lca3e4-IwPJY07JKc1b3vTPI1Y01OSF-LYXF6aveS3OI7BFmMiea9ijoYba638diQM0KpVno5o0XeEctw_Om6E2T2ynhSoIkqyEaROBKbNQnoHw",
    "scope": "openid profile email address phone",
    "expires_in": 86400,
    "token_type": "Bearer"
}



-----BEGIN CERTIFICATE-----
MIIDITCCAgmgAwIBAgIJCNSBkwE45i6fMA0GCSqGSIb3DQEBCwUAMC4xLDAqBgNV
BAMTI3p2aXRhbWJvdGhvbWFzamluZHVkZXYuZXUuYXV0aDAuY29tMB4XDTIzMDUx
NzA4MjIxNVoXDTM3MDEyMzA4MjIxNVowLjEsMCoGA1UEAxMjenZpdGFtYm90aG9t
YXNqaW5kdWRldi5ldS5hdXRoMC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
ggEKAoIBAQD9w4f9w2eQsvBf4DA2NLbu0jnXa7f+rGFK3BdYI2+wq2WsYDCh3BRD
Wsqxvu/kk3vXpx9rEGHiWBw++6MMc96iFsvhJqYi9wj/L5xW+s81crFpSQvvMEye
vwgfI8mnU0O89a66RH8T1cdALGOXL1KylnpV/8tkS/AjVxvjE2q4AZW2QI+6wQ/O
zikqFuNaQizUd9v97WUMzJt6gfKe458XXSM3lGeo1wN+W5UyUxGok52Yb/5bkldG
NzqGZ6u5HFoO0EwCUoZVfxJElkR9ZUNsR3SJ4eRrLZphGZnjbOXPt6yuFp/G200z
mDqbDD9jCwMPtuNfG6UqnPYvDDzZm5TJAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMB
Af8wHQYDVR0OBBYEFDkT+WiKOTYtiXvjecSgGzvwjSs6MA4GA1UdDwEB/wQEAwIC
hDANBgkqhkiG9w0BAQsFAAOCAQEA6WX1BdZ/FrybLvxhmJMjFxb4dID28qfdsZ/5
p262ofkDoONJmWKzd7rRucSZqDJSSwHtZQEpdtpZ99S3PMkqvAje8lS5jCi/7nKH
jpfHrMP8UqkdVSqukYzbQSK/V+Ekpm0qQywmHqHSxst37ucCXyCvGi+Reul5/HPo
73wsMRYqzmfYpnt1cVRYkFrWTqGlcKzUGmQtpbQTagHTorK021IM3iZuwozhBuWb
7mQbtsldxfwHX+oe5nR9TP3kCKeJka0h3y7/adG4CCqS/cEskoe9lbPMEAWbZ2OK
dDPrRucmi9vygu0FDebe1+wasu6+4BhnPHFvGCrkkmfLHAkfyQ==
-----END CERTIFICATE-----
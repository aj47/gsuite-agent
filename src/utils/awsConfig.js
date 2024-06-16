import AWS from 'aws-sdk';

// Configure AWS SDK for JavaScript
AWS.config.update({
  region: 'us-east-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  }),
});

// Initialize the Amazon DynamoDB service object
const dynamoDB = new AWS.DynamoDB.DocumentClient();

export { dynamoDB };

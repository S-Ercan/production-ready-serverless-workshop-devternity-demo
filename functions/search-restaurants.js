const wrap = require('../lib/wrapper')
const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const _ = require('lodash')

const dynamodb = new AWS.DynamoDB.DocumentClient()

const defaultResults = process.env.defaultResults || 8
const tableName = process.env.restaurants_table

const findRestaurantsByTheme = async (theme, count) => {
  const req = {
    TableName: tableName,
    Limit: count,
    FilterExpression: "contains(themes, :theme)",
    ExpressionAttributeValues: { ":theme": theme }
  }

  const resp = await dynamodb.scan(req).promise()
  return resp.Items
}

module.exports.handler = wrap(async (event, context) => {
  const req = JSON.parse(event.body)

  const theme = req.theme
  const count = _.get(req, 'count') || defaultResults;

  const restaurants = await findRestaurantsByTheme(theme, count)
  const response = {
    statusCode: 200,
    body: JSON.stringify(restaurants)
  }

  return response
})
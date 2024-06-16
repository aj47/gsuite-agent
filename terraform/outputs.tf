output "dynamodb_table_name" {
  value = aws_dynamodb_table.gsa_app_data.name
  description = "The name of the DynamoDB table used by the GSA App."
}

output "lambda_function_name" {
  value = aws_lambda_function.gsa_app_lambda.function_name
  description = "The name of the Lambda function handling backend logic for the GSA App."
}

output "api_gateway_url" {
  value = aws_api_gateway_rest_api.gsa_app_api.execution_arn
  description = "The URL of the API Gateway for the GSA App."
}

variable "aws_region" {
  description = "The AWS region where resources will be created"
  type        = string
  default     = "us-east-1"
}

variable "dynamodb_table_name" {
  description = "The name of the DynamoDB table for storing app data"
  type        = string
  default     = "GSAAppData"
}

variable "lambda_function_name" {
  description = "The name of the Lambda function for handling backend logic"
  type        = string
  default     = "GSAAppLambda"
}

variable "api_gateway_name" {
  description = "The name of the API Gateway for the app"
  type        = string
  default     = "GSAAppAPI"
}

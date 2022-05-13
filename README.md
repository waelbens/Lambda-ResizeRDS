# ResizeRDS
Resize RDS instances using Lambda and CloudWatch Events

Invoke Lambda to resize RDS instances:
aws lambda invoke --function-name rds-lambda-resize --payload '{"instances": ["test-instance-id"], "instanceClass": "db.t3.micro"}' output

[![NPM version](https://badge.fury.io/js/cdk-lambda-extensions.svg)](https://badge.fury.io/js/cdk-lambda-extensions)
[![PyPI version](https://badge.fury.io/py/cdk-lambda-extensions.svg)](https://badge.fury.io/py/cdk-lambda-extensions)
![Release](https://github.com/pahud/cdk-lambda-extensions/workflows/Release/badge.svg)

# cdk-lambda-extensions

AWS CDK construct library that allows you to add any [AWS Lambda Extensions](https://docs.aws.amazon.com/lambda/latest/dg/using-extensions.html) to the Lambda functions.

# Sample

To add `s3-logs-extension-demo` extension from the [aws-lambda-extensions](https://github.com/aws-samples/aws-lambda-extensions) github repository:

```ts
// prepare the s3 bucket for the lambda logs
const bucket = new s3.Bucket(this, 'DemoBucket');

// prepare the Function
const fn = new Function(this, 'Handler', {
  code: lambda.Code.fromAsset(path.join(__dirname,
    '../aws-lambda-extensions/s3-logs-extension-demo/functionsrc')),
  runtime: lambda.Runtime.PYTHON_3_8,
  handler: 'lambda_function.lambda_handler',
  memorySize: 128,
  environment: {
    S3_BUCKET_NAME: bucket.bucketName,
  },
});
bucket.grantWrite(fn);

// plug the `s3-logs-extension` in the lambda function
fn.addExtension(new S3LogsExtension(this, 'S3BucketExtention').extension);
```

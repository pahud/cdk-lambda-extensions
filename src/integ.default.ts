import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { Function, S3LogsExtension } from './index';


export class Demo extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

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

    // print the function name
    new cdk.CfnOutput(this, 'FunctionName', { value: fn.functionName });
    // print the S3 bucket name
    new cdk.CfnOutput(this, 'S3LogBucketName', { value: bucket.bucketName });
  }
}

// export class IntegTesting {
//   readonly stack: cdk.Stack[];
//   constructor() {
//     const app = new cdk.App();
//     const env = {
//       region: process.env.CDK_DEFAULT_REGION,
//       account: process.env.CDK_DEFAULT_ACCOUNT,
//     };
//     const stack = new cdk.Stack(app, 'demo-stack', { env });
//     new Demo(stack, 'Demo');
//     this.stack = [stack];
//   }
// }

export class IntegTesting {
  readonly stack: cdk.Stack[];
  constructor() {
    const app = new cdk.App();
    const env = {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
    };
    const stack = new cdk.Stack(app, 'demo-stack', { env });
    this.stack = [stack];
  }
}

import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class Function extends lambda.Function {
  constructor(scope: cdk.Construct, id: string, props: lambda.FunctionProps) {
    super(scope, id, props);
  }
  public addExtension(extension: lambda.ILayerVersion) {
    this.addLayers(extension);
  }
}

export class S3LogsExtension extends cdk.Construct {
  readonly extension: lambda.ILayerVersion;
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
    this.extension = new lambda.LayerVersion(scope, `${id}LayerVersion`, {
      code: lambda.Code.fromAsset(path.join(__dirname,
        '../aws-lambda-extensions/s3-logs-extension-demo/extensionssrc')),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_8],
    });
  }

}

const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: "pahudnet@gmail.com",
  authorName: "Pahud",
  cdkVersion: "1.73.0",
  name: "cdk-lambda-extensions",
  repository: "https://github.com/pahudnet/cdk-lambda-extensions.git",
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-lambda',
  ],
  python: {
    distName: 'cdk-lambda-extensions',
    module: 'cdk_lambda_extensions',
  },
  dependabot: false,
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log', 'aws-lambda-extensions'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();

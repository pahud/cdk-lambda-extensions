const { AwsCdkConstructLibrary, DependenciesUpgradeMechanism  } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: 'pahudnet@gmail.com',
  authorName: 'Pahud',
  cdkVersion: '1.73.0',
  name: 'cdk-lambda-extensions',
  description: 'AWS CDK construct library that allows you to add any AWS Lambda extensions to the Lambda functions',
  repository: 'https://github.com/pahud/cdk-lambda-extensions.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-lambda',
  ],
  python: {
    distName: 'cdk-lambda-extensions',
    module: 'cdk_lambda_extensions',
  },
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve'],
    }
  }),
  defaultReleaseBranch: 'main',
});


const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log', 'aws-lambda-extensions'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();

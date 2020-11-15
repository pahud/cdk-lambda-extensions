# API Reference

**Classes**

Name|Description
----|-----------
[Function](#cdk-lambda-extensions-function)|*No description*
[S3LogsExtension](#cdk-lambda-extensions-s3logsextension)|*No description*



## class Function  <a id="cdk-lambda-extensions-function"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IResource](#aws-cdk-core-iresource), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IFunction](#aws-cdk-aws-lambda-ifunction), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IResource](#aws-cdk-core-iresource), [IConnectable](#aws-cdk-aws-ec2-iconnectable), [IGrantable](#aws-cdk-aws-iam-igrantable)
__Extends__: [Function](#aws-cdk-aws-lambda-function)

### Initializer




```ts
new Function(scope: Construct, id: string, props: FunctionProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[FunctionProps](#aws-cdk-aws-lambda-functionprops)</code>)  *No description*
  * **maxEventAge** (<code>[Duration](#aws-cdk-core-duration)</code>)  The maximum age of a request that Lambda sends to a function for processing. __*Default*__: Duration.hours(6)
  * **onFailure** (<code>[IDestination](#aws-cdk-aws-lambda-idestination)</code>)  The destination for failed invocations. __*Default*__: no destination
  * **onSuccess** (<code>[IDestination](#aws-cdk-aws-lambda-idestination)</code>)  The destination for successful invocations. __*Default*__: no destination
  * **retryAttempts** (<code>number</code>)  The maximum number of times to retry when the function returns an error. __*Default*__: 2
  * **allowAllOutbound** (<code>boolean</code>)  Whether to allow the Lambda to send all network traffic. __*Default*__: true
  * **allowPublicSubnet** (<code>boolean</code>)  Lambda Functions in a public subnet can NOT access the internet. __*Default*__: false
  * **currentVersionOptions** (<code>[VersionOptions](#aws-cdk-aws-lambda-versionoptions)</code>)  Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. __*Default*__: default options as described in `VersionOptions`
  * **deadLetterQueue** (<code>[IQueue](#aws-cdk-aws-sqs-iqueue)</code>)  The SQS queue to use if DLQ is enabled. __*Default*__: SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`
  * **deadLetterQueueEnabled** (<code>boolean</code>)  Enabled DLQ. __*Default*__: false unless `deadLetterQueue` is set, which implies DLQ is enabled.
  * **description** (<code>string</code>)  A description of the function. __*Default*__: No description.
  * **environment** (<code>Map<string, string></code>)  Key-value pairs that Lambda caches and makes available for your Lambda functions. __*Default*__: No environment variables.
  * **events** (<code>Array<[IEventSource](#aws-cdk-aws-lambda-ieventsource)></code>)  Event sources for this function. __*Default*__: No event sources.
  * **filesystem** (<code>[FileSystem](#aws-cdk-aws-lambda-filesystem)</code>)  The filesystem configuration for the lambda function. __*Default*__: will not mount any filesystem
  * **functionName** (<code>string</code>)  A name for the function. __*Default*__: AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.
  * **initialPolicy** (<code>Array<[PolicyStatement](#aws-cdk-aws-iam-policystatement)></code>)  Initial policy statements to add to the created Lambda Role. __*Default*__: No policy statements are added to the created Lambda role.
  * **layers** (<code>Array<[ILayerVersion](#aws-cdk-aws-lambda-ilayerversion)></code>)  A list of layers to add to the function's execution environment. __*Default*__: No layers.
  * **logRetention** (<code>[RetentionDays](#aws-cdk-aws-logs-retentiondays)</code>)  The number of days log events are kept in CloudWatch Logs. __*Default*__: logs.RetentionDays.INFINITE
  * **logRetentionRetryOptions** (<code>[LogRetentionRetryOptions](#aws-cdk-aws-lambda-logretentionretryoptions)</code>)  When log retention is specified, a custom resource attempts to create the CloudWatch log group. __*Default*__: Default AWS SDK retry options.
  * **logRetentionRole** (<code>[IRole](#aws-cdk-aws-iam-irole)</code>)  The IAM role for the Lambda function associated with the custom resource that sets the retention policy. __*Default*__: A new role is created.
  * **memorySize** (<code>number</code>)  The amount of memory, in MB, that is allocated to your Lambda function. __*Default*__: 128
  * **profiling** (<code>boolean</code>)  Enable profiling. __*Default*__: No profiling.
  * **profilingGroup** (<code>[IProfilingGroup](#aws-cdk-aws-codeguruprofiler-iprofilinggroup)</code>)  Profiling Group. __*Default*__: A new profiling group will be created if `profiling` is set.
  * **reservedConcurrentExecutions** (<code>number</code>)  The maximum of concurrent executions you want to reserve for the function. __*Default*__: No specific limit - account limit.
  * **role** (<code>[IRole](#aws-cdk-aws-iam-irole)</code>)  Lambda execution role. __*Default*__: A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.
  * **securityGroup** (<code>[ISecurityGroup](#aws-cdk-aws-ec2-isecuritygroup)</code>)  What security group to associate with the Lambda's network interfaces. This property is being deprecated, consider using securityGroups instead. __*Default*__: If the function is placed within a VPC and a security group is not specified, either by this or securityGroups prop, a dedicated security group will be created for this function.
  * **securityGroups** (<code>Array<[ISecurityGroup](#aws-cdk-aws-ec2-isecuritygroup)></code>)  The list of security groups to associate with the Lambda's network interfaces. __*Default*__: If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.
  * **timeout** (<code>[Duration](#aws-cdk-core-duration)</code>)  The function execution time (in seconds) after which Lambda terminates the function. __*Default*__: Duration.seconds(3)
  * **tracing** (<code>[Tracing](#aws-cdk-aws-lambda-tracing)</code>)  Enable AWS X-Ray Tracing for Lambda Function. __*Default*__: Tracing.Disabled
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  VPC network to place Lambda network interfaces. __*Default*__: Function is not placed within a VPC.
  * **vpcSubnets** (<code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code>)  Where to place the network interfaces within the VPC. __*Default*__: the Vpc default strategy if not specified
  * **code** (<code>[Code](#aws-cdk-aws-lambda-code)</code>)  The source code of your Lambda function. 
  * **handler** (<code>string</code>)  The name of the method within your code that Lambda calls to execute your function. 
  * **runtime** (<code>[Runtime](#aws-cdk-aws-lambda-runtime)</code>)  The runtime environment for the Lambda function that you are uploading. 


### Methods


#### addExtension(extension) <a id="cdk-lambda-extensions-function-addextension"></a>



```ts
addExtension(extension: ILayerVersion): void
```

* **extension** (<code>[ILayerVersion](#aws-cdk-aws-lambda-ilayerversion)</code>)  *No description*






## class S3LogsExtension  <a id="cdk-lambda-extensions-s3logsextension"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new S3LogsExtension(scope: Construct, id: string)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**extension** | <code>[ILayerVersion](#aws-cdk-aws-lambda-ilayerversion)</code> | <span></span>




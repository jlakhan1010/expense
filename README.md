# Installation And Setup

In the project directory, you can run:

### `npm i` or `yarn`

It will install libraries (node_modules)

###  `npm run dev-server` or `yarn run dev-server`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>


### Deploying with AWS CLI

[Click to install](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)  the AWS CLI.
    
Create [security credentials](https://docs.aws.amazon.com/cli/latest/userguide/installing.html).
    
[Configure ](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration) the CLI with aws configure. 
    
### For example:
      - AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
      - AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
      - Default region name [None]: us-west-2
      - Default output format [None]: json
    
### `npm run aws-deploy` or `yarn run aws-deploy`

Then it will automatically deploy into s3 bucket


#!/bin/bash
set -ev

# install aws cli
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
./awscli-bundle/install -b ~/bin/aws
export PATH=~/bin:$PATH

# deploy on aws
if [ "${TRAVIS_BRANCH}" = "master" ]; then
  if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    # master - deploy to production
    echo deploy to production

    # aws s3 cp s3://users-ci-ciconfigurationbucket-rgg86pk2weco/pricing/production.env ./secrets.env

    STACK_NAME=auth-registration
    WWW_ROOT=https://www.linn.co.uk
	  ENV_SUFFIX=
  else
    # pull request based on master - deploy to sys
    echo deploy to sys

    # aws s3 cp s3://users-ci-ciconfigurationbucket-rgg86pk2weco/pricing/sys.env ./secrets.env

    STACK_NAME=auth-registration-sys
    WWW_ROOT=https://www-sys.linn.co.uk
    ENV_SUFFIX=-sys
  fi
else
  # not master - deploy to int
  echo deploy to int

  #  aws s3 cp s3://users-ci-ciconfigurationbucket-rgg86pk2weco/pricing/int.env ./secrets.env

   STACK_NAME=auth-registration-int
   WWW_ROOT=https://www-int.linn.co.uk
   ENV_SUFFIX=-int
fi

# load the secret variables but hide the output from the travis log
# source ./secrets.env > /dev/null

# deploy the service to amazon
aws cloudformation deploy --stack-name $STACK_NAME --template-file ./aws/application.yml --parameter-overrides dockerTag=$TRAVIS_BUILD_NUMBER wwwRoot=$WWW_ROOT environmentSuffix=$ENV_SUFFIX --capabilities=CAPABILITY_IAM

echo "deploy complete"

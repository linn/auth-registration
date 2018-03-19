#!/bin/bash
set -ev

# determine which branch this change is from
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
  GIT_BRANCH=$TRAVIS_BRANCH
else
  GIT_BRANCH=$TRAVIS_PULL_REQUEST_BRANCH
fi

# create a docker
docker build --no-cache -t linn/auth-registration:$TRAVIS_BUILD_NUMBER --build-arg gitBranch=$GIT_BRANCH ./app

# push to dockerhub
docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD 
docker push linn/auth-registration:$TRAVIS_BUILD_NUMBER


#!/bin/bash
set -ev

# upgrade node to latest version
if [ "$CI" ] && [ "$TRAVIS" ]
then 
	source ~/.nvm/nvm.sh; 
	nvm install 6;
	nvm use 6;
fi

# javascript tests
cd ./src/Service.Host
./node_modules/.bin/jest --coverage
echo $?
result=$?
cd ../..

# report to codecov
bash <(curl -s https://codecov.io/bash)

exit $result
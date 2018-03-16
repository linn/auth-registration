#!/bin/bash
set -ev

# upgrade node to latest version
if [ "$CI" ] && [ "$TRAVIS" ]
then 
	source ~/.nvm/nvm.sh; 
	nvm install 6;
	nvm use 6;
fi

cd ./app
npm install
npm run build
cd ..

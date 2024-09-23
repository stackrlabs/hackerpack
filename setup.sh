#!/bin/bash
# Setup fresh git repo
npx rimraf .git
git init

npm i

cd web
# Update the .env file with your own values
cp .env.example .env
npm i

cd ../counter
# Update Micro-rollup .env file with your own values
cp .env.example .env
npm i

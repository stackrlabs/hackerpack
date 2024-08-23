#!/bin/bash
bun i

cd web
# Update the .env file with your own values
cp .env.example .env
bun i

cd ../counter
# Update Micro-rollup .env file with your own values
cp .env.example .env
bun i

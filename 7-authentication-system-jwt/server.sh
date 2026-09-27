#!/bin/bash

# Check 'node_modules' dependecy folder exists in the project directory, finally run the node server
if [ -d './node_modules' ]; then
	echo "Spinning up the server..."
	npm run dev
else
	echo "Requires to create 'node_modules' folder"
	npm install
	echo "Spinning up the server..."
	npm run dev
fi

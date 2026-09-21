#!/bin/bash

# Check if 'package.json' and 'package-lock.json' file exists
if [[ -e 'package.json' && -e 'package-lock.json' ]]; then

	echo "'package.json' & 'package-lock.json' files exists"
	
	# Install dependencies if it does not exist
	if [ ! -d './node_modules' ]; then
		echo "Installing 'node_modules/'..."
		npm install
		echo "Starting the node server..."
		npm run dev
	else
		echo "Starting the node server..."
		npm run dev
	fi

fi

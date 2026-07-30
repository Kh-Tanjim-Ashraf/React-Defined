#!/bin/bash

node_modules="node_modules"

if [ -d "./$node_modules" ]; then
	npm run dev
else
	npm install
	npm run dev
fi

#!/bin/bash

if [ -d "./node_modules" ]; then
	npm run dev
else
	npm install
	npm install react-router-dom @tanstack/react-query @tanstack/react-query-devtools
	npm run dev
fi

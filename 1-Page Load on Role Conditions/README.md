# 1-Page Load on Role Based Conditions

A simple react app using Vite. This light-weight react app has completed the following objectives🎯:

1. Create different pages (**.jsx**).
2. Conditionally rendered pages based on if a user:
   - Authenticated/Un-authenticated
   - Has role of: Admin, Staff, User
3. The conditional checking was defined inside an IIFE (_Immediately Invoked Function Expression_)

## How to run the server

Use the following command to execute the shell script (**server.sh**) which will spawn a development server, if no `node_modules` folder exists in the project directory, then the script will automatically generate the folder.

> bash server.sh

### Optional

1. To spawn a development server.

   > npm run dev

2. If no `node_modules` exists in the project's directory, create the `node_modules` first.

   > npm install

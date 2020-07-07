# Goodie Bag

## Getting started

1. Fork and clone this repo
2. `npm install`
3. Read the rest of this `README.md` carefully - it contains the requirements for the project
4. Start the build process and your application with: `npm run start:dev`. If you using Windows, you may need to execute `npm run start-server` and `npm run build-watch` separately (in their own terminal tabs).
5. If you navigate to the URL you should see some UI already :) [We already have some connection code to get you started]
6. Check out the starting seed file in `seed.js` - you can run it by executing `npm run seed`

## Details

### The Premise

You are creating a simple fullstack app to view the candies in your goodie bag. Yum! The requirements provided outline what we would like you to accomplish, but feel free to branch out and add more functionality if you wish.

### The tools

For this project, you must use Express to handle HTTP requests and Sequelize to interface with your database. Likewise, you must use React, Redux and React-Redux on the front-end. This means that all important state must be managed by the Redux store (unimportant state, like form data, may be managed by stateful React components). Components that display data should therefore be connected to the Redux store. If you perform side-effects (like AJAX requests), you should encapsulate them in thunks.

### Requirements

For the requirements, refer to the following file:

* `REQUIREMENTS.md` - contains the functional requirements of the project

Make sure to read them carefully!

## Other Important Info

### How to test functionality without a frontend
- GET: use your browser
- POST / PUT / DELETE :
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"username":"kate","password":"1234"}' http://localhost:3000/api/login`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)
   ![](https://www.dropbox.com/s/4fk3b90cd0i1a5y/postman_post.png?raw=true)
- Databases: use Sequelize in your routes and see if you are receiving what you expect


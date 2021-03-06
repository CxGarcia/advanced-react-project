require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

//TODO Use express middleware to handle cookies (JSON Web Tokens)
//TODO Use express middleware to populate current user

server.start(
  {
    //Make endpoints hittable only from this specific website
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  (deets) => {
    console.log(`server is now running on port http://localhost:${deets.port}`);
  }
);

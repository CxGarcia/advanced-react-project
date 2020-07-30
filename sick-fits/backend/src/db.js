//This file creates a Prisma DB and connects it to give us the ability to query it with JS

const { Prisma } = require("prisma-binding");

const db = new Prisma({
  //defs the different types, mutations and queries are in order to be able to hit the DB
  typeDefs: "src/generated/prisma.graphql",
  //access to enviromental variables in NodeJS
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;

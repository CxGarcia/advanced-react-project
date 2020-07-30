//GraphQL Yoga is a query language for APIs built on top of Express and Apollo.

const { GraphQLServer } = require("graphql-yoga");

//Resolvers answer the question of where does this data come from or what does this data do in the DB
//Resolvers used when data is pushed
const Mutation = require("./resolvers/Mutation");

//Resolvers used when you pull data
const Query = require("./resolvers/Query");

const db = require("./db");

//create GraphQL Yoga server which will ingest a schema.graphql
//and will match up everything in the schema with either a mutation or query resolver
function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    //Exposes the DB to the resolvers requests and this is available via context
    context: (req) => ({ ...req, db }),
  });
}

module.exports = createServer;

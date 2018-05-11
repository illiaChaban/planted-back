const express = require('express');
const http = require('http');
const cors = require('cors');
const router = require('./router');
// const {  schema } = require('./graphQLn');
// const bodyParser = require('body-parser');
// const { graphqlExpress } = require('apollo-server-express');

// const urlencoded = require('body-parser').urlencoded;

const app = express();
// app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(router);
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

const server = http.createServer(app)

console.log('HTTP server running at http://localhost:5000');
server.listen(process.env.PORT || 5000);
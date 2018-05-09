const readBody = require('./lib/readBody')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let {postTokens, signature, createToken} = require('./lib/tokens');
const db = require('./db');
const Router = require('express').Router;
const router = new Router();
const { schema, resolvers } = require('./graphQL');

router.get('/', async (req, res) => {
    res.send('hello');
    
})

module.exports = router;
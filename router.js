const readBody = require('./lib/readBody')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let {postTokens, signature, createToken} = require('./lib/tokens');
const db = require('./db');
const Router = require('express').Router;
const router = new Router();
const { getResults } = require('./graphQL');

router.post('/login', async (req,res) => {
    postTokens(req, res, db)
})

router.post('/graphql', async (req,res) => {
    let { authorization: token } = req.headers;
    try{
        let payload = jwt.verify(token, signature);
        let userid = payload.userid;
        let query = await readBody(req)
        let results = await getResults(query, userid);
        res.send(results)
    } catch(err) {
        console.log("POST GRAPHQL - ERROR ####", err)
        res.status(401).end('Unauthorized')
    }
})

module.exports = router;
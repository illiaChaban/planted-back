const readBody = require('./lib/readBody')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let {postTokens, signature, createToken} = require('./lib/tokens');
const db = require('./db');
const Router = require('express').Router;
const router = new Router();

const { getResults } = require('./graphQL');
// const { graphqlExpress } = require('apollo-server-express');


router.get('/', async (req, res) => {
    res.send('hello');
    
})

router.get('/graphql', (req, res) => {
    // console.log(req)
    // graphqlExpress({ schema })
});

router.post('/graphql', async (req,res) => {
    let query = await readBody(req).then( req => JSON.parse(req).query)
    let results = await getResults(query);
    res.send(results)
})

router.post('/addData', async (req,res) => {
    let data = await readBody(req).then( data => JSON.parse(data))
    console.log(data)
    let { temp, sun, moist, ph, userid } = data;
    db.query(`
        INSERT INTO plant_data VALUES (
            '${userid}',
            '${temp}',
            '${sun}',
            '${moist}',
            '${ph}'
        )
    `)
})

module.exports = router;
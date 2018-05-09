const readBody = require('./lib/readBody')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let {postTokens, signature, createToken} = require('./lib/tokens');
const db = require('./db');
const Router = require('express').Router;
const router = new Router();
const bodyParser = require('body-parser');
const { graphqlConnect } = require('apollo-server-express') ;
// const { schema } = require('./graphQL');
const {  schema } = require('./graphQLn')



router.post('/graphql', bodyParser.json());
router.get('/graphql', graphqlConnect({ schema }));


router.get('/', async (req, res) => {
    res.send('hello');
    
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
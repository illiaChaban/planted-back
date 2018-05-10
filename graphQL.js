const { graphql } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const db = require('./db');

let getUserById = (userid) => db.one(`
    SELECT * FROM users
    WHERE userid = ${userid};
`)

let getAllPlantData = (userid) => db.query(`
    SELECT * FROM plant_data
    WHERE userid = ${userid};
`)

// getUserById(1).then(console.log)
// getAllPlantData(2).then(console.log)

let typeDefs = (`
	type Query {
	  currentUser(userid: Int): Data
	}
	
    type Data {
        user: UserInfo
        plantData: [PlantData]
    }
    
    type UserInfo {
        username: String
        avatar: String
        userid: Int
        email: String
    }
    
    type PlantData {
        userid: Int
        temp: String
        sun: String
        moist: String
        ph: String
    }


`)

let query = `
	query {
	  currentUser(userid: 2) {
        user {
            username
            avatar
        }
        plantData {
            temp
            sun
            moist
            ph
        }
	  }
    }`
    
// let query = "query { currentUser(userid: 2) { user { username avatar } plantData { temp sun moist ph } } }"

let resolvers = {
    Query: {
        currentUser: (parent, args, ctx) => {
            // console.log( 'currentUSER ######', ctx)
            return args.userid
        }
    },
    Data: {
        user: (userid) => getUserById(userid),
        plantData: (userid) => getAllPlantData(userid),
    },

    UserInfo: {
        username: (p) => p.username,
        avatar: (p) => p.avatar,
        userid: (p) => p.userid,
        email: (p) => p.email,
    },

    PlantData: {
        userid: (p) => p.userid,
        temp: (p) => p.temp,
        sun: (p) => p.sun,
        moist: (p) => p.moist,
        ph: (p) => p.ph,
    }
}

let schema = makeExecutableSchema({typeDefs, resolvers})

let getResults = async (query) => {
    let results = await graphql({
        schema,
        source: query,
        rootValue: resolvers}
    ).then( res => JSON.stringify(res));
    return results
}

// getResults(query).then(console.log)


module.exports = {
    getResults
}

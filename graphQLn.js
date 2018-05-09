const { graphql, buildSchema } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');

const db = require('./db');

let plantData = db.query(`
    SELECT * FROM plant_data
    WHERE userid = '1';
`)
// plantData.then(console.log)

let user = db.one(`
    SELECT * FROM users
    WHERE userid = '1';
`)
// user.then(console.log)

let userInfo = async () => {
    let userI = await user;
    let plantDataI = await plantData;
    return { user: userI, plantData: plantDataI }
};

userInfo().then(inf => {
    // console.log(inf)
})




let schema = (`
	type Query {
	  currentUser: User
	}
	
	type User {
        username: String
        avatar: String
        userid: Int
        plantData: [PlantData]
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
	  currentUser {
        username
        email
		plantData {
            temp

		}
	  }
	}`

let resolvers = {
    Query: {
        currentUser: () => {
            console.log('here')
            return userInfo();
        }
    },
    User: {
        username: (p) => {
            console.log(p)
            return p.user.username
        },
        email: (p) => p.user.email,
        avatar: (p) => p.user.avatar,
        userid: (p) => p.user.userid,
        plantData: (p) => {
            // console.log(p)
            return p.plantData;
        },
    },

    PlantData: {
        userid: (p) => p.userid,
        temp: (p) => p.temp,
        sun: (p) => p.sun,
        moist: (p) => p.moist,
        ph: (p) => p.ph,
    }
}


// let resolvers = {
//   currentUser: () => user,
//   User: {
//     userId: (parent) => parent.userId,
//     repos: (parent) => parent.repos,
//   },
//   Repo: { name: (parent) =>  parent.name }
// };


let results = graphql({
    schema: makeExecutableSchema({typeDefs: schema, resolvers}),
	source: query,
	rootValue: resolvers}
)
results
// .then( res => JSON.stringify(res))
// .then( res => JSON.parse(res))
// .then(console.log)


// module.exports = {
//     schema,
//     resolvers,
// }

const { graphql, buildSchema } = require('graphql');

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
    console.log(typeof inf.user.userid)
})

let schema = buildSchema(`
	type Query {
	  currentUser: User
	}
	
	type User {
      user: UserInfo,
	  plantData: [PlantData]
    }
    
    type PlantData {
        userid: Int,
        temp: String,
        sun: String,
        moist: String,
        ph: String
    }

	type UserInfo {
        username: String,
        avatar: String,
        userid: Int,
	}
`)

let query = `
	query {
	  currentUser {
		user
		plantData {
		  temp
		}
	  }
	}`



// let resolvers = {
//   currentUser: () => user,
//   User: {
//     userId: (parent) => parent.userId,
//     repos: (parent) => parent.repos,
//   },
//   Repo: { name: (parent) =>  parent.name }
// };


// let results = graphql({schema,
// 	source: query,
// 	rootValue: resolvers}
// )
// results.then( console.log)


// module.exports = {
//     schema,
//     resolvers,
// }

examples of fetching data with graphql

fetch('https://radiant-anchorage-62389.herokuapp.com/graphql', {
	headers: {
	"authorization": token,
},
	method: 'POST',
	body: `
	query {
	  currentUser {
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
})
.then( res => res.json() ).then(console.log)

fetch('https://radiant-anchorage-62389.herokuapp.com/graphql', {
	headers: {
	"authorization": token,
},
	method: 'POST',
	body: `
    mutation {
        addPlantData(input: {temp: 70 sun: 300 moist: 24 ph: 3.2  }) {
            userid
        } 
    }
`
})
.then( res => res.json() ).then(console.log)
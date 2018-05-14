examples of fetching data with graphql

fetch('http://localhost:5000/graphql', {
	headers: {
	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImlhdCI6MTUyNTk1NjMwNiwiZXhwIjoxNTI2NTYxMTA2fQ.2vFISgpV0d8AJ9H-ZHDyqqL08wkE5dvV4Nl6KINvJa4",
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

fetch('http://localhost:5000/graphql', {
	headers: {
	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImlhdCI6MTUyNTk1NjMwNiwiZXhwIjoxNTI2NTYxMTA2fQ.2vFISgpV0d8AJ9H-ZHDyqqL08wkE5dvV4Nl6KINvJa4",
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
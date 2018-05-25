# Planted

## Overview:
The Planted project purpose is to assist users by collecting data from a variety of sensors ex. humidity, temperature, sunlight, and soil moister.  This in hopes of helping users to keep their plants alive and thriving.
Sensors send data to the server and the React Native app visualizes the data

#### Github Links:
[Planted Github |](https://github.com/PlantedDC)
<a href="https://github.com/PlantedDC/hardware"> Hardware Side |</a>
<a href="https://github.com/PlantedDC/planted-front"> Front End</a>

#### Watch demo:

<a href="https://youtu.be/lKG6Cvn-An0" target="_blank">
  <img src="https://user-images.githubusercontent.com/34459770/40526186-c12a01d0-5fb2-11e8-8817-634b20ed2d6e.png" height="100"/>
</a>

#### Screenshots:


<br/>

<div style=" display: flex; justify-content: space-between">
  <img src="https://user-images.githubusercontent.com/34459770/40523781-49cfe166-5fa5-11e8-92e7-f10cd1fe21dd.jpg" width="150" border="5" style="margin: 50px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40523784-4b9f7916-5fa5-11e8-8ce3-693efbe1f7f3.jpg" width="150" style="margin: 50px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40523785-4d19c620-5fa5-11e8-86ac-b28ddf2796ca.jpg" width="150" style="margin: 50px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40523786-4eb230f8-5fa5-11e8-8d4a-377df698907a.jpg" width="150" style="margin: 50px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40523789-4fd75b84-5fa5-11e8-9682-8fdc51fa327b.jpg" width="150" style="margin: 50px; border: 2px solid black"/>
</div>

#### We took it to school!
<div>
  <img src="https://user-images.githubusercontent.com/34459770/40523648-ae53b5fa-5fa4-11e8-90ee-90042c96d635.jpg" width="255" style="margin: 10px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40524387-44a91fd8-5fa8-11e8-94d9-69d46daed6f3.png" width="300" margin='10'/>
  
</div>



## Github Link:
[Planted Github](https://github.com/PlantedDC/planted-front)

## Team Members & Roles:
* [Ashley Parker](https://github.com/codingandcaring) React Wizard|Developer
* [Illia Chaban](https://github.com/illiaChaban) Backend|Database|Chart Wizard|Developer
* [Nick Wilson](https://github.com/NickWilsonDev) Hardware/Electrician|Developer

## Technologies used:
* React Native
* React
* Redux
* D3
* Node
* GraphQL
* PostgreSQL 
* Javascript
* Heroku
* Python

## Code snippets:

#### Router:
```javascript

router.post('/register', async (req, res) => {
    let userInfo = await readBody(req).then(data => JSON.parse(data))
    let { avatar, username, email, password } = userInfo
    let hash = await bcrypt.hash(password, 10);
    await db.query(`
            INSERT INTO users (
                username, email, passw, avatar
            )
            VALUES (
                    '${username}',
                    '${email}',
                    '${hash}',
                    '${avatar}'
            );`)
        .catch(err => console.log(err))
    let user = await findUserByEmail(db, email);
    let token = createToken(user);
    res.end(token);
})

router.post('/graphql', async (req, res) => {
    let { authorization: token } = req.headers;
    try {
        let payload = jwt.verify(token, signature);
        let userid = payload.userid;
        let query = await readBody(req)
        let results = await getResults(query, userid);
        res.send(results)
    } catch (err) {
        console.log("POST GRAPHQL - ERROR ####", err)
        res.status(401).end('Unauthorized')
    }
})

module.exports = router;
```

#### Examples of fetching data with graphql

```javascript

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
            humidity
            created
        }
	  }
    }`
})
.then( res => res.json() ).then(console.log)

#############

fetch('https://radiant-anchorage-62389.herokuapp.com/graphql', {
	headers: {
	"authorization": token,
},
	method: 'POST',
	body: `
    query { 
        currentUser { 
            getPlantDataFor(hours: 3) { 
                temp 
                sun 
                moist 
                humidity 
                created
            } 
        } 
    }`
})
.then( res => res.json() ).then(console.log)

###############

fetch('https://radiant-anchorage-62389.herokuapp.com/graphql', {
	headers: {
	"authorization": token,
},
	method: 'POST',
	body: `
    mutation {
        addPlantData(input: {temp: 70 sun: 300 moist: 24 humidity: 3.2  }) {
            userid
        } 
    }
`
})
.then( res => res.json() ).then(console.log)
```


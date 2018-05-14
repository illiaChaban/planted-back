const readBody = require('./readBody');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signature = '1nm@_s5sur1_a11rl3r';

let findUserByEmail = (db, email) => {
    return db.one(`
        SELECT * FROM users WHERE
            email = '${email}';
    `)
}

let createToken = user =>
  jwt.sign(
    { userid: user.userid },
    signature,
    { expiresIn: '365d' }
  );

let postTokens = async (req, res, db) => {
  console.log('posting tokens')
  let body = await readBody(req);
  let creds = JSON.parse(body);
  let { password, email  } = creds;
  console.log(password, email)  
  let user = await findUserByEmail(db, email);
  console.log("USER #####", user)
  let isValid;
  // console.log(user)
  if (user){
    isValid = await bcrypt.compare(password, user.passw);
  }
  if (isValid) {
    let token = createToken(user);
    res.end(token);
  } else {
    res.status(401).end('No token for you!');
  }
};

// let fun = async () => {
//   let hash = await bcrypt.hash('2222', 10);
//   console.log(hash)
// }
// fun()



module.exports = {
    postTokens,
    signature,
    findUserByEmail,
    createToken
};
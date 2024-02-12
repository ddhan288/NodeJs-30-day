// const express = require ('express');
// const authenticationToken = require ('./authMiddleware');

// const app = express();

// app.use(express.json());

// app.get ('/protect-route', authenticationToken, (req, res) => {
//     res.json({message: 'access granted'});
// });

// const port = process.env.PORT || 3000 ;

// app.listen(port, () => {
//     console.log(`server is on ${port}`)
// });

const express = require ("express");
const jwt = require ("jsonwebtoken");
const dotenv = ('dotenv');
dotenv.config();
const app = express();
const port = process.env.port || 3000;
const secretKey = process.env.secretKey;
const token = jwt.sign({id: 1}, secretKey);
console.log( "Acess has been granted");
function authenticationMiddleware (req, res, next ){
    const token = req.headers.

}




const jwt = require('jsonwebtoken');

function authenticationMiddleware(req, res, next) {
  // Get the JWT token from the request headers
  const token = req.headers.authorization;

  // Check if token is present
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the decoded user information to the request object
    req.user = decoded;
    // Allow the request to proceed
    next();
  } catch (error) {
    // If token is invalid, return 401 Unauthorized
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = authenticationMiddleware;


// Problem Statement: Implement an Express middleware function that logs the timestamp 
// and the HTTP method of every incoming request to the server.
const express = require('express');
const app = express ();

app.use(express.json());

function requestLoggerMiddleware( req, res, next) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const timeStamp = today.toUTCString();
    console.log(`${timeStamp} - ${req.method} request received`);
    res.send (`${timeStamp} - ${req.method} request received`)
    next();

}
app.use(requestLoggerMiddleware);
app.get('/user/:id', (req, res) => {
    res.send(req.query.id);
})

const port = process.env.PORT || 3000
app.listen(port , ()=> console.log('server is runing on port 3000'));


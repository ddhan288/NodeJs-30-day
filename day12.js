// Problem Statement: Implement a rate-limiting middleware for an Express application. 
// The middleware should limit the number of requests from a single IP address to a specified rate, 
// and return a 429 Too Many Requests status if the limit is exceeded.
const express = require ('express');
const app = express ();
const reqCounts = new map();

function rateLimitMiddleware(req, res, next) {
    const maxRequestsPerMinute = 3;
    const ipAddress = req.ip;
    if (!reqCounts.has(ipAddress)) {
        reqCounts.set(ipAddress, 1);
    }else {
        const count = reqCounts.get(ipAddress);
        reqCounts.set(ipAddress, count + 1);
    }
    if (reqCounts.get(ipAddress) > maxRequestsPerMinute) {
        return res.status(429).json({'error Message' : 'get request limit exceeded'});
    }
    next();
}

app.use(rateLimitMiddleware);
app.get('/', (req, res) => {
    res.json({'message': "hello alisha"});
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log (`Server is running on ${port}`);
});

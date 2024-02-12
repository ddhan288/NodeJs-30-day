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
    res.json({'message': "hello Deepak"});
});

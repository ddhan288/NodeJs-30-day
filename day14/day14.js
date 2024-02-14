const express = require('express');
const app = express();
const port = process.env.port || 3000
const cache = {};

function cachingMiddleware(req, res, next) {
    // Your implementation here
    const url = req.url;
    const cachedResponse = cache[url];
    if (cachedResponse) {
        const {data, expiration} = cachedResponse;
        if(expiration > Date.now()){
            console.log(`cached response found for ${url}`);
            return res.send(data);
        }else{
            console.log(`cache expired for : ${url}`);
            delete cache[url];
        }
    }
    next();
  }
  app.use(cachingMiddleware);
  const indexRouter = require('./index');
  app.use('/',indexRouter);
  app.listen(port, () => {
    console.log(`server running on ${port}`)
  });
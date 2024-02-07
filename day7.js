const express = require('express');

const app = express ();

app.use(express.json());

app.use ((req, res, next ) => {
    const timeElapsed = Date( Date.now());
    const today = new Date(timeElapsed);
    let timeStamp = today.toDateString();

    console.log('Time:', timeStamp )
    next()
});
app.use('/user/:id ', (req, res, next) => {
    console.log ('Request type:', req.method)
    
})
function requestLoggerMiddleware( req, res, next) {
    

}

app.get('/user/:id', (req, res, next) => {
    res.send(req.query.id);
})

const port = process.env.PORT || 3000
app.listen(port , ()=> console.log('server is runing on port 3000'));


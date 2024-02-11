const express = require ('express');
const authenticationToken = require ('./authMiddleware');

const app = express();

app.use(express.json());

app.get ('/protect-route', authenticationToken, (req, res) => {
    res.json({message: 'access granted'});
});

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(`server is on ${port}`)
});
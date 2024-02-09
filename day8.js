// 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('default');
});

function positiveIntegerHandler(req, res, next) {
    const number = req.query.number;
    if (!Number.isInteger(Number(number)) || Number(number) <= 0) {
        // If the number is not a positive integer, throw an error
        const error = new Error(`${number} is not a positive integer.`);
        error.status = 400;
        return next(error);
    } else {
        res.send('Success: Positive integer received.');
    }
}

// Error handling middleware
app.use(function(err, req, res, next) {
    // Check if it's our specific error
    if (err.status === 400) {
        res.status(400).send('Error: ' + err.message);
    } else {
        // Let other errors be handled by Express's default error handler
        next(err);
    }
});

// Route for positive integers
app.get('/positive', positiveIntegerHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

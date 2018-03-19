const express = require('express');
const path = require('path');

const app = express()

app.use('/register/build', express.static(path.join(__dirname, 'build')))
app.use('/register/assets', express.static(path.join(__dirname, 'assets')))

const htmlPaths = [
    '/register',
    '/register/success'
];

app.get(htmlPaths, function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Production server listening on port 3000'))
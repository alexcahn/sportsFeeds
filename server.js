const express = require('express');
const path = require('path')
const API = require("./api")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// require('./app/routing/apiRoutes')(app);
// require('./app/routing/htmlRoutes')(app);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api/games', function (request, response) {
    API.getAll(request, response)
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
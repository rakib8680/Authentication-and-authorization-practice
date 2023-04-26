const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')
const cors = require('cors')

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.use(cors())

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
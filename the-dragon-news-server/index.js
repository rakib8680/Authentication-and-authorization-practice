const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')
const news = require('./data/news.json')
const cors = require('cors')

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.use(cors())

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    res.send(news.find(item => item._id === id));
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(item => item.category_id === id)
        res.send(categoryNews)
    }
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
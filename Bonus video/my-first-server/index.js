const express = require('express')
const app = express()
const port = 5000


app.get('/', (req, res) => {
    res.send('Hello from my first ever server')
})

app.get('/data',(req, res)=>{
    res.send('this is my data')
})

app.listen(port, ()=>{
    console.log(`my first server is running on port :  ${port}`)
})
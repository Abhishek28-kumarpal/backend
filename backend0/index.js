require('dotenv').config()
//import the express module syntax
const express = require('express');

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const gitdata={
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
}

app.get('/gitdata',(req,res)=>{

  res.json('gitdata')
})

app.get('/twitter', (req, res) => {
  res.send('twitter.com')
})

app.get('/login',(req,res)=>{
    res.send("<h1>login page</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
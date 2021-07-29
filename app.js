var express = require('express');
const { Pool, Client } = require('pg')
var app = express();
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'conference_app',
    password: 'root',
    port: 5432,
  })
app.get('/sessions',(req,res)=>{
    client.connect()
    client.query('SELECT * from sessions', (err, result) => {
      console.log(err, result)
      client.end()
    res.send(result)
})
})
app.post('/submit',(req,res)=>{
    res.send('hello posted')
})
app.listen(8081, function () {
    console.log("Example app listening at 8081")
 })


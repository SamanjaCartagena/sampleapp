const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>My Node App</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h2>About Us</h2>')
})
app.listen(5001, () =>{
  console.log('App listening on port 5000')
})
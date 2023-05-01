const express = require('express');
const app = express();
const port = 5000 ;
const data = require ('./data.json')
const cors = require('cors');

app.use(cors())
app.get('/', ( req , res )=>{
    res.send('shape is cooking')

})

app.get('/data' , (req , res ) =>{
     res.send(data)
})

app.listen(port , ()=>{
    console.log(`Dragon news Running on port`);
})
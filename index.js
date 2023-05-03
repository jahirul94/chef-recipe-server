const express = require('express');
const app = express();
const port = 5000 ;
const data = require ('./data.json')
const details = require('./recipes_details.json')
const cors = require('cors');

app.use(cors())
app.get('/', ( req , res )=>{
    res.send('shape is cooking')

})

app.get('/data' , (req , res ) =>{
     res.send(data)
})

app.get('/:id' , (req , res ) =>{
     const paramsId = req.params.id;
     const selectedItems = details.filter(dt => dt.category_id == paramsId )
     res.send(selectedItems)
})

app.get('/user/:id' , (req , res ) =>{
     const paramsId = req.params.id;
     const selectedItem = data.find(dt => dt.id == paramsId )
     res.send(selectedItem)
})

app.listen(port , ()=>{
    console.log(`Chef page Running on port : ${port}`);
})
const express= require('express');
const mongoose= require('mongoose');
const app =express();

app.use(express.json());

const port = 8080;

app.get('/', async (req,res)=>{
    res.send("Hey user");
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})
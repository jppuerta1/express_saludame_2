const express = require('express')
const app = express ()

app.get('/makers/:name',(req,res)=>{
    const name = req.params.name;
    res.send(`<h1 style="text-transform:capitalize;">${name}</h1>`)
})

app.listen (3000,()=>console.log('listening on port 3000'))
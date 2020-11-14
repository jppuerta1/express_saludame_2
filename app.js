const express = require('express')
const app = express ()

app.get('/makers/:name',(req,res)=>{
    const name = req.params.name;
    let capName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

    res.send(`<h1>Hola ${capName}!</h1>`)
})

app.listen (3000,()=>console.log('listening on port 3000'))
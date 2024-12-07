const express = require('express')
const app = express()

const db = require('./db.cjs')

app.get('/new_post', async(req, res)=>{

    console.log(req.body);
    
    // await db.connect()
    // const result = await db.query('select * from comments')
    // console.log(result);
    
    // await db.end()
    res.send('asd')
})


app.listen(2025, ()=>{
    console.log('server on');
    
})
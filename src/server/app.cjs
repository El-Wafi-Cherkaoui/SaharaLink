const express = require('express')
const app = express()
const db = require('./db.cjs')

const cors = require('cors')

app.use(express.json())
app.use(cors())


app.get('/all_posts', async(req, res)=>{
    const all_posts = await db.query('select * from posts')
    res.send(all_posts.rows)
})
app.post('/new_post', async(req, res)=>{
    const {author, text} = req.body
    await db.query('insert into posts(author, text) values($1, $2)', [author, text])    
    res.send('asd')
})


app.listen(2025, ()=>{
    console.log('server on');
    
})
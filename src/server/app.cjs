const express = require('express')
const app = express()
const db = require('./db.cjs')

const cors = require('cors')
const path = require('path');

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));


app.get('/all_posts', async(req, res)=>{
    const all_posts = await db.query('select * from posts')
    res.send(all_posts.rows)
})
app.post('/new_post', async(req, res)=>{
    const {author, text} = req.body
    await db.query('insert into posts(author, text) values($1, $2)', [author, text])    
    res.send('asd')
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});


app.listen(2025, ()=>{
    console.log('server on');
    
})
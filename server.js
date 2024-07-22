const express = require('express')
const app = express()

const { MongoClient } = require('mongodb')

app.use(express.json()); // JSON 형태의 요청 본문을 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 형태의 요청 본문을 파싱
app.use(express.static("./public"))

app.set('view engine', 'ejs')

let db
const url = ''
new MongoClient(url).connect().then((client)=>{
    console.log('DB연결성공')
    db = client.db('web')
}).catch((err)=>{
    console.log(err)
})

app.listen(8080, ()=>{
    console.log('http://localhost:8080 running~')
})

app.get('/', async(req, res)=>{
    res.render('index.ejs')
})

app.get('/game', async(req, res)=>{
    const choice_element = req.query.choice
    res.render('game.ejs', { element: choice_element })
})

app.get('/result', async(req, res)=>{
    res.render('result.ejs')
})




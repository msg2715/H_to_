const express = require('express')
const path = require('path');
const app = express();

const { MongoClient } = require('mongodb')

app.use(express.json()); // JSON 형태의 요청 본문을 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 형태의 요청 본문을 파싱
app.use(express.static("./public"))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

let db
const url = 'mongodb+srv://msg27015:msg6460***@hto.wha0wue.mongodb.net/?retryWrites=true&w=majority&appName=Hto'
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
    res.render('index')
})

app.get('/game', async(req, res)=>{
    const choice_element = req.query.choice
    if (choice_element < 20) {
        res.send('<script>alert("Ca부터 선택이 가능합니다."); location.href="/";</script>')
    } else {
        res.render('game', { element: choice_element })
    }
})

app.post('/result', async (req, res) => {
    const { choice_element, runningTime, clickTime } = req.body;
    res.render('result', { choice: choice_element, runningTime: runningTime, clickTime: clickTime });
});

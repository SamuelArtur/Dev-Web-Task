const express = require('express')
const app = express()
const port = 3000

var animals = [
    { animal: 'DOG', name: 'Pluto' },
    { animal: 'CAT', name: 'Hercules' },
    { animal: 'BIRD', name: 'Tweety' },
    { animal: 'DOG', name: 'Spiff' },
    { animal: 'CAT', name: 'Tom' },
    { animal: 'BIRD', name: 'Road Runner' }
]

app.use(express.static('project'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', './views');

app.post('/mirror', function (req, res, next) {
    console.log(req.body)
    res.send(req.body)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/querytojson', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.get('/querytojson?animal=:animal&name=:name', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.get('/paramtojson/name/:name/role/:role', (req, res) => {
    console.log(req.params);
    res.send(req.params);
})

app.get('/home', (req, res) => {
    res.render('home’, {title: ‘Lab MPA’, message: ‘Bem vindo ao Lab MPA’});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
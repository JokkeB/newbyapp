const express = require('express')
const app = express()
const port = process.env.PORT || 80

const {
    Pool,
    Client
} = require('pg')
const pool = new Pool({
    user: 'zdbqnonwpnnndi',
    host: 'ec2-54-72-155-238.eu-west-1.compute.amazonaws.com',
    database: 'dbj8vdk8rp5qg1',
    password: '1a6385e739ae50c4ccb94ee464bd117714c4a983cc45b2460ba1e08c8ddb4584',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,

    },
})

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/autos', (req, res) => {
    pool.query('SELECT * FROM AUTOS', (err, res2) => {
        console.log(res2);
        res.send(JSON.stringify(res2.rows));
    })
})

app.get('/test', (req, res) => {
    let arr = ['wesley', 'laura', 'brent'];
    res.send(JSON.stringify(arr));
})

app.listen(port, () => {
    console.log(`App Server luistert op poort ${port}`)
})

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json())


app.post('/nieuw', (req, res) => {
    console.log(req.body);
    pool.query(`INSERT INTO autos(id,merk,model,kleur) VALUES ('${req.body.id}','${req.body.merk}','${req.body.model}','${req.body.kleur}')`, (err, res2) =>{
        res.send(JSON.stringify(res2.body));
    });
    res.send('stop');
})

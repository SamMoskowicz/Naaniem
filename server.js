const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3000

app.use(morgan('dev'))
app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, err => {
    if (err) console.log(err)
    else console.log('app is listening on port:', PORT)
})

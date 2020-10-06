const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3000

app.use(express.static(__dirname))
app.use(morgan('dev'))

app.get('/index.js', (req, res) => res.sendFile(__dirname + '/index.js'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// app.get('/favicon.ico', (req, res) => {
//     const img = new Image()
//     img.src =
//         'https://img.favpng.com/17/24/6/favicon-logo-portable-network-graphics-design-image-png-favpng-HH8J6iCNHV9z5q8krrQZzgtrJ.jpg'
//     res.send(img)
// })

app.listen(PORT, err => {
    if (err) console.log(err)
    else console.log('app is listening on port:', PORT)
})

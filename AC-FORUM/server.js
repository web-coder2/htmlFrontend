const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')



const server = express()
const PORT = 3000

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());



server.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

server.get('/create', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'create.html'))
})

server.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'about.html'))
})




server.listen(PORT, () => {
	console.log(`AC-Forum has been started on http://localhost:${PORT}`)
})
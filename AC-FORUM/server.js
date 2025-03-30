const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// ИМПОРТ МОДЕЛЕЙ ДЛЯ БД И ПРОЧАЯ

const game = require('./models/game.js')


dotenv.config()

const MONGO_URL = process.env.DATABASE_URL
const MONGO_USER = process.env.DATABASE_USERNAME
const MONGO_PASS = process.env.DATABASE_PASSWORD
const MONGO_PORT = process.env.DATABASE_PORT
const DATABASE_NAME = process.env.DATABASE_NAME


const server = express()
const PORT = 3000

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());



// БАЗОВЫЙ РОУТИНГ РЕНДЕРА HTML ШАБЛОНОВ


server.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

server.get('/create', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'create.html'))
})

server.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'about.html'))
})


// GET / POST ЗАПРОСЫ ДЯЛ ДОБАВЛЕНИЯ РЕДАКТИРОВАНИЯ И ПРОЧЕГО (ПОТОМ В ДИРЕКТОРИЮ ROUTES ДЕКОМПОЗИРУЮ А ПОКА НА ВРЕМЯ ТАК ПУСТЬ БУДЕТ)

server.get('/api/getGames', async (req, res) => {
	let games = await game.find()
	res.json({'games' : games})
})

server.post('/api/createGame', (req, res) => {

	try {
		let newGame = game({
		title : req.body.title,
		hrefGame : req.body.hrefGame,
		assassins : req.body.assassins,
		hrefAssassins : req.body.hrefAssassins,
		tampliers : req.body.tampliers,
		hrefTampliers : req.body.hrefTampliers,
		assassinsBase : req.body.assassinsBase,
		hrefAssassinsBase : req.body.hrefAssassinsBase,
	})

	newGame.save()
	res.send(200)

	} catch (e) {
		console.log('ERROR ', e)
		res.send(500)
	}


})



async function startServer() {

	try {
		const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}:${MONGO_PORT}/${DATABASE_NAME}?authSource=admin`
		await mongoose.connect(mongoURL)
	} catch (e) {
		console.log('ERROR ', e)
	}

}


server.listen(PORT, () => {
	startServer()
	console.log(`AC-Forum has been started on http://localhost:${PORT}`)
})
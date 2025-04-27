const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const session = require('express-session')

// ИМПОРТ МОДЕЛЕЙ ДЛЯ БД И ПРОЧАЯ

const game = require('./models/game.js')
const user = require('./models/user.js')


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

server.use(session({
    secret : "qwertyuiop123A",
    resave: false,
    saveUninitialized: false
}))


// БАЗОВЫЙ РОУТИНГ РЕНДЕРА HTML ШАБЛОНОВ


server.get('/', (req, res) => {

	res.sendFile(path.join(__dirname, 'public', 'index.html'))

})

server.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

server.get('/create', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'create.html'))
})

server.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

server.get('/game/:index', async (req, res) => {

	try {
		res.sendFile(path.join(__dirname, 'public', 'game.html'))
	} catch (e) {
		console.log('error !!!!!!!! ', e)
		res.status(500).send('error')
	}

})

server.get('/game/get/:index', async (req, res) => {

	try {
		const idx = req.params.index
		const gameData = await game.find({
			"_id" : idx
		})
		res.status(200).send(gameData)
	} catch (e) {
		console.log('error ********* ', e)
		res.status(500).send('error')
	}

})

server.put('/game/edit/:index', async (req, res) => {

	try {

		const gameIDX = req.params.index
		const editedData = req.body.edited

		const result = await game.updateOne(
			{'_id' : gameIDX},
			{$set : editedData}
		)

		if (result.modifiedCount === 1) {
			res.status(200).send('good updated )))')
		}

	} catch (e) {
		console.log('error !!!!!!!!!!! ', e)
		res.status(500).send('error')
	}

})


// GET / POST ЗАПРОСЫ ДЯЛ ДОБАВЛЕНИЯ РЕДАКТИРОВАНИЯ И ПРОЧЕГО (ПОТОМ В ДИРЕКТОРИЮ ROUTES ДЕКОМПОЗИРУЮ А ПОКА НА ВРЕМЯ ТАК ПУСТЬ БУДЕТ)

server.get('/api/getGames', async (req, res) => {
	let games = await game.find()
	res.json({'games' : games})
})

server.delete('/api/deleteGame/:index', async (req, res) => {

	const idx = req.params.index
	const response = await game.deleteOne({
		'_id' : idx
	})

	if (response.deletedCount === 1) {
		console.log(`ok deleted ${idx}`)
	} else {
		console.log('error')
	}

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
		res.status(500).send('error')
	}


})

server.post('/api/user/create', async (req, res) => {
    try {
        let email = await req.body.email;
        let password = await req.body.password;

        console.log(email, password, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

        let newUser = new user({
            email: email,
            password: password // Не забудьте захешировать пароль перед сохранением в БД!
        });

        await newUser.save(); // Дождитесь завершения операции сохранения
        res.status(200).send('Пользователь создан');

        console.log(newUser);
    } catch (e) {
        console.error(e);
        res.status(500).send('Ошибка сервера');
    }
});


server.post('/api/user/login', async (req, res) => {
    try { 
        const email = req.body.email;
        const password = req.body.password;

        const userAssassin = await user.findOne({ 'email': email });

        if (userAssassin) {
            // Сравниваем пароль (прямое сравнение для примера)
            if (password === userAssassin.password) {
                req.session.email = userAssassin.email;
                req.session.save(err => {
                    if (err) {
                        console.error("Ошибка сохранения сессии:", err);
                        return res.status(500).json({ error: 'Ошибка сервера' });
                    }

                    res.status(200).send('Вход выполнен'); // Отправляем положительный ответ на клиент
                });
            } else {
                res.status(401).send('Неправильный пароль'); // Неправильный пароль
            }
        } else {
            res.status(404).send('Пользователь не найден'); // Пользователь не найден
        }
    } catch (e) {
        console.error(e);
        res.status(500).send('Ошибка сервера');
    }
});


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
const {Schema, model} = require('mongoose')

const game = new Schema({
	title: {
		type: String,
		required: true
	},
	hrefGame: {
		type: String,
		required: true
	},
	assassins: {
		type: String,
		required: true
	},
	hrefAssassins: {
		type: String,
		required: true
	},
	tampliers: {
		type: String,
		required: true
	},
	hrefTampliers: {
		type: String,
		required: true
	},
	assassinsBase: {
		type: String,
		required: true
	},
	hrefAssassinsBase: {
		type: String,
		required: true
	}
})

module.exports = model('gameSchema', game)
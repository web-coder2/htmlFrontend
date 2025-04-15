const {Schema, model} = require('mongoose')

const users = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    assassin: {
        type: Type.objectId,
        ref: 'assassinsTypes'  // пока этой схемы нету но оптом добавлю
    }
})
import {createStore} from 'vuex'

const store = createStore({
    state: {
        killArray: [18, 45, 23, 423],
        assassa: "w3b-c0d3r",
    },
    getters: {
        sortedArray: (state) => {
            return state.killArray.sort((a, b) => a - b)
        },
        evenNumbers: (state) => {
            return state.killArray.filter(num => num % 2 === 0)
        },
    }
})

export default store
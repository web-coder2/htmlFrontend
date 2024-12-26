import {createStore} from 'vuex'

const store = createStore({
    state: {
        killArray: [18, 45, 23, 423],
        assassa: "w3b-c0d3r",
        revelationsCity: ["Masiaf", "Stambul"],
        assassinName: "Altair Ibn La Ahad",
    },
    getters: {
        sortedArray: (state) => {
            return state.killArray.sort((a, b) => a - b)
        },
        evenNumbers: (state) => {
            return state.killArray.filter(num => num % 2 === 0)
        },
    },
    mutations: {
        changeAcName(state, newName) {
            state.assassinName = newName
        }
    }
})

export default store
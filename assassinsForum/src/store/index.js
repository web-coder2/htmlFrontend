import {createStore} from 'vuex'

const store = createStore({
    state: {
        killArray: [18, 45, 23, 423],
        assassa: "w3b-c0d3r",
        revelationsCity: ["Masiaf", "Stambul"],
        assassinName: "Altair Ibn La Ahad",
        number: 10,
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
        },
        changeNumber(state, newNum) {
            state.number += newNum
        }
    },
    actions: {
        changeNumber(context, payload) {
            context.commit('changeNumber', payload)
        }
    }
})

export default store
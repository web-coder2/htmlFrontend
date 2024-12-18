let app = Vue.createApp({
    data() {
        return {
            currentGame: "AC1",
            descriptions: "locations",
            locations: [
                {"game": "AC1", "located": ["Masiaf", "Damascus", "Jerusalim", "Kingdom", "Acre", "Arsuf"]},
                {"game": "AC2", "located": ["Venece", "Florence", "Rome", "Ezio orden villa", "Tuscan", "Forly home", "Mountains"]},
                {"game": "AC brotherhood", "located": ["Rome", "Vatican", "Ruini", "soldiers home", "kurtizanki home", "vori home"]},
                {"game": "AC revelations", "located": ["Masiaf", "Stambul", "Mountains", "kingdom", "udgeground city"]},
                {"game": "AC3", "located": ["New York", "Boston", "forest", "achiles villa", "connor vilage"]}
            ],
            targets: [
                {"game": "AC1", "target": ["Rober de sable", "Jubair", "abu ali Nucvod", "tamir", "talal", "monferat", "garne de na plus"]},
                {"game": "AC2", "target": ["Fernando", "Eduardo", "Jose", "Carlos", "Jorge", "Francisco", "Leonardo"]},
                {"game": "AC brotherhood", "target": ["Oliver", "Billy", "Scott", "Riley", "Max", "John", "Austin"]},
                {"game": "AC revelations", "target": ["Kurtizanki", "Vori", "Kurtizanki", "Vori", "Kurtizanki", "Vori", "Kurtizanki"]},
                {"game": "AC3", "target": ["Connor", "Joshua", "Levi", "David", "Andrew", "Matthew", "Isaac"]}
            ]
        }
    },
    computed: {
        filteredLocations() {
          return this.locations.find(item => item.game === this.currentGame);
        },
        filteredTargets() {
          return this.targets.find(item => item.game === this.currentGame);
        }
    }    
}).mount("#app")
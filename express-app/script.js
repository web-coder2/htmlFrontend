let app = new Vue({
	el: "#app",
	data: {
		number: 0,
		errorMsg: null,
		selectedDay: "friday",
		selectedType: "summHold",
	},
	methods: {
		validation: function() {
			if (this.number > 0 && this.number < 8 && this.number % 1 === 0) {
				this.errorMsg = null
				this.sendData()
			} else {
				this.errorMsg = "число должно быть не больше 7 и не меньше 1 и быть type=int"
			}
		},
		sendData: function() {
			console.log("started send data")
		}
	}
})
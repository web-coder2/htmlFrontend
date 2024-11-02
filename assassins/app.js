let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let text3 = document.getElementById("text3")

let colorStatus = false

text1.addEventListener("click", function() {
    colorStatus =! colorStatus

    if (colorStatus == true) {
        text1.style.color = "red"
        text2.style.color = "blue"
        text3.style.color = "green"
    } else {
        text1.style.color = "white"
        text2.style.color = "yellow"
        text3.style.color = "cyan"
    }

})

text2.addEventListener("click", function() {
    alert("Альтаир похоже мои ученики не совсем понимают как нужно обращаться с клинком может ты покажешь им")
})

text3.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1
    
    if (randomNumber  > 30 && randomNumber < 60) {
        alert("Число " + randomNumber + " больше 30")
    } if (randomNumber > 60) {
        alert("Число " + randomNumber + " больше 60")
    } else {
        alert("Ну тут хрен пойми что")
    }
})
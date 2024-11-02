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
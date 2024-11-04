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

let qwerty1 = text1.getAttribute("qwerty")
console.log(qwerty1)

let text_array = ["text1", "text2", "text3"]
let qwerty_array = []

for (let i = 0; i < text_array.length; i++) {
    qwerty_array.push(document.getElementById(text_array[i]).getAttribute("qwerty"))
}

console.log(qwerty_array)

console.log(document.children[0].children[0].getElementsByTagName("title")[0])
console.log(document.getElementsByTagName("title")[0])

console.log(document.childElementCount)

// дальше идет classList и его методы add и remove тут и так понятно что add добавляет а remove удаляет класс у эдемнта

let text4 = document.getElementById("text4")
let text4_status = false
text4.classList.add("copy-text")

// здесь создам функцию которая на 100 милисекунд поставит один текст а потом другой 

function setHtml() {
    setTimeout(function() {
        text4.textContent = "(c)2024 February >>> Altair Ibn La Ahad"
    }, 400)
    text4.textContent = "Altair the best of assassins creed"
}

text4.addEventListener("click", function() {
    text4_status =! text4_status

    if (text4_status == true) {
        text4.classList.add("copy2")
        text4.textContent = "(c)2024 February >>> Altair Ibn La Ahad"
    } else {
        text4.classList.remove("copy2")
        setHtml()
    }

})

console.log("-----------------------")

console.log(document.querySelectorAll(".card-text"))
console.log(document.querySelector(".card-text").innerHTML)
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

let object3 = {
    name: "Altair",
    skill: 10
}

function killRoberDeSable(obj) {
    obj.skill *= 3.5
}

killRoberDeSable(object3)
console.log(object3)

let true_btn = document.getElementsByClassName("true_btn")
console.log(true_btn)
let true_count = 0
let trueMSG = "<br><i class='true-msg'>Мы верим в себя, Мы видим мир таким какой он есть, и я надеюсь что когда нибудь все увидят его таким</i>"

//true_btn.addEventListener("click", function() {
//    true_btn.insertAdjacentHTML("afterend", trueMSG)
//})

second_true_msg = "<br> <i class='second_true'>- Чтоже есть наш мир (Аль Муалим) - Иллюзия и мы можем покориться ей или преодолеть (Альтаир)</i>"
third_true_msg = "<br> <i class='third_true'>- Что значит преодолеть (Аль Муалим) - понять что НИЧТО НЕ ИСТИНО И ВСЕ ДОЗВОЛЕНО (Альтаир)</i>"

// когда нажимаем на кнопку true_btn, она вставляет сообщение trueMSG после кнопки

true_btn[0].addEventListener("click", function() {

    if (true_count > 3) {
        true_count = 0
    }

    true_count++
    if (true_count % 2 == 0) {
        true_btn[0].insertAdjacentHTML("afterend", second_true_msg)
    } else if (true_count % 3 == 0 && true_count % 2 != 0) {
        true_btn[0].insertAdjacentHTML("afterend", third_true_msg)
    } else {
        true_btn[0].insertAdjacentHTML("afterend", trueMSG)
    }
})

let addBtn = document.getElementById("btn-add")
let inputTag = document.getElementById("tag-add")
let tagContainer = document.getElementById("added-tages")
let newTagCount = 0

addBtn.addEventListener("click", function() {
    newTagCount += 1
    let assassa = document.createElement("div")
    assassa.textContent = inputTag.value    
    let string = "new-tag-" + newTagCount
    assassa.id = string
    tagContainer.appendChild(assassa);
})

let reread = document.getElementById("reread")

reread.addEventListener("click", function() {
    for (let i = 1; i < newTagCount + 1; i++) {
        console.log(document.getElementById("new-tag-" + i).innerText)
    }
})
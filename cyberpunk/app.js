console.log("test")

let coder = {
    name: "web-coder",
    age: 19,
    LP: "javascript",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I'm a ${this.LP} coder!`);
    }
}

let new_coder = Object.create(coder)
console.log(new_coder)

let array = [12, 24, 36, 48, 60]

Array.prototype.devitedTree = function(arr) {
    return arr.map(num => num / 3);
}

console.log(array.devitedTree(array))

Array.prototype.devitedFour = function() {
    return this.map(num => num / 4);
}

console.log(array.devitedFour())
console.log("тоесть если в своем методе массива прописать передачу аргумента то вся логика с масивом идет класическим обращением")
console.log("а если не передать аргументы то к объекту или массиву можно обратится через this как контекст")

let new_array = [16, 32, 48, 60]
console.log(new_array.devitedFour())

function summNumbers(num) {
    return function() {
        return(10 + num)
    }
}

let summer = summNumbers(20)
// summer() >>> return 30

function setLinks(name) {
    return function(domen) {
        return `https://${name}.${domen}`
    }
}

let google = setLinks("google")
let domains_array = ['com', 'org', 'py']

domains_array.forEach(dom => {
    console.log(google(dom))
})


async function getData () {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await response.json()
        console.log(data)
    } catch(error) {
        console.error('Error:', error)
    }
}

let colorStatus = true

let btner = document.getElementById("btner")
btner.addEventListener("click", function() {
    getData()
    colorStatus =!colorStatus
    if (colorStatus === true) {
        btner.style.borderRadius = "10px"
        btner.style.backgroundColor = "black"
    } else {
        btner.style.borderRadius = "20px"
        btner.style.backgroundColor = "#454822"
    }
})

let users = [{"name": "web-coder", "cash": 50000}, {"name": "Elliot", "cash": 30000}, {"name": "Biden", "cash": 15000}, {"name": "Joe", "cash": 34200}]

users.forEach(user => {
    console.log(`user >>> ${user.name} and money ${user.cash} $`)
})

let new_users = users.map(user => user.cash * 10 + 250)
new_users.forEach(item => {
    console.log(`new_user_money >>> ${item}`)
})

let rich_users = users.filter(item => item.cash  > 15000)
console.log(rich_users)

let startedCash = 25000
let all_cash = users.reduce((all, item) => {
    return all + item.cash;
}, startedCash)
console.log(`all_cash >>> ${all_cash}`)

let joe = users.find(user => user.name === "Joe")
console.log(joe)

localStorage.setItem("users", JSON.stringify(users))
localStorage.setItem("money", all_cash)

console.log(localStorage.getItem("users"))
console.log(JSON.parse(localStorage.getItem("users")))

localStorage.removeItem("money")
localStorage.setItem("cash", all_cash)

window.onstorage = event => {
    console.log(`Storage changed >>> ${event.key} : ${event.newValue} in time of ${new Date}`)
}

// здесь я напишу функцию которая будет менять фоновое изображение каждые 2 секунды 

function slider() {
    let images = ["imgs/1.png", "imgs/2.png", "imgs/3.png"]
    let navbarer = document.getElementById("navbarer")
    let index = 1

    function change_image() {
        navbarer.style.backgroundImage = `url(${images[index]})`
        index++
        if (index === images.length) {
            index = 0
        }
    }

    setInterval(change_image, 2000)

}

slider()
console.log("test running")

let coder = function(lp, skill, cash) {

    if (lp == "python") {
        this.coding = "Machine Learning"
    } else if (lp == "javascript") {
        this.coding = "Web Development"
    } else if (lp == "c#") {
        this.coding = "Game Development"
    }

    if (skill > 1 && skill < 3) {
        this.status = "Junior"
    } else if (skill > 3 && skill < 6) {
        this.status = "Middle"
    } else if (skill > 6) {
        this.status = "Senior / TeamLead"
    } else if (skill < 1) {
        this.status = "Intern"
    }

    if (cash > 1000 && cash < 4000) {
        this.city = "Chicago"
    } else if (cash > 4000 && cash < 8000) {
        this.city = "New-York"
    } else if (cash > 8000) {
        this.city = "Las-Vegas"
    }

}

let coder1 = new coder("python", 1, 5000)
console.log(coder1)

let loginBtn = document.getElementById("loginBtn")
let coder_container = document.querySelector(".coder_container")


loginBtn.addEventListener("click", function() {
    coder_container.style.display = "block"
    let dataBtn = document.getElementById("dataBtn")

    dataBtn.addEventListener("click", function() {
        let coderSelect = document.querySelector(".coderSelect").value
        let coderSkill = document.getElementById("coderSkill").value
        let coderCash = document.getElementById("coderCash").value

        let newCoder = new coder(coderSelect, coderSkill, coderCash)
        let coderInfo = document.querySelector(".coderInfo")
        coderInfo.style.display = "block"
        coderInfo.innerHTML = `
            <p class='coding1'>Coding: ${newCoder.coding}</p>
            <p class='coding2'>Status: ${newCoder.status}</p>
            <p class='coding3'>City: ${newCoder.city}</p>
        `
    })

})

let loginer = document.querySelector(".loginer");
let body = document.querySelector("body");

// Установите position: relative для родительского элемента loginer
loginer.parentNode.style.position = "relative"; //Важно!

loginer.style.position = "absolute"; // loginer должен быть позиционирован относительно родителя

let isDragging = false;
let offsetX, offsetY;

loginer.addEventListener("mousedown", (e) => {
 isDragging = true;
 offsetX = e.clientX - loginer.offsetLeft;
 offsetY = e.clientY - loginer.offsetTop;
});

body.addEventListener("mousemove", (e) => {
 if (!isDragging) return;

 const newX = e.clientX - offsetX;
 const newY = e.clientY - offsetY;

 loginer.style.marginLeft = `${newX}px`;
 loginer.style.marginTop = `${newY}px`;
});

body.addEventListener("mouseup", () => {
 isDragging = false;
});
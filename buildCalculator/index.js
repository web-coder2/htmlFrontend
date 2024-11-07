let calculateButton = document.getElementById("calculateButton")

calculateButton.addEventListener("click", function() {
    let buildTypeSelect = document.getElementById("buildTypeSelect").value
    let buildBetonSelect = document.getElementById("buildBetonSelect").value
    let widthA = document.getElementById("widthA").value
    let widthB = document.getElementById("widthB").value
    let widthC = document.getElementById("widthC").value / 1000
    let widthD = document.getElementById("widthD").value / 1000

    // здесь нужно расчитать общую площадь здания

    let totalArea = Math.round(widthA * widthB + widthB * widthC + widthC * widthD + widthD * widthA)
    alert(`Общая площадь здания: ${totalArea} кв.м`)

    let scheme = document.getElementById("scheme") // айди элемета канвас и в нем нужно будет нарисовать чертеж здания в зависимости от размеров
    let canvas = scheme.getContext("2d")
    canvas.clearRect(0, 0, scheme.width, scheme.height) // очистка канваса

    // здесь нужно нарисовать чертеж здания в зависимости от выбранного варианта сборки и бетона

    switch (buildTypeSelect) {
        case "1":
            canvas.fillStyle = "green"
            break;

        case "0.95":
            canvas.fillStyle = "yellow"
            break;

        case "0.9":
            canvas.fillStyle = "blue"
            break;

        case "0.85":
            canvas.fillStyle = "red"
            break;
        
        default:
            canvas.fillStyle = "gray"
            break;
    }

    // тут тепреь нудно нарисовать черными линиями сам чертуж вида сверху 

    canvas.beginPath()
    canvas.moveTo(0, 0)
    canvas.lineTo(widthA, 0)
    canvas.lineTo(widthA + widthB, widthB)
    canvas.lineTo(0, widthB)
    canvas.stroke()

    canvas.beginPath()
    canvas.moveTo(widthA + widthB, 0)
    canvas.lineTo(widthA + widthB + widthC, 0)
    canvas.lineTo(widthA + widthB + widthC + widthD, widthD)
    canvas.lineTo(widthA + widthB, widthB + widthD)
    canvas.stroke()

    canvas.beginPath()
    canvas.moveTo(widthA + widthB + widthC + widthD, 0)
    canvas.lineTo(widthA + widthB + widthC + widthD, widthD)
    canvas.lineTo(widthA + widthB + widthC, widthB + widthD)
    canvas.lineTo(widthA + widthB, widthB)
    canvas.stroke()

    canvas.beginPath()
    canvas.moveTo(0, widthB)
    canvas.lineTo(widthA, widthB)
    canvas.lineTo(widthA + widthB, widthB + widthD)
    canvas.lineTo(0, widthB + widthD)
    canvas.stroke()
    canvas.fillStyle = "white"
    canvas.fill()
    canvas.closePath()
    

})
const express = require("express")
const app = express()

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html")
})

app.get("/main", function(request, response) {
  response.send("<h3>express test app</h3>")
})

app.listen(5000, () => {
  console.log("server has been started...")
})
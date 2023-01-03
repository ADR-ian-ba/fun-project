const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
  console.log("server 300 is starting")
})

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator",function(req, res){
  let weight = Number(req.body.weight)
  let height = Number(req.body.height)
  let result = weight+height
  res.send("your bmi is" + result)

})

app.post("/" , function(req, res){

  let num1 = Number(req.body.num1)
  let num2 = Number(req.body.num2)
  let result = num1 + num2
  res.send("result is" + result)

})
const express = require("express")
const app = express()
const https = require("https")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.listen("3000", function(){
  console.log("SERVER 3000 RUNNING")
})



app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){

      quer = req.body.cityInput
      const url = "https://api.openweathermap.org/data/2.5/weather?q="+ quer +"&appid=632e25da9f2bde02c75b64a53e4c2ff5"
      https.get(url, function(response){
      console.log(response.statusCode)
      response.on("data", function(data){
      let weatherData = JSON.parse(data)
      let temp = weatherData.main.temp
      let des = weatherData.weather[0].description
      let icon = weatherData.weather[0].icon
      let iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<h1>weather in "+quer+" is currently " + des +"</h1>")
      res.write("<p>temprature in "+quer+" is currently " + temp +"</p>")
      res.write("<img src=" + iconUrl + ">")
      res.send()
    })
  })
})


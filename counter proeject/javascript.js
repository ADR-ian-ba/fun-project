let count1 = 0 
let saveString = ""
let counter = document.getElementById("counter")
let save = document.getElementById("save")
let track = document.getElementById("tracker")

function increment(){
  count1 = count1 + 1
  counter.innerText = count1
  console.log(count1)
}


function saved(){
  saveString = saveString + count1 + "-"
  count1 = 0
  counter.innerText = count1
  console.log(saveString)
  save.innerText = saveString
}

function restart(){
  count1 = count1 - count1
  saveString = ""
  save.innerText = "Count"
  console.log(count1)
}
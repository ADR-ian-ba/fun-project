let webSite = []
const saveBtn = document.getElementById("save-el")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ulEl")
const deleteEl = document.getElementById("delete-el")
let storageDocument = JSON.parse(localStorage.getItem("webSite"))

deleteEl.addEventListener("click",function(){
  localStorage.clear()
  storageDocument = localStorage
  ulEl.innerHTML = ""
})

if (storageDocument){
  webSite = storageDocument
  display()
}

saveBtn.addEventListener("click", function(){
  webSite.push(inputEL.value)
  inputEL.value = ""

  clearDisplay()
  display()
  console.log("test run")
})


function display(){
  for (let i = 0 ; i<webSite.length ; i++){
    ulEl.innerHTML += `
    <li><a href= ${webSite[i]} target = blank_>
      ${webSite[i]}
      </a>
    </li>
    `
  }
}

function clearDisplay(){
  ulEl.innerHTML = ""
}
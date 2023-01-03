// model
let todoArr = []
const inputEl = document.getElementById("inputel")
const saveEl = document.getElementById("savebtn")
const unsortedEl = document.getElementById("unsortedel")
const dateEl = document.getElementById("dateel")
const deleteLiEl = document.getElementsByClassName("deleteli")
let storageDocument = ""
const saveStorage = JSON.parse(localStorage.getItem("todolist"))

//view
function render(){
  unsortedEl.innerHTML = ""
  for(let i = 0; i<todoArr.length ; i++){
    unsortedEl.innerHTML += `<li class = "listed">${todoArr[i].todo} : ${todoArr[i].date} <button class="deleteli" id="${todoArr[i].id}" onclick="deleteToDo(this.id)"> delete </button></li>`
  }
}

//control
if(Array.isArray(saveStorage)){
  todoArr = saveStorage
  render()
}else{}


saveEl.addEventListener("click",function(){
  save()
})

function save(){
  if(inputEl.value == " "){
  }
  else if(inputEl.value == ""){
  }
  else{
    todoArr.push({
      todo : inputEl.value,
      date : dateEl.value,
      id : (new Date()).getTime()
    })
    storageDocument = localStorage.setItem("todolist" , JSON.stringify(todoArr))
  }
  console.log("save button pressed!")
  inputEl.value = ""
  render()
}


function deleteToDo(ideas){
  let deleteBtnId = ideas
  console.log(deleteBtnId)
  storageDocument = localStorage
  for(let i = 0 ; i<todoArr.length ; i++){
    if(deleteBtnId == todoArr[i].id){
      todoArr.splice([i], 1)
      console.log("object is deleted")
      console.log(todoArr)
      storageDocument = localStorage.setItem("todolist" , JSON.stringify(todoArr))
    }
    else{}
  }

  render()
}

function deleteAll(){
  todoArr = []
  localStorage.clear()
  render()
}
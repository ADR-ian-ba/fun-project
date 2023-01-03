let checkLife = false
let blackJack = false
let elCard = document.getElementById("el-card")
let elQuestion = document.getElementById("el-question")
let elSum = document.getElementById("el-sum")
let sum = 0
let cards = []

function startGame(){
  if(checkLife === false){
    checkLife = true
    blackJack = false
    elCard.textContent = "Card : "
    let card1 = Math.floor(Math.random()*13) + 1
    cards.push(card1)
    let card2 = Math.floor(Math.random()*13) + 1
    cards.push(card2)
    for(i = 0 ; i < cards.length ; i++){
      elCard.textContent += cards[i] + ","
    }
    
    for(i = 0 ; i < cards.length ; i++){
      sum += cards[i]
    }

    elSum.textContent = "Sum : " + sum
    detect()
  }

  else if (checkLife===true){
    null
  }
}



function detect(){
  if(sum < 21){
    elQuestion.textContent = "Do you want to draw another card?"
    console.log("game is starting")
  }
  else if (sum === 21){
    blackJack === true
    elQuestion.textContent = "You got a Black Jack!"
  }
  else{
    elQuestion.textContent = "You got burned"
    checkLife = false
  }
}

function drawCard(){
  if(checkLife === true && blackJack === false){
    let drawCards = Math.floor(Math.random()*13) + 1
    if(drawCards === 1){
      drawCards === 11
    }
    else if(drawCards > 10){
      drawCards === 10
    }
    cards.push(drawCards)
    elCard.textContent = "Card : "
    for(i = 0 ; i < cards.length ; i++){
      elCard.textContent += cards[i] + ","
    }
    sum = 0
    for(i = 0 ; i < cards.length ; i++){
      sum += cards[i]
    }
    elSum.textContent = "Sum : " + sum
    detect()
  }

else{
  null
}
}


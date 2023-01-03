let rand1 = 0;
let rand2 = 0;
let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let win = document.getElementById("winner");

function roll() {
  rand1 = Math.floor(Math.random() * 6) + 1;
  rand2 = Math.floor(Math.random() * 6) + 1;
  img1.src = `/images/dice${rand1}.png`;
  img2.src = `/images/dice${rand2}.png`;

  if(rand1 > rand2){
    win.textContent = "Player 1 Wins!"
  }
  else if(rand1 == rand2){
    win.textContent = "its a Draw!"
  }
  else{
    win.textContent = "Player 2 Wins!"
  }
}
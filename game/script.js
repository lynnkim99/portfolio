//setup
let board = document.querySelector(".board");
let emoji = "🐳";
let index = 0;
let block = "🚧";

for(let i=0; i<25; i++){
  let div = document.createElement("div");
  div.classList.add("cell");
  board.appendChild(div);
}

//game
document.addEventListener('keydown', event => {
  //board.querySelectorAll("div")[0].innerText = event.keyCode;
  
  //remove emoji from old index
  board.querySelectorAll("div")[index].innerText = '';
  
  if(event.keyCode === 37){//left
    if(index===0){
      index=24;
    }
    else{
      index--;
    }
    board.querySelectorAll("div")[index].innerText = emoji;
  }
  
  else if(event.keyCode === 39){//right
    if(index===24){
      index=0;
    }
    else{
      index++;
    }
    board.querySelectorAll("div")[index].innerText = emoji;
  }
  
  else if(event.keyCode === 38){//up
    if(index<=4){
      index+=20;
    }
    else{
      index-=5;
    }
    board.querySelectorAll("div")[index].innerText = emoji;
  }
  
  else if(event.keyCode === 40){//down
    if(index>=20){
      index-=20;
    }
    else{
      index+=5;
    }
    board.querySelectorAll("div")[index].innerText = emoji;
  }
  
} );

//extra:
//spawn emoji in the center
//some random stuffs
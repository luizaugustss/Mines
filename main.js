import { number_mine } from './number_mine.js';
import { draw } from './Draw.js';
import { win } from './Draw.js';
import { lose } from './Draw.js';
import { Reset_lose } from './Draw.js';
var visited = []; // Initialize visited matrix


let docTitle = document.title;
window.addEventListener("blur", () =>{ 
document.title = "☺ Come back ☺";
})
window.addEventListener("focus", () =>{ 
document.title = docTitle;
})

let width_board = 15


let length_board = 20
let bombs = 30
document.getElementById('bombs').innerText = bombs
var N_Cell =  width_board * length_board
var matriz = new Array(width_board)
for (let index = 0; index < matriz.length; index++) {
  matriz[index] = new Array(length_board)
}
for (let i = 0; i < width_board ; i++) {
  for (let j = 0; j < length_board ; j++) {
  const span = document.createElement('span');
  span.id = 'col-'+ i +"-"+ j;
  matriz[i][j] = 0;
  document.getElementById('board').appendChild(span);
}
}



 var cont_b = 0
 console.log(cont_b)
while (cont_b < bombs) {
  var rand_1 = getRandomInt(width_board);
  var rand_2 = getRandomInt(length_board);
  if (matriz[rand_1][rand_2] == 0){
  matriz[rand_1][rand_2] = 1;
  cont_b++;
  }
}

document.getElementById("board").style.gridTemplateRows = "repeat("+width_board+", 1fr)"
document.getElementById("board").style.gridTemplateColumns = "repeat("+length_board+ ", 1fr)"
//document.getElementById("board").style.opacity = "repeat("+length_board+ ", 1fr)"




const _ = document,
          Cell = Array.from(_.querySelectorAll('.board > span')),
					reset = _.querySelector('#reset');

 event(true)


function event(can) {
	reset.addEventListener('click', fnreset)
  for(let c of Cell)
    if(can){
      c.addEventListener('click', play)
      c.addEventListener('contextmenu', flags )
    }else{
      c.removeEventListener('click', play)
      c.removeEventListener('contextmenu', flags )
    }
    
}

function flags(event) {
  if (event.target.tagName.toLowerCase() === 'span') {
    console.log(event.target.id)
  //This function will be called whenever the right mouse button is clicked on the span
  draw(50,event.target.id)
  // Prevent the context menu from showing up
  event.preventDefault();

}
}
function move(ind, sign) {
  arr[ind] = sign
  console.log(arr)

  for (let i = 0; i < wins.length; i++) {
     let [a, b, c] = wins[i] 
      if(cmp(arr[a], arr[b], arr[c])){
        console.log(sign, ' wins')
        event(false)
        Cell[a].classList.add('win')
        Cell[b].classList.add('win')
        Cell[c].classList.add('win')
      }
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function cmp(a, b, c) {
  if(a && b && c)
    return (a === b) && (a === c) && (b === c)
}

// Make new matriz with bombs
function new_mat(){
  let spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.backgroundColor = ''; // replace background color'#3a3a3a'
  }
  for (let i = 0; i < width_board ; i++) {
    for (let j = 0; j < length_board ; j++) {
    
    matriz[i][j] = 0;
  
  }
  }
  console.table(matriz)
  var cont_b = 0
  console.log(cont_b)
   while (cont_b < bombs) {
   rand_1 = getRandomInt(width_board);
   rand_2 = getRandomInt(length_board);
   if (matriz[rand_1][rand_2] == 0){
   matriz[rand_1][rand_2] = 1;
   cont_b++;
   }
  
 }
 console.table(matriz)
  for (let i = 0; i < width_board ; i++) {
    for (let j = 0; j < length_board ; j++) {
      
      let span = document.getElementById("col-"+ i +"-"+ j)
      
      span.innerHTML = ""
     
      
    }
    

  }
  visited = [] // Reset visited matrix

}

// On click of the reset button
function fnreset() {
    Reset_lose()
    new_mat()
   
    event(true)
}
// On click of a cell in the board
function play(e) {
  if (e.target.tagName.toLowerCase() === 'span') {
  const __ = e.target;
  if (__.id.startsWith("col")) {
    var wid = parseInt(__.id.split("-")[1]);
    var len = parseInt(__.id.split("-")[2]);
  Draw_play(wid ,len)
  }
  if (win == true) {
    event(false)
    for (let i = 0; i < width_board ; i++) {
      for (let j = 0; j < length_board ; j++) {
        draw(number_mine(i, j, matriz, width_board, length_board),"col-"+ i +"-"+ j)
      }
    }
  }
  if (lose == true) {
    event(false)
    alert("You lose!!!")
    for (let i = 0; i < width_board ; i++) {
      for (let j = 0; j < length_board ; j++) {
        draw(number_mine(i, j, matriz, width_board, length_board),"col-"+ i +"-"+ j)
      }
    }
  }
}
}
function Draw_play(wid, len){
 
   // Initialize visited matrix if it's not already initialized
   if (visited.length === 0) {
    for (var i = 0; i < matriz.length; i++) {
        visited[i] = [];
        for (var j = 0; j < matriz[i].length; j++) {
            visited[i][j] = false;
        }
      }
    }
    // Check if cell is out of bounds or already visited
    if (wid < 0 || len < 0 || wid >= matriz.length || len >= matriz[0].length || visited[wid][len]) {
      return;
    }
    visited[wid][len] = true; // Mark cell as visited

    var number_mine_1 = number_mine(wid, len, matriz, width_board, length_board)
    if (number_mine_1 != 0 || matriz[wid][len] == 1) {
      draw(number_mine_1,"col-"+ wid +"-"+ len)
    }else if (number_mine_1 == 0){
      draw(number_mine_1,"col-"+ wid +"-"+ len)
      //alert("click:  "+ "col-"+ wid +"-"+ len)
      Draw_play(wid-1, len)   
      Draw_play(wid, len+1)
      Draw_play(wid, len-1)    
      Draw_play(wid+1, len)    
    }
  }

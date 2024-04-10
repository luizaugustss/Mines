import { number_mine } from './number_mine.js';
import { play } from './play.js';


let docTitle = document.title;
window.addEventListener("blur", () =>{ 
document.title = "☺ Come back ☺";
})
window.addEventListener("focus", () =>{ 
document.title = docTitle;
})

let width_board = 20


let length_board = 30
let bombs = 10
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
					reset = _.querySelector('#reset')


function event(can) {
	reset.addEventListener('click', fnreset)
  for(let c of Cell)
    if(can)
      c.addEventListener('click', play)
    else
      c.removeEventListener('click', play)
}

event(true)
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
function new_mat(){
  
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

  for (let i = 0; i < width_board ; i++) {
    for (let j = 0; j < length_board ; j++) {
      const p = document.createElement('p');
      let span = document.getElementById("col-"+ i +"-"+ j)
      let n_mine = number_mine(i ,j, matriz, width_board, length_board)
      span.innerHTML = ""
      if (n_mine >= 0) {
        p.innerText = n_mine
        span.appendChild(p);
      } else {
        var img = document.createElement('img');
        img.src = 'bomb.png';
        img.alt = 'Descrição da imagem';
        img.style.width = "20px"
        img.style.height= "20px"
        img.style.backgroundImage= "none"
        img.style.alignContent= "center"
        img.className="bomb"
        span.appendChild(p)
        p.appendChild(img);
      }
    }
    

  }


}


function fnreset() {

    new_mat()
    
    event(true)
}
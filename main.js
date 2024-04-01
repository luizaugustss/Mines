let docTitle = document.title;
window.addEventListener("blur", () =>{ 
document.title = "☺ Come back ☺";
})
window.addEventListener("focus", () =>{ 
document.title = docTitle;
})

let width_board = 20


let length_board = 10
var N_Cell =  width_board * length_board
var matriz = new Array(width_board)
for (let index = 0; index < matriz.length; index++) {
  matriz[index] = new Array(length_board)
}


for (let i = 0; i < width_board ; i++) {
  for (let j = 0; j < length_board ; j++) {
  const span = document.createElement('span');
  span.id = 'col-'+ i +"-"+ j;
  matriz[i][j] = getRandomInt(2);
  document.getElementById('board').appendChild(span);
}
}

document.getElementById("board").style.gridTemplateRows = "repeat("+width_board+", 1fr)"
document.getElementById("board").style.gridTemplateColumns = "repeat("+length_board+ ", 1fr)"
//document.getElementById("board").style.opacity = "repeat("+length_board+ ", 1fr)"




const _ = document,
          Cell = Array.from(_.querySelectorAll('.board > span')),
					reset = _.querySelector('#reset')

let cur = true

//let mat = new_mat()

for (let i = 0; i < width_board ; i++) {
  for (let j = 0; j < length_board ; j++) {
  const p = document.createElement('p');
  document.getElementById('col-'+ i +"-"+ j).appendChild(p);
  p.className="number"
  p.id="n-"+ i +"-"+ j
  p.innerText = number_mine(i,j)
}
}

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
function number_mine(wid,len){
  // Cell-->Current Cell (row, col)
  // N -->  North        (row-1, col)
  // S -->  South        (row+1, col)
  // E -->  East         (row, col+1)
  // W -->  West         (row, col-1)
  // N.E--> North-East   (row-1, col+1)
  // N.W--> North-West   (row-1, col-1)
  // S.E--> South-East   (row+1, col+1)
  // S.W--> South-West   (row+1, col-1)
//[0, 1, 2,
// 3, 4, 5, 
// 6, 7, 8]

  var test = [1, 1, 1,
              1, 1, 1, 
              1, 1, 1]

              console.log("inicio")
              console.log("valor w:"+ wid + " valor l: " +len)
  if (wid+1  >= width_board){

    console.log("1-valor w:"+ wid + " valor l: " +len)
     test[6] = 0 
     test[7] = 0
     test[8] = 0
  }
  if( wid  <= 0){
    console.log("2-valor w:"+ wid + " valor l: " +len)

    test[0] = 0 
    test[1] = 0
    test[2] = 0

  }
  if  (len+1 >= length_board){
  
    console.log("3-valor w:"+ wid + " valor l: " +len)
    test[2] = 0 
    test[5] = 0
    test[8] = 0
  }
  if (len <= 0){

    console.log("4-valor w:"+ wid + " valor l: " +len)
    
    test[0] = 0 
    test[3] = 0
    test[6] = 0
  }
  console.log("pos if")
              console.log("valor w:"+ wid + " valor l: " +len)
  var cont = 0
  for (let index = 0; index < test.length; index++) {
    console.log("index: "+index+" valor:"+test[index])
     if (test[index] > 0){

      switch (index) {
          case 0:
           console.log(index)
           console.log("valor w:"+ wid + " valor l: " +len)
           if (matriz[wid-1][len-1] == 1){       
           cont++  
          }
          break;
          case 1:
            console.log(index)
            console.log("valor w:"+ wid + " valor l: " +len)
             if (matriz[wid-1][len] == 1){    
               
              cont++  
              }
          
          break;
          case 2:
            console.log(index)
            console.log("valor w:"+ wid + " valor l: " +len)
            if (matriz[wid-1][len+1] == 1){       
              cont++  
              }
          
          break;
          case 3:
            
            if (matriz[wid][len-1] == 1){       
              cont++  
              }
          
          break;
          case 4:
            
            if (matriz[wid][len] == 1){       
              cont = cont - 99  
              }
          
          break;
          case 5:
            if (matriz[wid][len+1] == 1){       
              cont++  
              }

          break;
          
          case 6:
            if (matriz[wid+1][len-1] == 1){       
              cont++  
              }

          break;
          case 7:
            if (matriz[wid+1][len] == 1){       
              cont++  
              }

          break;
          case 8:
            if (matriz[wid+1][len+1] == 1){       
              cont++  
              }

          break;
        default:
          break;
      
    }
  }
}
console.log("total: "+ cont)
return cont
}
function event(can) {
	reset.addEventListener('click', fnreset)
  for(let c of Cell)
    if(can)
      c.addEventListener('click', play)
    else
      c.removeEventListener('click', play)
}

event(true)
function play(e) {
  const __ = e.target
  console.log("click")
  
    console.log("click-if")
    __.style.opacity = "100%"
    
   // cur = !cur
   // __.innerHTML = cur ? '<p class ="number" name="O">O</p>' :  '<p class="number"  name="X">X</p>'
    //move(parseInt(__.id.split(/\D+/g)[1]), __.childNodes[0].getAttribute('name'))
  
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
function new_mat(){
  
  for (let i = 0; i < width_board ; i++) {
    for (let j = 0; j < length_board ; j++) {
       matriz[i][j] = getRandomInt(2);
       
       
     
       // const elem = document.getElementById("para");
  //elem.style.color = newColor;
       //e.innerText = "2"
    }
  }
  console.table(matriz)
  for (let i = 0; i < width_board ; i++) {
    for (let j = 0; j < length_board ; j++) {
      let elem = document.getElementById("n-"+ i +"-"+ j)
      elem.innerText =  number_mine(i,j)

    }

  }


}


function fnreset() {
    //for(let c of Cell){
    //  c.classList.remove('win')
   //   c.innerHTML = ''
   // }
    new_mat()
    
    event(true)
}
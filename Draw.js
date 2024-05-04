export var win = false  // export var win 
export var lose = false // export var lose
export function draw(n_mine,id) {
  if (ID_Exists(id)) {
    const p = document.createElement('p');
    
    let span = document.getElementById(id) 
   
    if (!childPExists(span)) {
     
      if (n_mine > 0 && n_mine < 50) {
        span.innerHTML = ""
        p.innerText = n_mine
        span.appendChild(p);
      }else if (n_mine == 0) {
        span.style.backgroundColor = "#333333"
      }
        
      else if (n_mine == 50) {
          console.log("entrou")
          span.innerHTML = ""  
          var img = document.createElement('img');
          img.src = 'red-flag.png';
          img.alt = 'Descrição da imagem';
          img.style.width = "20px"
          img.style.height= "20px"
          img.style.backgroundImage= "none"
          img.style.alignContent= "center"
         
          img.className="flag"
          img.id = "flag"+id
          span.appendChild(p)
          p.appendChild(img);
         
        
      } else {
  
        span.innerHTML = ""
        var img = document.createElement('img');
        img.src = 'bomb.png';
        img.alt = 'Descrição da imagem';
        img.style.width = "20px"
        img.style.height= "20px"
        img.style.backgroundImage= "none"
        img.style.alignContent= "center"
       // img.style.pointerEvents = "none"
        img.className="bomb"
        span.appendChild(p)
        p.appendChild(img);
        lose = true
      }
    }else if (n_mine == 50){
      if (ID_Exists("flag"+id)) {
        span.removeChild(span.querySelector('p'))    
      } else {  
        span.innerHTML = ""  
        var img = document.createElement('img');
        img.src = 'red-flag.png';
        img.alt = 'Descrição da imagem';
        img.style.width = "20px"
        img.style.height= "20px"
        img.style.backgroundImage= "none"
        img.style.alignContent= "center"
        //img.style.pointerEvents = "none"
        img.className="flag"
        img.id = "flag"+id
        span.appendChild(p)
        p.appendChild(img);
       
      }
    }
  }
}
export function Win(){

  win = true
  
}
export function Reset_lose(){

  lose = false
  
}
function ID_Exists(id) {
  var doc = document.getElementById(id);
  return doc !== null;
}
function childPExists(element) {
  var p = element.querySelector('p');
  return p !== null;
}

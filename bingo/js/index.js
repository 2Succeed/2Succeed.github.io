//Initialize all boards with intial values
function init(){
    let cards = document.getElementById("cards");
    let c = document.getElementById("show-cards");
    let sc = document.getElementById("show-card-select");
    cards.style.display = "flex";
    c.style.display = "none";
    sc.style.display = "none";
      
    // Intialize all cells to white  
    let isAllCheck = true;
    let cbarray = document.getElementsByName("1");
    for(let i = 0; i < cbarray.length; i++){

        cbarray[i].checked = !isAllCheck
    }   
    isAllCheck = !isAllCheck; 
    
    let x = document.getElementsByTagName("td");
    for(let i=0; i<x.length; i++){
        x[i].style.backgroundColor = "white";
    }
}
//Slider changes for all fonts
myRange.oninput = function() {
    let v = this.value;
    let m = (this.value/2)+"px";
    let t = document.getElementsByTagName('td');
    let r = document.getElementsByTagName('tr');
    for(let i=0; i<t.length; i++){ t[i].style.fontSize = v+"px"; }
    for(let i=0; i<r.length; i++){ r[i].style.fontSize = v+"px"; }
    document.getElementById('squarefree1').style.fontSize = m;
    document.getElementById('squarefree2').style.fontSize = m;
    document.getElementById('squarefree3').style.fontSize = m;
    document.getElementById('squarefree4').style.fontSize = m;
    document.getElementById('squarefree5').style.fontSize = m;
    document.getElementById('squarefree6').style.fontSize = m;
    document.getElementById('squarefree7').style.fontSize = m;
    document.getElementById('squarefree8').style.fontSize = m;
    document.getElementById('squarefree9').style.fontSize = m;
    document.getElementById('squarefree10').style.fontSize = m;
    document.getElementById('squarefree11').style.fontSize = m;
    document.getElementById('squarefree12').style.fontSize = m;
    document.getElementById('squarefree13').style.fontSize = m;
    document.getElementById('squarefree14').style.fontSize = m;
    document.getElementById('squarefree15').style.fontSize = m;
    document.getElementById('squarefree16').style.fontSize = m;
    document.getElementById('squarefree17').style.fontSize = m;
    document.getElementById('squarefree18').style.fontSize = m;
    document.getElementById('squarefree19').style.fontSize = m;
    document.getElementById('squarefree20').style.fontSize = m;
    document.getElementById('squarefree21').style.fontSize = m;
    document.getElementById('squarefree22').style.fontSize = m;
    document.getElementById('squarefree23').style.fontSize = m;
    document.getElementById('squarefree24').style.fontSize = m;
    document.getElementById('squarefree25').style.fontSize = m;
    document.getElementById('squarefree26').style.fontSize = m;
    document.getElementById('squarefree27').style.fontSize = m;
    document.getElementById('squarefree28').style.fontSize = m;
    document.getElementById('squarefree29').style.fontSize = m;
    document.getElementById('squarefree30').style.fontSize = m;    
}
// Shows Cards and Highlights Card Number
function showHideCard(bingoid, id) {   
  let w = document.getElementsByTagName("h1");
  let d = document.getElementsByTagName("h3");
    
  w[0].style.display = "none";
  for(let i=0; i<d.length; i++){
        d[i].style.display = "none";   
  }     

  let x = document.getElementById(bingoid);
  let y = document.getElementById(id);
  if (x.style.display == "flex") {
    x.style.display = "none";
    y.style.backgroundColor = "white";
  } else {
    x.style.display = "flex";
    y.style.backgroundColor = "#808080";
  }
}
// Will Highlight Cell of Each Board
function cc(id) {
  let x = document.getElementById(id);
  if (x.style.backgroundColor === "white") {
    x.style.backgroundColor = "#808080";
      
  } else {
    x.style.backgroundColor = "white";
  }
}
//Shows or Hides Card Select
function showHideCardSelect() { 
  let x = document.getElementById("card-select");
  let sc = document.getElementById("show-card-select");
  let hc = document.getElementById("hide-card-select");    
      
  if (x.style.display === "none") {
    x.style.display = "flex";
    hc.style.display = "inline-block";  
    sc.style.display = "none";  
  } else {
    x.style.display = "none";
    hc.style.display = "none";  
    sc.style.display = "inline-block";        
      
  }
}
// Shows and Hides Cards
function showHideCards() { 
  let x = document.getElementById("cards");
  let sc = document.getElementById("show-cards");
  let hc = document.getElementById("hide-cards"); 
    
  if (x.style.display === "none") {
    x.style.display = "flex";
    hc.style.display = "inline-block";  
    sc.style.display = "none"; 
  } else {
    x.style.display = "none";
    hc.style.display = "none";  
    sc.style.display = "inline-block"; 
  }
}
//Helper to Keep Card Select Greyed.
function keep(id){
    switch(id){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '10':
            case '11':
            case '12':
            case '13':
            case '14':
            case '15':
            case '16':
            case '17':
            case '18':
            case '19':
            case '20':
            case '21':
            case '22':
            case '23':
            case '24':
            case '25':
            case '26':
            case '27':
            case '28':
            case '29':
            case '30':
            return false;
            break;
        default:
            return true;
    }
}
// Clears All Highlights of Boards
function clearBoards(){
    let x = document.getElementsByTagName("td");
    for(let i=0; i<x.length; i++){
        if(keep(x[i].id)){
            x[i].style.backgroundColor = "white";
        }
    }
}






//Initialize all boards with intial values
function init(){
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

$('slider').on('change', function () {
    var v = $(this).val();
    $('td').css('font-size', v + 'px')
    $('tr').css('font-size', v + 'px')
});

window.toggleLeft = function() {
    var element = document.getElementById("offcanvas-left");
    element.classList.toggle("hide");
}
window.toggleRight = function() {
    var element = document.getElementById("offcanvas-right");
    element.classList.toggle("hide");
}

function showHideCard(bingoid) { 
  let w = document.getElementsByTagName("h1");
  let d = document.getElementsByTagName("h3");
  w[0].style.display = "none";
  for(let i=0; i<d.length; i++){
        d[i].style.display = "none";   
  }     

  let x = document.getElementById(bingoid);
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function cc(id) {
  let x = document.getElementById(id);
  if (x.style.backgroundColor === "white") {
    x.style.backgroundColor = "#808080";
      
  } else {
    x.style.backgroundColor = "white";
  }
}

function showHideCardSelect() { 
  let x = document.getElementById("aside");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function showHideCards() { 
  let x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function clearBoards(){
    let x = document.getElementsByTagName("td");
    for(let i=0; i<x.length; i++){
        x[i].style.backgroundColor = "white";
    }
}


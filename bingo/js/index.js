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


/*$( "#slider" ).slider({
    range: "max",
    min: 10,
    max: 80,
    value: 12,
    slide: function( event, ui ) {
      $( "tr" ).css( { fontSize: ui.value} );
      $( "tr" ).css( { textAlign: "center"} );
      $( "td" ).css( { fontSize: ui.value} );
      $( "td" ).css( { textAlign: "center"} );
      $( "#squarefree1" ).css( {fontSize: ui.value/2 });
      $( "#squarefree2" ).css( {fontSize: ui.value/2 });
      $( "#squarefree3" ).css( {fontSize: ui.value/2 });
      $( "#squarefree4" ).css( {fontSize: ui.value/2 });
      $( "#squarefree5" ).css( {fontSize: ui.value/2 });
      $( "#squarefree6" ).css( {fontSize: ui.value/2 });
      $( "#squarefree7" ).css( {fontSize: ui.value/2 });
      $( "#squarefree8" ).css( {fontSize: ui.value/2 });
      $( "#squarefree9" ).css( {fontSize: ui.value/2 });
      $( "#squarefree10" ).css( {fontSize: ui.value/2 });
      $( "#squarefree11" ).css( {fontSize: ui.value/2 });
      $( "#squarefree12" ).css( {fontSize: ui.value/2 });
      $( "#squarefree13" ).css( {fontSize: ui.value/2 });
      $( "#squarefree14" ).css( {fontSize: ui.value/2 });
      $( "#squarefree15" ).css( {fontSize: ui.value/2 });
      $( "#squarefree16" ).css( {fontSize: ui.value/2 });
      $( "#squarefree17" ).css( {fontSize: ui.value/2 });
      $( "#squarefree18" ).css( {fontSize: ui.value/2 });
      $( "#squarefree19" ).css( {fontSize: ui.value/2 });
      $( "#squarefree20" ).css( {fontSize: ui.value/2 });
      $( "#squarefree21" ).css( {fontSize: ui.value/2 });
      $( "#squarefree22" ).css( {fontSize: ui.value/2 });
      $( "#squarefree23" ).css( {fontSize: ui.value/2 });
      $( "#squarefree24" ).css( {fontSize: ui.value/2 });
      $( "#squarefree25" ).css( {fontSize: ui.value/2 });
      $( "#squarefree26" ).css( {fontSize: ui.value/2 });
      $( "#squarefree27" ).css( {fontSize: ui.value/2 });
      $( "#squarefree28" ).css( {fontSize: ui.value/2 });
      $( "#squarefree29" ).css( {fontSize: ui.value/2 });
      $( "#squarefree30" ).css( {fontSize: ui.value/2 });
    }
  });*/





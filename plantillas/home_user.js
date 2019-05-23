
var modal = document.getElementById("modal");
var btn = document.getElementById("curso");

btn.onclick = function(){ 
    modal.style.display="block";
}


window.onclick = function(event){
    if(event.target == modal){
        modal.style.display="none";
    }
}




//var bnd = document.querySelectorAll(".boundary");
window.onload = function(){

   
   var yo= document.getElementById("boundary1");
   go(yo);
   goAll();

}


function go(g){
    g.addEventListener("mouseover",change);
    function change(){
        var bnd = document.querySelectorAll(".boundary");
        for(var i in bnd){
       bnd[i].className="boundary youlose";
    }
        
    }

}
function goAll(){
     var bnd = document.querySelectorAll(".boundary");
    for(var i in bnd){
       go(bnd[i])
    }
}

var bnd = document.querySelectorAll(".boundary");

var lost = "false";
window.onload = function(){

   
   var yo= document.getElementById("boundary1");
   
   //console.log(lost);
  
  
   goAll();
   start(); 
   
   cheat();
   begin();
   ended(lost);
 

}

function gameSet(){
    
}

function go(g){
    g.addEventListener("mouseover",change);
    function change(){
        lost="true";
         //console.log(lost);
        var bnd = document.querySelectorAll(".boundary");
        for(var i = 0; i < bnd.length-1; i++){
       bnd[i].className="boundary youlose";
       
    }
        
    }

};
function goAll(){
     var bnd = document.querySelectorAll(".boundary");
    // console.log(bnd);
    for(var i = 0; i < bnd.length-1; i++){
       go(bnd[i])
    }
};


function ended(l){
    document.getElementById("end").addEventListener("mouseover",winOrLose);
    function winOrLose(){
        //console.log(l);
    if(document.getElementById("boundary1").className==="boundary youlose"){
        document.getElementById("status").innerHTML="You Lose!"
    }
    else{
        document.getElementById("status").innerHTML = "You Win!"
        

    }
};
};
function start(){
    document.getElementById("start").addEventListener("click",reset);

    function reset(){
         var bnd = document.querySelectorAll(".boundary");
         for(var i = 0; i < bnd.length-1; i++){
            bnd[i].className="boundary";
           
         }
         document.getElementById("status").innerHTML = 'Move your mouse over the "S" to begin.'
          }
    
}
function begin(){
    document.getElementById("start").addEventListener("mouseout",beginG);
    function beginG(){
        document.getElementById("status").innerHTML = 'Game has begun'
    }

}
function cheat(){
     document.getElementById("maze").addEventListener("mouseout",getX);
     function getX(event){
         var x = event.clientX
         if(x<83){
             document.getElementById("status").innerHTML = "cheater, you lose";
             
             var bnd = document.querySelectorAll(".boundary");
        for(var i = 0; i < bnd.length-1; i++){
       bnd[i].className="boundary youlose";
       console.log (x);
         }
     }
}
}

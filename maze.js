
window.onload = function(){

   document.getElementById("boundary1").innerHTML="helo";
   go();
   

}
function go(){
    document.getElementById("boundary1").addEventListener("mouseover",change);
    function change(){
        document.getElementById("boundary1").className="boundary youlose";
    }

}

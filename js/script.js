var clickButtons = document.getElementById("button1");
var cont = 0;
clickButtons.addEventListener("click", function(){
    alert(Math.floor(Math.random()*100));
    if(cont%2==0){
        clickButtons.style.color = "red";
        cont++;
    }else{
        clickButtons.style.color = "blue";
        cont++;
    }
    
});
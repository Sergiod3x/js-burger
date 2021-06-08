var tButton = document.getElementById("total-button");
var total = document.getElementById("total");
var discountCode = ["ddxdf","ffccvf","xsdcfs","fxsdfg","dsddsf"]
var checkItem = document.getElementsByClassName("ingredients");

tButton.addEventListener("click", function(){

    var checkItem = document.getElementsByClassName("ingredients");
    var totalValue = 0 ;

    for ( var i = 0; i < checkItem.length; i++){
        if(checkItem[i].checked){
            totalValue+= parseInt(checkItem[i].value);
        }
    }

    var discount =  document.getElementById("discountC");

    if(discount.value.length == 0){
        totalValue = totalValue;
    } else {
        if( discountCode.includes(discount.value) ){
            totalValue = totalValue * 0.7;
        } else {
            alert("Il codice inserito non è valido");
        }
    }
    

    total.innerHTML = "Il prezzo finaledel burgher è di " + totalValue +"€";
})







// var clickButtons = document.getElementById("button1");
// var cont = 0;
// clickButtons.addEventListener("click", function(){
//     alert(Math.floor(Math.random()*100));
//     if(cont%2==0){
//         clickButtons.style.color = "red";
//         cont++;
//     }else{
//         clickButtons.style.color = "blue";
//         cont++;
//     }
    
// });
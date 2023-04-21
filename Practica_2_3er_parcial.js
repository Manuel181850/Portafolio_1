function suma(){
    var resul;
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    resul=parseInt (numero1)+parseInt (numero2);
    document.getElementById("resul").innerHTML=resul;
}
function resta(){
    var resul;
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    resul=parseInt (numero1)-parseInt (numero2);
    document.getElementById("resul").innerHTML=resul;
}
function mul(){
    var resul;
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    resul=parseInt (numero1)*parseInt (numero2);
    document.getElementById("resul").innerHTML=resul;
}
function div(){
    var resul;
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    resul=parseInt (numero1)/parseInt (numero2);
    document.getElementById("resul").innerHTML=resul;
}
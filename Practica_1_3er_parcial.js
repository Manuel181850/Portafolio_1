function sumar(){
    var result;
    var sum1=prompt("Escribe un numero","numero");
    var sum2=prompt("Escribe un numero","numero");
    result=parseInt(sum1)+parseInt(sum2);
    alert("la suma es "+result);
}
function restar(){
    var result;
    var res1=prompt("Escribe un numero","numero");
    var res2=prompt("Escribe un numero","numero");
    result=parseInt(res1)-parseInt(res2);
    alert("la resta es "+result);
}
function mul(){
    var result;
    var mul1=prompt("Escribe un numero","numero");
    var mul2=prompt("Escribe un numero","numero");
    result=parseInt(mul1)*parseInt(mul2);
    alert("la multiplicacionn es "+result);
}
function div(){
    var result;
    var div1=prompt("Escribe un numero","numero");
    var div2=prompt("Escribe un numero","numero");
    result=parseInt(div1)/parseInt(div2);
    alert("la divicion es "+result);
}
function val(){
    var val=prompt("Escribe un numero","numero");
    if (val>=0) {
        alert("El numero es positvo "+val);
    }
    if (val<0) {
        alert("El numero es negativo "+val);
    }
}
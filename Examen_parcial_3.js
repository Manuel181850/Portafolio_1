function desc(){
    var mesn;
    var mes=document.getElementById("fna").value;
    var mesn = ( "0" + ( fecha. obtenerMes ( ) + 1 ) ) . rebanada ( -2 );
    if (mesn==05){
        document.getElementById("result").value="Felicidades este mes es tu cumpleaños😁";
    }
    else{
        document.getElementById("result").value="Desafortunadamente este mes no es tu cumpleaños😪";
    }
}
var nombre="Brandon";
var contra="12132001";
var num=0;
//localStorage.setItem("nombre", "Brandon");

function login(){
    var valor = document.getElementById("campo1").value;
    if(valor==nombre){
        document.getElementById("titulo").innerHTML = valor;
    }
}
document.getElementById("boton").onclick = function (){
    login();
}
function analisaLados()
{

 
 var lado1 = Number (document.getElementById("lado1").value);
 var lado2 = Number (document.getElementById("lado2").value);
 var lado3 = Number (document.getElementById("lado3").value);
 
 if((lado1+lado2>lado3) && (lado2+lado3>lado1) && (lado3+lado1>lado2)){
    if((lado1==lado2) && (lado1==lado3)){
document.write("é um equilátero");
}else{ 
    if((lado1!=lado2) && (lado1!=lado3) && (lado2!=lado3)){
document.write("é um escaleno");
}else{
document.write("é um isoscéles");

}
}
}else{ 
    document.write("não é um triangulo");

}

}
let cupon = prompt("Ingresa tu cupon.");

debugger
while(cupon != "No tengo cupon"){
    switch (cupon){
        case "VALEX10":
            alert("Tenes un 10% de descuento.");
            break; 
        case "VALEX25":
            alert("Tenes un 25% de descuento.");
            break;
        case "VALEX50":
            alert("Tenes un 50% de descuento");
            break;
        default:
            alert("El cupon ingresado no existe");
            break;
    }
    cupon = prompt("Ingresa tu cupon.")
}


if (cupon == "No tengo cupon"){
    alert("Tu cupon para conseguir un 10% de descuento es: VALEX10")
}
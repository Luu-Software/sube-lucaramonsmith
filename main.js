/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/



 boton.addEventListener("click", () => {

    let regist = registrada.value;
    let distance = distancia.value;
    let tarifasocial = social.value
    let precio;
  
    if (distance <= 3) {
      if (regist === "si" && tarifasocial === "no2") {
        precio = 715.24;
      } 
      else if (regist === "si" && tarifasocial === "si2"){
        precio = 339.18;
      }
      else {
        precio = 1137.23;
      }
    }
  
    if (distance > 3 && distance <= 6) {
      if (regist === "si" && tarifasocial === "no2") {
        precio = 794.74;
      }
       else if (regist === "si" && tarifasocial === "si2"){
        precio = 376.88
       }
      else {
        precio = 1263.64;
      }
    }
  
    if (distance > 6 && distance <= 12) {
      if (regist === "si" && tarifasocial === "no2") {
        precio = 855.97;
      }
      else if (regist === "si" && tarifasocial === "si2"){
        precio = 405.91
      }
      else {
        precio = 1360.99;
      }
    }
  
    if (distance > 12) {
      if (regist === "si" && tarifasocial === "no2") {
        precio = 917.24;
      } 
      else if (regist === "si" && tarifasocial === "si2"){
        precio = 434.97
      }
      else {
        precio = 1458.41;
      }
    }
  
    tarifa.innerText = "El valor de tu boleto es: $" + precio;
  
  });




/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  // COMPLETAR
});

let regist = registrada.value;
let distance = distancia.value;

if (regist==="si") {
if (distance<3) {
  alert ("TU BOLETO VALE $715.24")
}

else if (regist==="si") {
  if (distance>=3 && distancia.value<6 ) {
    alert ("TU BOLETO VALE $794.74")
  }
  }

  else if (regist==="si") {
    if (distance>=6 && distancia.value<12 ) {
      alert ("TU BOLETO VALE $855.97")
    }
    }

    else if (regist==="si") {
      if (distance>12) {
        alert ("TU BOLETO VALE $917.24")
      }
      }

      else if (regist.value==="no") {
        if (distance<3) {
          alert ("TU BOLETO VALE $1137.23")
        }
        }
        
        else if (regist==="no") {
          if (distance>=3 && distancia.value<6 ) {
            alert ("TU BOLETO VALE $1263.64")
          }
          }
        
          else if (regist==="no") {
            if (distance>=6 && distancia.value<12 ) {
              alert ("TU BOLETO VALE $1360.99")
            }
            }
        
            else if(regist==="no") {
              if (distance>12) {
                alert ("TU BOLETO VALE $1458.41")
              }
              }
            }
  


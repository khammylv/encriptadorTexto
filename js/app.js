
//desactivar la caja de texto de copiar
document.getElementById("msg").disabled = true;




//cambiar las clases en caso de texto vacio
function cambiarclase(){
  var x = document.getElementById("texto");
  if(x.classList.contains("cajaTxt")){
    x.classList.remove("cajaTxt");
    x.classList.add("cajaerror");
    document.getElementById("texto").placeholder = "Escribe un valor válido";
    reload()
    

  } else{
    x.classList.add("cajaTxt")
  }
}
function cambiar(){
  var x = document.getElementById("texto");
  if(x.classList.contains("cajaerror")){
    x.classList.remove("cajaerror");
    x.classList.add("cajaTxt");

  } else{
    x.classList.add("cajaTxt")
  }
}


//validar numeros y simbolos
function validarEncriptar(){
  
  let tt = document.getElementById("texto").value;
  let nuevo = tt.replace(/\s|!|ñ/g, "nn");
  document.getElementById("msg").value = nuevo;
  let txtP = /\d/g;
  let txt3 =  /\W/g;
  let result1 = txtP.test(nuevo);
  let result2 = txt3.test(nuevo);  
  
  if(result1 || result2 == true ){
      alerta()

  }
  else{
    capturar()
  }

}

function validarDesencriptar(){
  let tt = document.getElementById("texto").value;
  let nuevo = tt.replace(/\s|!|ñ/g, "nn");
  document.getElementById("msg").value = nuevo;
  let txtP = /\d/g;
  let txt3 =  /\W/g;
  let txt4 = /[A-Z]/g;
  let result1 = txtP.test(nuevo);
  let result2 = txt3.test(nuevo);
  let result3 = txt4.test(nuevo);
  
  if(result1 || result2 == true ){
      alerta()
   }
  else{
    resultCodificador()
  }
}

//validar mayusculas
function EncriptarM(){
  let tt = document.getElementById("texto").value;
  let nuevo = tt.replace(/\s|!|ñ/g, "nn");
  document.getElementById("msg").value = nuevo;
  let txt4 = /[A-Z]/g;
  let result3 = txt4.test(nuevo);

  if(result3 == false) {
    validarEncriptar()
  }
  else{
    alerta()
    
  }

}

function desencriptarM(){
  let tt = document.getElementById("texto").value;
  let nuevo = tt.replace(/\s|!|ñ/g, "nn");
  document.getElementById("msg").value = nuevo;
  let txt4 = /[A-Z]/g;
  let result3 = txt4.test(nuevo);

  if(result3 == false) {
    validarDesencriptar()
  }
  else{
    alerta()
    
  }
  }
 
//codificar mensaje

function capturar(){
  let txt= document.getElementById("texto").value;
  let codificado = txt.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat" );
  document.getElementById("msg").value = codificado;
  document.getElementById("texto").value = " ";
 }

function resultCodificador(){
  let texto= document.getElementById("texto").value;
  let decodificado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u" ); 
  document.getElementById("msg").value = decodificado;
  document.getElementById("texto").value = " ";
}
 
//boton copiar
function copiar(){
  var copiar= document.getElementById("msg");
  copiar.select();
  copiar.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copiar.value);
}


//limpiar
function limpiar() {
  document.getElementById("texto").value = " ";
  document.getElementById("msg").value = " ";
  var x = document.getElementById('alerta');
  x.style.visibility = 'hidden'
}


//activar div de alerta
function alerta(){
      var x = document.getElementById('alerta');
      x.style.visibility = 'visible';
      document.getElementById("msg").value = " ";
      document.getElementById("texto").value = " ";
      
}

//activar funciones de caja de texto

document.getElementById("texto").addEventListener("click", click)

function click(){
  document.getElementById("msg").value = " ";
  var x = document.getElementById('alerta');
  x.style.visibility = 'hidden'
  
  document.getElementById("texto").placeholder = "Escriba un mensaje:";
  cambiar()
 
}
//activar boton y validar envío vacio
function botondesEncriptar(){
  var x = document.getElementById("texto").value;
  if(x == ""){
    cambiarclase()
  }else{
    EncriptarM()
  }
  
}

function botonEncriptar(){
  var x = document.getElementById("texto").value;
  if(x == ""){
    cambiarclase()
  }else{
    desencriptarM()
  }
}


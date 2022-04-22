/* // FORMA 1 if

// function programa(){
document.querySelector('button').onclick = function validaEdad(){ 
    const edad = document.getElementById('edad').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const div = document.createElement('div');
    const registros = document.querySelector('.registros');
    
    // const divCreada = registros.childNodes;

    if (edad >= 18){
        registros.appendChild(div);
        div.innerHTML =  `<button id="tache" onclick="tache()" style="width: 20px;display: block;margin-left:auto;">X</button><span>${nombre} </span> <span>${apellido} </span> <span>${edad}</span>`;
            // document.getElementById('tache').onclick = function tache(){
            //     div.remove(this);
            // } 
       
    } else {
        alert('Debe ser mayor de edad para registrarse')
    }

    if (edad >= 60){
        div.style = "Background: green; color: white; border:none";
    } 
    if (edad <= 40){
        div.style = "Background: orange; color: white; border:none";
    } 
    if (edad <= 30){
        div.style = "Background: blue; color: white; border:none";
    } 

    
    // document.body.style.background = "blue";
} */



/* // FORMA 2 switch (NO TERMINADA)

    const edad = document.getElementById('edad').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const div = document.createElement('div');
    const registros = document.querySelector('.registros');
    

    let edadRango = 18;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Nota: Este ejemplo NO es equivalente al ejemplo anterior (leer abajo)
switch (edadRango) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion); */


// FORMA 3

    document.querySelector('button').onclick = function validaEdad(){ 
        const edad = document.getElementById('edad').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const div = document.createElement('div');
        const registros = document.querySelector('.registros');

        //let eliminar = registros.removeChild();
    //    const hijosDiv = registros.children;
    /* function basura(){

        registros.removeChild(div);
    } */
    
        if (edad >= 18){
            registros.appendChild(div);
            div.innerHTML =  `<button id="tache" onclick="tache()" style="width: 20px;display: block;margin-left:auto;">X</button><span>${nombre} </span> <span>${apellido} </span> <span>${edad}</span>`;
        } else {
            alert('Debe ser mayor de edad para registrarse')
        }

        if (edad >= 18 && edad < 30){
            div.style = "Background: blue; color: white; border:none";
         
        }
        else if (edad >= 30 && edad < 40){
            div.style = "Background: orange; color: white; border:none";
        }
        else if (edad >= 60){
            div.style = "Background: green; color: white; border:none";
        } else {
            div.style = "Background: black; color: white; border:none";
        }
    }




/* function viewsArrayInput(){
    var arrayInput = new Array();
    var inputsValues = document.getElementsByTagName('div'),
    namesValues = [].map.call(inputsValues, function(dataInput){
        arrayInput.push(dataInput.value);
    });
} */



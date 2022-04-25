

// VALIDACIONES


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


document.querySelector('button').addEventListener("click", function validaEdad() {
   
    let edad = document.getElementById('edad').value;
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let div = document.createElement('div');
    let registros = document.querySelector('.registros');


 

nombre.addEventListener("input", function () {
        if (nombre.validity.typeMismatch) {
            nombre.setCustomValidity("Agrega un nombre");
        } else {
            nombre.setCustomValidity("");
        }
   
    
  });
  apellido.addEventListener("input", function () {
        if (apellido.validity.typeMismatch) {
            apellido.setCustomValidity("Agrega un apellido");
        } else {
            apellido.setCustomValidity("");
        }
   
    
  });

    


    // const edad = "Ir de Compras";


    //let edad = 14;

/*     let casos = {
        mayIg18: function(){
            edad >= 18
        },
        mayIg18Men30: function(){
            edad >= 18 && edad < 30
        },
        mayIg30Men40: function (){
            edad >= 30 && edad < 40
        },
        mayIg60: function(){
            60
        },

    } */
    if (edad >= 18){
        registros.appendChild(div);
       
        div.innerHTML =  `<button class="tache"  style="width: 20px;display: block;margin-left:auto;">X</button><span>${nombre.value} </span> <span>${apellido.value} </span> <span>${edad}</span>`;
    } else {
        alert('Debe ser mayor de edad para registrarse')
    }
    switch (true) {
        case (edad >= 18 && edad < 30):
            div.style = "Background: rgb(0 0 255 / 60%);";
            break;
        case (edad >= 30 && edad < 40):
            div.style = "Background: rgb(255 165 0 / 60%);";
            break;
        case (edad >= 60):
            div.style = "Background: rgb(0 128 0 / 60%);";
            break;
    }

    let taches = document.querySelectorAll('.tache');

    taches.forEach(function(tache){
        tache.onclick = function tache(){
            //this.parentNode.style.display = 'none';
            this.parentNode.remove();
        }
        
    })



})




/* taches.onclick = function tache(div) {
    // div.remove();

     div.style.display = "none";
 };
 */

/* 
    if (edad >= 18){
        registros.appendChild(div);
        div.innerHTML =  `<button id="tache" onclick="tache()" style="width: 20px;display: block;margin-left:auto;">X</button><span>${nombre} </span> <span>${apellido} </span> <span>${edad}</span>`;
    } else {
        alert('Debe ser mayor de edad para registrarse')
    }

    if (edad >= 18 && edad < 30){
        div.style = "Background: rgb(0 0 255 / 60%); color: white; border:none";
     
    }
    else if (edad >= 30 && edad < 40){
        div.style = "Background: rgb(255 165 0 / 60%); color: white; border:none";
    }
    else if (edad >= 60){
        div.style = "Background: rgb(0 128 0 / 60%); color: white; border:none";
    } else {
        div.style = "Background: rgb(0 0 0 / 60%); color: white; border:none";
    }
} */






/* function viewsArrayInput(){
    var arrayInput = new Array();
    var inputsValues = document.getElementsByTagName('div'),
    namesValues = [].map.call(inputsValues, function(dataInput){
        arrayInput.push(dataInput.value);
    });
} */





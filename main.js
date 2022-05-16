

function start(event) {
    event.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    event.dataTransfer.clearData("text/plain");
    event.dataTransfer.setData("text/plain", event.target.id); // Coje el elemento que se va a mover
    console.log(event.target.id, "hola");
    event.target.style.opacity = '0.5'; 
}

function end(event){
    event.preventDefault();
    event.target.style.opacity = ''; // Pone la opacidad del elemento a 1 			

}

function enter(event) {
    // console.log('enter');
}

function leave(event) {
    // console.log('leave'); 
}

function over(event) {
    var elemArrastrable = event.dataTransfer.getData("text/plain"); // Elemento arrastrado
    var id = event.target.id; // Elemento sobre el que se arrastra
    event.preventDefault();
    
    // return false para que se pueda soltar
    if (id == 'mostrador'){
        return false; // Cualquier elemento se puede soltar sobre el div destino 1
    }

    if ((id == 'cesta')){
        return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
    }	
    if (id == 'dejar-item')
        return false; // Cualquier elemento se puede soltar en la papelera

    if (id == 'caja')
        return false;
        
}


//Mueve el elemento

function drop(event){
    event.preventDefault();
    var elementoArrastrado = event.dataTransfer.getData("text/plain"); // Elemento arrastrado
    event.target.appendChild(document.getElementById(elementoArrastrado));
}

//Elimina el elemento que se mueve
function eliminar(event){
    event.preventDefault();
    var elementoArrastrado = document.getElementById(event.dataTransfer.getData("text/plain")); // Elemento arrastrado
    elementoArrastrado.parentNode.removeChild(elementoArrastrado); // Elimina el elemento
}


function PintarNegro(fondo){
    fondo.style.backgroundColor= 'black';
}

let azul = document.querySelector('#uno');
azul.addEventListener('click', function(){
    PintarNegro(azul);
})

let rojo = document.querySelector('#dos');
rojo.addEventListener('click', function(){
    PintarNegro(rojo);
})

let verde = document.querySelector('#tres');
verde.addEventListener('click', function(){
    PintarNegro(verde);
})

let amarillo = document.querySelector('#cuatro');
amarillo.addEventListener('click', function(){
    PintarNegro(amarillo);
})

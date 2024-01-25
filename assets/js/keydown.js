let fondo;

function cambioDeFondo(color){
    const divUno = document.getElementById('key');
    divUno.style.backgroundColor= color;
}

function agregarElemento(color){
    contenedor = document.getElementById("container");
    const divDos = document.createElement('div');
    divDos.style.backgroundColor = color;
    document.getElementById('container').appendChild(divDos);
}

document.addEventListener('keydown', function(event){
    if(event.key === 'a' || event.key === 'A'){
        fondo= 'pink';
    } else if(event.key === 's' || event.key === 'S'){
        fondo= 'orange';
    } else if(event.key === 'd' || event.key === 'D'){
        fondo= 'lightblue';
    } else if(event.key === 'q' || event.key === 'Q'){
        agregarElemento('purple');
    } else if(event.key === 'w' || event.key === 'W'){
        agregarElemento('gray');
    } else if(event.key === 'e' || event.key === 'E'){
        agregarElemento('brown');
    }

    cambioDeFondo(fondo);
})
    



/*
document.addEventListener('keydown', function(event){
    if(event.key === 'a' || event.key === 'A'){
        fondo = 'pink';
        cambiarColor('#key', fondo);
    } else if(event.key === 's' || event.key === 'S'){
        fondo = 'orange';
        cambiarColor('#key', fondo);
    } else if(event.key === 'd' || event.key === 'D'){
        fondo = 'lightblue';
        cambiarColor('#key', fondo);
    } else if(event.key === 'q' || event.key === 'Q'){
        fondo = 'purple';
        agregarElemento();
    } else if(event.key === 'w' || event.key === 'W'){
        fondo = 'gray';
        agregarElemento();
    } else if(event.key === 'e' || event.key === 'E'){
        fondo = 'brown';
        agregarElemento();
    }
});

function agregarElemento() {
    // Obtenemos el elemento contenedor por su ID
    contenedor = document.getElementById("container");
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");
    // Asignamos un texto al nuevo elemento
    nuevoElemento.textContent = "Elemento agregado";
    // Agregamos el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);
    }
    */
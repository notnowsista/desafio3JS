function pintar(fondo, color = 'green'){
    fondo.style.backgroundColor = color;
    }

let ele = document.querySelector('#ele1');
pintar(ele);

ele.addEventListener('click', function(){
    pintar(ele, 'yellow');
})



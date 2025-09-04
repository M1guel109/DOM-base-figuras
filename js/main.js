// Capturamos la figura a manipular
const figura = document.getElementById('figure');

function circulo() {
    figura.style.borderRadius ="50%";
    figura.style.background = "black";
}

function estrella(){
    figura.style.clipPath = " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
}

function gif() {
    figura.style.backgroundImage = "url(img/1rRk.gif)";
    figura.style.backgroundSize = "cover";
}

function animacion(){
    figura.style.animation = "rotar 2s linear infinite";
}

function moverA() {
    figura.style.transform = "translateY(-46px)";
}

function moverB() {
    figura.style.transform = "translateY(40px)";
}

function moverI() {
    figura.style.transform = "translateX(100px)";
}

function moverD() {
    figura.style.transform = "translateX(-100px)";
}

function cTitulo() {
    let nuevoT = prompt('Ingrese un nuevo titulo');
    const titulo = document.getElementById('mainTitle');

    titulo.textContent = nuevoT;
}

function cParrafo() {
    let nuevoP = prompt('Ingrese un nuevo parrafo'); 
    const parrafo = document.getElementById('mainParagraph');

    parrafo.textContent = nuevoP;
}

function aParrafo() {
    let nuevoP2 = prompt('Ingrese un parrafo a agregar'); 
    const pExtra = document.getElementById('extraParagraphs');

    pExtra.textContent = nuevoP2;
}

function eParrafo() {
    const pExtra = document.getElementById('extraParagraphs');
    
    pExtra.remove();
}

function cColor() {
    let nColor = prompt('Ingrese un color en HEX para su figura con #');

    figura.style.background = nColor;
}

function eFigura() {
    let cFigura = prompt('Ingrese el nombre de la figura por la que desea cambiar el cuadro circulo , estrella o cuadrado');

    switch (cFigura) {
        case 'circulo':
            figura.style.clipPath = 'none';
            figura.style.borderRadius ="50%";
            break;

        case 'estrella':
            figura.style.borderRadius = '0';
            figura.style.clipPath = " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            
            break;

        case 'cuadrado':
            figura.style.clipPath = 'none';
            figura.style.borderRadius ="0";
            break;
    
        default:
            alert('Figura incorrecta escoja circulo , estrella o cuadrado');
            break;
    }
}

let imgActual = 0;
const imagen = document.getElementById('mainImage');

function imagenSig() {
    const imagenes = ['img/imagen.jpg','img/imagen2.jpg','img/imagen3.jpg'];

    imagen.src = imagenes[imgActual];

    imgActual++;

    if (imgActual >= imagenes.length) {
        imgActual = 0;
    }
}

function imagenAnt() {
    const imagenes = ['img/imagen.jpg','img/imagen2.jpg','img/imagen3.jpg'];

    imagen.src = imagenes[imgActual];

    imgActual--;

    if (imgActual < 0) {
        imgActual = imagenes.length - 1;
    }
}

function mostrarOcultar() {
    imagen.classList.toggle('oculto');
}

function cambiarAlt() {
    let nAlt = prompt('Ingrese un nuevo texto alternativo para la imagen');

    imagen.setAttribute('alt', nAlt);
}


const link = document.getElementById('mainLink');


function cambiarHref() {
    let nHref = prompt('Ingrese una nueva URL');

    link.setAttribute('href', nHref);
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', gif);
    document.getElementById('btnAnim').addEventListener('click', animacion);
    document.getElementById('btnMoveUp').addEventListener('click', moverA);
    document.getElementById('btnMoveDown').addEventListener('click', moverB);
    document.getElementById('btnMoveLeft').addEventListener('click', moverI);
    document.getElementById('btnMoveRight').addEventListener('click', moverD);
    document.getElementById('btnChangeTitle').addEventListener('click', cTitulo);
    document.getElementById('btnChangeParagraph').addEventListener('click', cParrafo);
    document.getElementById('btnAddParagraph').addEventListener('click', aParrafo);
    document.getElementById('btnRemoveParagraph').addEventListener('click', eParrafo);
    document.getElementById('btnHexColor').addEventListener('click', cColor);
    document.getElementById('btnChooseFigure').addEventListener('click', eFigura);
    document.getElementById('btnChangeImageNext').addEventListener('click', imagenSig);
    document.getElementById('btnChangeImagePrev').addEventListener('click', imagenAnt);
    document.getElementById('btnToggleImage').addEventListener('click', mostrarOcultar);
    document.getElementById('btnChangeAlt').addEventListener('click', cambiarAlt);
    document.getElementById('btnChangeLink').addEventListener('click', cambiarHref);
}) 
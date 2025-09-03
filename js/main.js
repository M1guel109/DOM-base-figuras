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
    const titulo = document.getElementById('mainTitle');
    const nuevoT = prompt('Ingrese un nuevo titulo');

    titulo.textContent = nuevoT;
}

function cParrafo() {
    const parrafo = document.getElementById('mainParagraph');
    const nuevoP = prompt('Ingrese un nuevo parrafo'); 

    parrafo.textContent = nuevoP;
}

function aParrafo() {
    const nuevoP2 = prompt('Ingrese un parrafo a agregar'); 
    const pExtra = document.getElementById('extraParagraphs');

    pExtra.textContent = nuevoP2;
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', gif);
    document.getElementById('btnAnim').addEventListener('click', animacion);
    document.getElementById('btnMoveUp').addEventListener('click', moverA);
    document.getElementById('btnMoveDown').addEventListener('click', moverB);
    document.getElementById('btnMoveRight').addEventListener('click', moverD);
    document.getElementById('btnChangeTitle').addEventListener('click', cTitulo);
    document.getElementById('btnChangeParagraph').addEventListener('click', cParrafo);
    document.getElementById('btnAddParagraph').addEventListener('click', aParrafo);
}) 
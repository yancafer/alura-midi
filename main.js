function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//listaDeTeclas.length garante pegar a quantidade total de teclas da lista ainda que não saiba quantas são
//length serve pra pegar a quantidade (significa tamanho)
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    
    //Template String
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}
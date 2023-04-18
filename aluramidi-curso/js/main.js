/*
    const sons = ['pom','clap','tim','puff','splash','toim','psh','tic','tom'];

    function tocaSom(som) {
        document.querySelector('#som_tecla_'+som).play();
    };

    sons.forEach((som) => {
        let tecla = document.querySelector('.tecla_'+som);
        tecla.onclick = () => { tocaSom(som); } 
    });

*/
function tocaSom(seletorAudio) {
    const el = document.querySelector(seletorAudio);
    if (!el || (el.localName != 'audio') ) {
        console.error('Elemento não encontrado ou tipo de elemento inválido')
        return
    } 

    if (el.paused)  {
        el.play();
    }else{
        el.currentTime = 0;
    }
};
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach((tecla) => {
    const instrumento = tecla.classList[1];
    const idElementoAudio = `#som_${instrumento}`;

    tecla.onclick = () => {tocaSom(idElementoAudio)}

    tecla.onkeydown = (e) => {
        if ( e.code == 'Enter' || e.code == 'Space' ) {
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = (e) => {
        if ( e.code == 'Enter' || e.code == 'Space' ) {
            tecla.classList.remove('ativa');
        }
    }
})

const numPad = [
    'Numpad7','Numpad8','Numpad9',
    'Numpad4','Numpad5','Numpad6',
    'Numpad1','Numpad2','Numpad3',
]
document.onkeydown = (e) => {

    const i = numPad.indexOf(e.code)
    if (i == -1)  return;

    const tecla = listaDeTeclas[i];
    tecla.classList.add('ativa');
    tecla.click();

}
document.onkeyup = (e) => {

    const i = numPad.indexOf(e.code)
    if (i == -1)  return;

    const tecla = listaDeTeclas[i];
    tecla.classList.remove('ativa');

}

/* Data una lista della spesa: */
const lista = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

/* DICHIARAZIONE VARIBILI */
let div2 = document.getElementById('ciclo-while');
let elementiSingoli = '';
let i = 0;

/* CICLO*/
while (i < lista.length) {

    /* SALVA SINGOLI ELEMENTI DELL'ARRAY NELLA VARIABILE */
    elementiSingoli += ' ' + lista[i];
    console.log(elementiSingoli);

    /* MOSTRA A SCHERMO I SINGOLI ELEMENTI DELLA VARIABILE */
    div2.innerHTML = `<div> ${elementiSingoli} </div>`;
    
    /* INCREMENTO VARIABILE PER CICLO */
    i++;
}
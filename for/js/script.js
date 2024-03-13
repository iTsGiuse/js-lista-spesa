/* Data una lista della spesa: */
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

/* DICHIARAZIONE VARIBILI */
let div = document.getElementById('ciclo-for');
let singoliElementi = '';

/* CICLO*/
for (let i = 0; i < list.length; i++) {

    /* SALVA SINGOLI ELEMENTI DELL'ARRAY NELLA VARIABILE */
    singoliElementi += ' ' + list[i];
    console.log(singoliElementi);
    
    /* MOSTRA A SCHERMO I SINGOLI ELEMENTI DELLA VARIABILE */
    div.innerHTML = `<div> ${singoliElementi} </div>`;

}
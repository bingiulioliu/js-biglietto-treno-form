'use strict';

// Variabili per il form
const myForm = document.querySelector('#my-form');
const nomeCognome = document.querySelector('#nomeCognome');
const anniPasseggero = document.querySelector('#anniPasseggero');
const percorrenzaViaggio = document.querySelector('#percorrenza');
const mySubmit = document.querySelector('#mySubmit');

// Variabili per la card di riepilogo acquisto
const myCard = document.querySelector('#my-card');
const graziePer = document.querySelector('#cardGrazie');
const cardSconto = document.querySelector('#cardSconto');
const cardPercorrenza = document.querySelector('#cardPercorrenza');
const cardCosto = document.querySelector('#costoTotale');

// Variabili di supporto
const costoKm = 0.21;

// event.preventDefault(); per togliere il comportamento di defaul di refresh al submit

function formSubmitHandler(event){
    event.preventDefault(); // blocco il refresh

    // Validazione form
    const nomeCognomeSplitted = nomeCognome.value.trim().split(' ');
    if (nomeCognomeSplitted === '' || nomeCognomeSplitted.length < 2) {
    alert('Inserisci Nome e Cognome valido!');
    return; // Interrompo l'esecuzione
    }

    const anniPasseggeroTrimmed = anniPasseggero.value.trim();
    if (anniPasseggeroTrimmed === '' || isNaN(anniPasseggeroTrimmed) || Number(anniPasseggeroTrimmed <= 0)) {
    alert("Un'età valida!");
    return; // Interrompo l'esecuzione
    }
    
    const percorrenzaViaggioTrimmed = percorrenzaViaggio.value.trim();
    if (percorrenzaViaggioTrimmed === '' || isNaN(percorrenzaViaggioTrimmed) || Number(percorrenzaViaggioTrimmed <= 0)) {
    alert("Un numero in KM valido!");
    return; // Interrompo l'esecuzione
    }

    // rimuovo la classe d-none alla card così appare appena si fa submit
    myCard.classList.remove('d-none');

    // Se validazione OK allora
    // Variabili di supporto per calcolo viaggio
    const costoPieno = costoKm * Number(percorrenzaViaggio.value);
    let tipoOfferta = 'Nessuna';
    let scontoApplicato = 1;

    if ()

    // Valori da immettere nella scheda di riepilogo
    graziePer.innerText = (`Grazie per averci scelto ${nomeCognome.value}`);
    cardSconto.innerText = (`Sconto applicato: `);
    cardPercorrenza.innerText = (`KM percorrenza: ${percorrenzaViaggio.value}`);
    cardCosto.innerText = (`Totale: `);

}


// Collegamento submit-funzione
myForm.addEventListener('submit', formSubmitHandler);
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

// event.preventDefault(); per togliere il comportamento di defaul di refresh al submit

function formSubmitHandler(event){
    event.preventDefault(); // blocco il refresh

    // Validazione nome e cognome
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

}


// Collegamento submit-funzione
myForm.addEventListener('submit', formSubmitHandler);
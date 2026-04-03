'use strict';

// Variabili per il form
const myForm = document.querySelector('#my-form');
const nomeCognome = document.querySelector('#nomeCognome');
const anniPasseggero = document.querySelector('#anniPasseggero');
const percorrenzaViaggio = document.querySelector('#percorrenza');
const mySubmit = document.querySelector('#mySubmit');
// Variabili per la card di riepilogo acquisto
const cardGrazie = document.querySelector('#my-card');
const graziePer = document.querySelector('#cardGrazie');
const cardSconto = document.querySelector('#cardSconto');
const cardPercorrenza = document.querySelector('#cardPercorrenza');

// event.preventDefault(); per togliere il comportamento di defaul di refresh al submit

function formSubmitHandler(event){
    event.preventDefault(); // blocco il refresh

    const nomeCognomeSplitted = nomeCognome.value.trim().split(' ');
    console.log(nomeCognomeSplitted);
    
}


// Collegamento submit-funzione
myForm.addEventListener('submit', formSubmitHandler);
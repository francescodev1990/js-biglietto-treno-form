//SCOMPOSIZIONE DEL PROBLEMA//

//INSERISCI I KM//
//INSERISCI L'ETA'//
//LA TARIFFA AL KM SARA' DI 0,21//
//I MINORENNI AVRANNO UNO SCONTO PARI AL 20% (<18)//
//GLI OVER 65 AVRANNO UNO SCONTO PARI AL 40% (>65)//
//ALTRIMENTI NON CI SARA' NESSUNO SCONTO//

//PASSAGGI DA ESEGUIRE//

//REALIZZARE CAMPO INPUT PER I KM//
//REALIZZARE CAMPO INPUT PER L'ETA'//
//CALCOLO DEL PREZZO TOTALE TRAMITE PRESSIONE DI UN PULSANTE//
//STAMPARE A VIDEO I RISULTATI//

const price_button = document.getElementById('generate');
price_button.addEventListener('click', function(){
    let name_surname = document.getElementById('name')
    .value;
    console.log(name_surname);
    let chilometri_percorsi = document.getElementById('km')
    .value;
    console.log(chilometri_percorsi);
    let age = document.getElementById('eta')
    .value;
    console.log(age);
});

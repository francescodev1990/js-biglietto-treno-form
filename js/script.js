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



//CLICK PULSANTE GENERA//
//INSERIMENTO EVENTI INPUT TEXT E SELECT//


const price_button = document.getElementById('generate');
price_button.addEventListener('click', function () {
    let name_surname = document.getElementById('name')
        .value;
    console.log(name_surname);

    let chilometri = document.getElementById('km')
        .value;
    console.log(chilometri);

    let age = document.getElementById('eta')
        .value;
    console.log(age);

    let prezzo = 0.21 * chilometri;
    console.log(prezzo);

    



    if (eta == 'minorenne') {
        prezzo = 0.21 * chilometri * 0.8;
    }
    else if (eta == 'over65') {
        prezzo = 0, 21 * chilometri * 0.6;
    }
    else {
        prezzo = 0.21 * chilometri;
    }
    console.log(prezzo)
});







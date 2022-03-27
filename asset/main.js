/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente 
il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

function generateTicket() { //funzione che si attiva al click dell'utente


  //Variabili per manipolare elementi dal DOM
  const carriage = Math.floor(Math.random() * 21 );
  const codeCP =  Math.floor(Math.random() * 9999 );
  const nameSurname = document.getElementById("nameSurname").value;
  const km = document.getElementById("km").value;
  const age = document.getElementById("age").value;
  let discountValue;
  let price;
  let total;
  let finalPrice;

  //Condizione per verificare la fascia d'età dell'utente
  function discount() {
    if (age === "Minorenne (0-17)") {
      discountValue = 'Sconto Minorenne';
      return 0.2;
    } else if (age === "Anziano (65+)") {
      discountValue = 'Sconto Over65';
      return 0.4;
    }
  }
  

  //Funzione per verificare lo sconto da effettuare
  function priceCalc() {

    //Condizioni per avvertire l'utente che vi è qualche errore nella compilazione del form
    if (nameSurname === "" && km === "" && age === "Seleziona") {
      alert("Compila il form");
      document.getElementById('main').innerHTML = '';

    } else if (nameSurname === "" && km === "") {
      alert("Inserisci il nome e cognome e i KM da percorrere");
      document.getElementById('main').innerHTML = '';

    } else if (nameSurname === "" && age === "Seleziona") {
      alert("Inserisci il nome e cognome e seleziona l'età");
      document.getElementById('main').innerHTML = '';

    } else if (age === "seleziona" && km === "") {
      alert("inserisci i KM da percorrere e la fascia d'età");
      document.getElementById('main').innerHTML = '';

    } else if (nameSurname === "") {
      alert("Inserici nome e cognome");
      document.getElementById('main').innerHTML = '';

    } else if (km === "") {
      alert("Inserisci i KM da percorrere");
      document.getElementById('main').innerHTML = '';

    } else if (age === "Seleziona") {
      alert("Selezionare la fascia d'età");
      document.getElementById('main').innerHTML = '';

      
      //Condizioni per applicare lo sconto in base alla fascia d'età
    } else if (age === "Adulto (18-64)") {

      price = km * 0.21;
      discountValue = 'Prezzo pieno';

      document.getElementById('main').innerHTML += 
      `
        <div>
             <h3>dettaglio passeggeri :</h3>
          <div class="box clearfix">
            <div class="box-left float-l">
             <div class="info_passeger p-2 pt-1">
               <h4>PASSEGGERO : </h4>
               <div class="name_passeger">${nameSurname}</div>
             </div>
            </div>

           <div class="box-right float-l">
             <div class="offering col-30 float-l">
               <div class="fw-bold p-2">SCONTO</div>
               <div class="pt-1 pl-2">${discountValue}</div>
              </div>
              <div class="carriage col-20 float-l">
                <div class="fw-bold p-2">CARROZZA</div>
                <div class="pt-1 pl-2">${carriage}</div>
              </div>
              <div class="code col-20 float-l">
                <div class="fw-bold p-2">CP COD</div>
                <div class="pt-1 pl-2">${codeCP}</div>
              </div>
              <div class="cost col-20 float-l">
                <div class="fw-bold p-2">PREZZO</div>
                <div id="price" class="ticket_price pt-1 pl-2">
                ${price.toFixed(2)}<span>&euro;</span>
               </div>
              </div>
            </div>

          </div>
        </div>
      `;

    } else {

      price = km * 0.21;
      total = price - price * discount();
      finalPrice = total.toFixed(2);

      document.getElementById('main').innerHTML += 
      `
        <div>
             <h3>dettaglio passeggeri :</h3>
          <div class="box clearfix">
            <div class="box-left float-l">
             <div class="info_passeger p-2 pt-1">
               <h4>PASSEGGERO : </h4>
               <div class="name_passeger">${nameSurname}</div>
             </div>
            </div>

           <div class="box-right float-l">
             <div class="offering col-30 float-l">
               <div class="fw-bold p-2">SCONTO</div>
               <div class="pt-1 pl-2">${discountValue}</div>
              </div>
              <div class="carriage col-20 float-l">
                <div class="fw-bold p-2">CARROZZA</div>
                <div class="pt-1 pl-2">${carriage}</div>
              </div>
              <div class="code col-20 float-l">
                <div class="fw-bold p-2">CP COD</div>
                <div class="pt-1 pl-2">${codeCP}</div>
              </div>
              <div class="cost col-20 float-l">
                <div class="fw-bold p-2">PREZZO</div>
                <div id="price" class="ticket_price pt-1 pl-2">
                ${finalPrice}<span>&euro;</span>
               </div>
              </div>
            </div>

          </div>
        </div>
      `;
    }
    
    //alla generazione del biglietto resettare il form
    document.getElementById("nameSurname").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "Seleziona";

  }

  priceCalc();
  
}


if (typeof Storage !== "undefined") {
  // Recupero il valore corrente del contatore da sessionStorage
  var counterValue = sessionStorage.getItem("counterValue");

  // Inizializzo il mio contatore se non esiste in sessionStorage
  if (counterValue === null) {
    counterValue = 0;
  } else {
    counterValue = parseInt(counterValue);
  }

  // Scrivo la funzione per aggiornare il contatore ogni secondo che passa
  function updateCounter() {
    counterValue++;
    sessionStorage.setItem("counterValue", counterValue);
    document.getElementById("counter").textContent = counterValue;
  }

  // Avvio l'aggiornamento del contatore ogni secondo
  var timer = setInterval(updateCounter, 1000);

  // Interrompo l'aggiornamento quando la pagina viene chiusa
  window.addEventListener("beforeunload", function () {
    clearInterval(timer);
  });
} else {
  alert("Impossibile creare il contatore.");
}

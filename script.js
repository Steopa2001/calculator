const display = document.getElementById("calc-screen");

// Aggiunge un numero o un simbolo al contenuto del display
const addSymbol = (input) => {
  // Ogni volta che premo un pulsante, aggiungo il suo valore al display
  display.value += input;
};

// Calcola il risultato dell'operazione mostrata nel display
const computeResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    screen.value = "Errore";
  }
};

// Pulisce completamente il display
const resetScreen = () => {
  display.value = "";
};

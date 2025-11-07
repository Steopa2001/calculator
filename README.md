# Calcolatrice Semplice

Una calcolatrice moderna e funzionale realizzata con **HTML**, **CSS** e **JavaScript**.  

---

## Funzionalità

- Operazioni aritmetiche di base: somma (+), sottrazione (-), moltiplicazione (×) e divisione (÷)
- Interfaccia pulita e responsiva con **CSS Grid** e **Flexbox**
- Pulsanti con effetti **hover** e **active**
- Gestione degli errori per operazioni non valide
- Design personalizzato, realizzato da zero

---

## Come funziona

1. Clicca sui numeri e sugli operatori per costruire un’espressione.  
2. Premi `=` per calcolare il risultato.  
3. Premi `C` per cancellare il display.  

I simboli di moltiplicazione (`×`) e divisione (`/`) vengono convertiti internamente nei simboli `*` e `/`, che JavaScript può interpretare correttamente.

---

## Spiegazione del codice (JavaScript)

- **addSymbol(value)** => aggiunge un numero o un operatore al display.  
- **computeResult()** => calcola il risultato dell’espressione.  
- **resetScreen()** => pulisce completamente lo schermo.  
- Utilizzo un blocco **try...catch** per gestire eventuali errori durante il calcolo.

---


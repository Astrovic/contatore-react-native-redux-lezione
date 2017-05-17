import { createStore } from 'redux';

// redux vuole: unico store, immutabilità e reducerFunction
// nello store mantengo lo stato iniziale, e man mano creo nuovi stati
// dunque uso un reducer che prende lo stato precedente e l'action,
// e restituisce un nuovo stato
// a differenza di flux, con redux abbiamo uno store unico
// su redux dunque utilizziamo diversi reducer quanti le parti di stato
// che ci interessa ridurre, mentre su flux creavamo tanti store

let initialState = {
  conto: 0
};

// la cosa fondamentale di redux è che deve creare un nuovo stato,
// ovvero un nuovo oggetto js che conterrà al suo interno lo stato
// state = initialState perchè la prima volta, se non c'è uno stato precedente,
// viene assegnato lo stato iniziale
const contoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        conto: state.conto + 1
      };
    case 'DECREMENT':
      return {
        conto: state.conto - 1
      };
    case 'RESET':
      return {
        conto: 0
      };
  default:
    return state;
  }
};


/* createStore prende come parametro un reducer
ed include in automatico tre metodi:
dispatch();
getState();
subscribe(listener); ---> ci restituisce anche una funzione unsubscribe, da poter
                          salvare e utilizzare quando non ci serve più il listener
*/
const store = createStore(contoReducer);
export default store;

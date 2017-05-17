import Expo from 'expo';
import React from 'react';

import store from './src/store';
import { Provider, connect } from 'react-redux';
// import { increment, decrement, reset } from './src/actions';
import Contatore from './src/Contatore';
import * as actions from './src/actions'; // così actions conterrà tutte le funzioni

/*
su flux e redux abbiamo un controllerview, con all'interno diverse presentation
component. su react-redux abbiamo un presentation component

su react per passare più props ai figli della gerarchia di componenti,
al posto di props possiamo usare contest.
su reax-native è stato astratto questo concetto utilizzando Provider
a Provider dunque passiamo lo store, che così sarà accessibile a tutti i figli

la funzione Connect permette di connettere un presentation component al nostro
store, che restituisce un container component (controllerview), che sarà capace
di interagire con lo store attraverso le action
connect vuole due argomenti (funzioni di mapping):
mapStateToProps()
mapDispatchToProps()
*/

// dato uno stato, restituisce un oggetto che mappi lo stato alle props
const mapStateToProps = state => ({
  conto: state.conto
});

// faccio il mapping per effettuare il dispatch all'interno del componente
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
//   reset: () => dispatch(reset())
// });


const containerConnector = connect(
  mapStateToProps,
  // mapDispatchToProps
  // se il nome delle action è uguale a quello dei dispatch
  // possiamo passare direttamente le actions
  actions
);
const ContatoreContainer = containerConnector(Contatore);


/*
// in alternativa potevamo fare direttamente
const ContatoreContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
  actions
) (Contatore);*/

// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <ContatoreContainer />
//       </Provider>
//     );
//   }
// }

const App = () => (
  <Provider store={store}>
    <ContatoreContainer />
  </Provider>
)


Expo.registerRootComponent(App);

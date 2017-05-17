// a differenza di flux, qui non serve creare il dispatcher
// in qunato è già incluso nel createStore
export const increment = () => {
  const action = {
    type: 'INCREMENT'
  };
  return action;
  /*// oppure
  return {
    type: 'INCREMENT'
  };*/
};

export const decrement = () => {
  const action = {
    type: 'DECREMENT'
  };
  return action;
};

export const reset = () => {
  const action = {
    type: 'RESET'
  };
  return action;
};

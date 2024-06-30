//2- create reeeducer to set state  and change it
export const reducerCounter = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return { conter: state.counter + 1 };
  }
  if (action.type === 'DECREMENT') {
    return { conter: state.counter - 1 };
  }
  if (action.type === 'RESET') {
    return { conter: 0 };
  }
  return state;
};

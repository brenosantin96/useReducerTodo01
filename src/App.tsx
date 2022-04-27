import { useState, useReducer } from 'react'


type Contador = {
  count: number
}

type ActionType = {
  type: string
}

const counter: Contador = {
  count: 0
};

const reducer = (state: Contador, action: ActionType) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + 1 };
      break;
    case 'decrease':
      return { ...state, count: state.count - 1 };
      break;
  }

  return state;

}


function App() {

  const [state, dispatch] = useReducer(reducer, counter);

  const increase = () => {
    dispatch({type: 'increase'});
  }

  const decrease = () => {
    dispatch({type: 'decrease'});
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      Contador: {state.count}
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default App

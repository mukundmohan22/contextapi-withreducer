import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const Provider = ({ reducer, initialState, actions, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const boundActions = {};
  for (let key in actions) {
    boundActions[key] = actions[key](dispatch);
  }

  return (< StateContext.Provider value={{ state, ...boundActions }} >
    {children}
  </StateContext.Provider >)
}

export const useStateValue = () => useContext(StateContext);
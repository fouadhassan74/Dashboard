import React, { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
const INTIAL_STATE = { darkmode: false };
export const DarkModeContext = createContext(INTIAL_STATE);
function DarkModeContextProvider(props) {
  const [state, dispatch] = useReducer(DarkModeReducer, INTIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ darkmode: state.darkmode, dispatch }}>
      {props.children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContextProvider;

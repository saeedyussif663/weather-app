import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();

    const initalState = {
        theme: 'light',
        time: ['6:00AM', '9:00AM', '12:00PM', '3:00PM', '6:00PM', '9:00PM']
  }

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initalState);

    const toggleTheme = (theme) => {
        dispatch({type: "TOGGLE_THEME", theme})
    }

    return (
        <AppContext.Provider value={{
            toggleTheme,
            state
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };


export const  useGlobalContext = () => {
      return   useContext(AppContext)
}
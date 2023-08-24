import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();

    const initalState = {
        isDarkMode: false,
        time: ['6:00AM', '9:00AM', '12:00PM', '3:00PM', '6:00PM', '9:00PM']
  }

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initalState);

    const toggleTheme = () => {
        dispatch({type: "TOGGLE_THEME",})
    }

    const makeApiCall = (city) => {
        console.log(city);
    }

    return (
        <AppContext.Provider value={{
             state,
             toggleTheme,
             makeApiCall
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };


export const  useGlobalContext = () => {
      return   useContext(AppContext)
}
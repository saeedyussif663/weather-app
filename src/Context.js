import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();

const initalState = {
    error: {
        isError: false,
        message: ''
    },
    weatherDetails: {
        city: '',
        description: '',
        temperature: '',
        feelsLike: '',
        windSpeed: '',
        humidity: ''
    },
    isLoading: false,
    isDarkMode: false,
    time: ['6:00AM', '9:00AM', '12:00PM', '3:00PM', '6:00PM', '9:00PM']
  }

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initalState);

    const toggleTheme = () => {
        dispatch({type: "TOGGLE_THEME",})
    }

    const makeApiCall = async (city) => {
        dispatch({ type: "TOGGLE_LOADER", })
        const Api =` http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=483fbf546ed6d65441cd3390fb2fe355`
        try {
            const response = await fetch(Api);
            const data = await response.json();
            console.log(data);
            const weather = {
                city: data.name,
                windSpeed: data.wind.speed,
                feelsLike: data.main.feels_like,
                humidity: data.main.humidity,
                temperature: data.main.temp,
                description: data.weather[0].description
            }
            dispatch({type: 'SETWEATHERDATA', details: weather})
        } catch (error) {
            
        }
        dispatch({ type: "TOGGLE_LOADER", })
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
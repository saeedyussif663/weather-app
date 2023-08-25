

import SearchBar from "./Components/SearchBar";
import City from "./Components/City";
import AirConditions from "./Components/AirConditions"

import { useGlobalContext } from "./Context";
import { useEffect } from "react";
import Loader from "./Loader";
import ErrorModal from "./Components/ErrorModal";

function App() {
  const { state } = useGlobalContext();
  const {weatherDetails, error} = state


  useEffect(() => {
    const wrapper = document.getElementById('wrapper');
    if (state.isDarkMode) {
      wrapper.classList.add('dark')
    } else {  
      wrapper.classList.remove('dark')
    }
  }, [state.isDarkMode])

  return (
    <div className={`flex flex-col  bg-white dark:bg-slate-950 h-screen`}>
      {state.isLoading ?
        <>
          <SearchBar />
          <Loader /> 
        </> :
        <>
      <SearchBar />
     <City />
     {error.isError && <ErrorModal/>}
     { weatherDetails.temperature &&<AirConditions />}
      </>
      }
      </div>
  );
}

export default App;

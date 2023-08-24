

import SearchBar from "./Components/SearchBar";
import City from "./Components/City";
import TodayForecast from "./Components/TodayForecast";
import AirConditions from "./Components/AirConditions"

import { useGlobalContext } from "./Context";
import { useEffect } from "react";

function App() {
  const { state } = useGlobalContext();

  useEffect(() => {
     const wrapper = document.getElementById('wrapper');
        if (state.isDarkMode) {
            wrapper.classList.add('dark')
        } else {
            wrapper.classList.remove('dark')
        }
  },[state.isDarkMode])

  return (
    <div className="flex flex-col  bg-white dark:bg-slate-950 h-screen">
      <SearchBar />
      <City />
      <TodayForecast />
      <AirConditions/>
      </div>
  );
}

export default App;

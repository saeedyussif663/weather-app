import { useState, useEffect } from "react";

import SearchBar from "./Components/SearchBar";
import City from "./Components/City";
import TodayForecast from "./Components/TodayForecast";
import AirConditions from "./Components/AirConditions"

// import {  useGlobalContext } from "./Context";

function App() {
  const [isChecked, setIsChecked] = useState(false)


  const handleCheckboxChange = () => {
  setIsChecked(prev => !prev)
}

  useEffect(() => {
   const wrapper =  document.getElementById('wrapper')
    if (isChecked) {
      wrapper.classList.add('dark')
    } else {
      wrapper.classList.remove('dark')
    }
  }, [isChecked])


  return (
    <div className="bg-white dark:bg-slate-950">
        <div>
          <label className="switch">
          <input type="checkbox" value={isChecked} onChange={handleCheckboxChange}/>
          <span className="slider round"></span>
          </label>
        </div>
      <SearchBar />
      <City />
      <TodayForecast />
      <AirConditions/>
      </div>
  );
}

export default App;



import SearchBar from "./Components/SearchBar";
import City from "./Components/City";
import TodayForecast from "./Components/TodayForecast";
import AirConditions from "./Components/AirConditions"

function App() {

  return (
    <div className="flex flex-col">
      <SearchBar />
      <City />
      <TodayForecast />
      <AirConditions/>
      </div>
  );
}

export default App;

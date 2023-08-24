import { useGlobalContext } from "../Context"
import { useState } from "react"

const SearchBar = () => {
    const [city, setCity] = useState('')
    const { toggleTheme, state,  makeApiCall} = useGlobalContext()
    const { isDarkMode } = state
    const theme = isDarkMode ? 'fa-sun' : 'fa-moon';

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const sendData = () => {
        makeApiCall(city);
        setCity('');
    }

    return (
        <section className="flex flex-row items-center">
            <div className="flex flex-row my-2 ml-8 w-2/3 md:w-1/2 md:mx-auto">
                <input type="text" placeholder="Search for Cities"
                    value={city}
                    onChange={handleChange}
                    className="w-full md:w-full md:mx-auto rounded-xl px-4 h-14 focus:outline-none bg-slate-300 text-slate-800 dark:text-white dark:text-xl dark:bg-slate-800"
                />
                <i
                    onClick={sendData}
                    className="fa-solid fa-magnifying-glass text-2xl  relative top-4  right-12 text-slate-800 dark:text-white"
                ></i>
            </div>
            <i className= {`fa-regular ${theme}  ml-auto mr-6 md:mr-12 cursor-pointer shadow-md text-xl md:text-2xl dark:text-white`}
            onClick={toggleTheme}></i>
        </section>
    )
}

export default SearchBar
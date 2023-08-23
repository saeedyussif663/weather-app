import { useGlobalContext } from "../Context"

const SearchBar = () => {
    const {toggleTheme} = useGlobalContext()

    return (
        <section>
            <div className="flex flex-row my-2 ml-8  md:w-1/2 md:mx-auto">
                <input type="text" placeholder="Search for Cities"
                    className="w-full md:w-full md:mx-auto rounded-xl px-4 h-14 focus:outline-none bg-slate-300 text-slate-800 dark:text-white dark:text-xl dark:bg-slate-800"
                />
                <i
                    className="fa-solid fa-magnifying-glass text-2xl  relative top-4  right-12 text-slate-800 dark:text-white"
                
                ></i>
            </div>
            <div className="flex flex-row justify-center mt-4">
                <button className="bg-slate-800 text-slate-200 mx-4 md:mx-8 py-3 px-2 rounded-xl "
                    onClick={() => toggleTheme('light')}
                >
                    Light Theme</button>
                <button className="bg-slate-800 text-slate-200 mx-4 md:mx-8 py-3 px-2 rounded-xl"
                    onClick={() => toggleTheme('dark')}
                >
                    Dark Theme</button>
            </div>
        </section>
    )
}

export default SearchBar
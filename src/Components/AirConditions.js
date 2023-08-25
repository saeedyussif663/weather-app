import { useGlobalContext } from "../Context"

const AirConditions = () => {
    const { state } = useGlobalContext()
    const {description, feelsLike, windSpeed, humidity} = state.weatherDetails

    return (
        <section className="mt-6 w-11/12 mx-auto bg-slate-200 dark:bg-slate-700 rounded-xl mb-4 flex flex-col">
            <h1 className="pl-4 text-lg md:text-2xl text-slate-900 dark:text-gray-300">
                Air Conditions
            </h1>
            <div className="pl-4 grid grid-cols-2">
                <div className="flex flex-col mr-8  ml-2">
                    <div className="flex flex-row justify-start align-center">
                    <i className="fa-solid fa-temperature-three-quarters mr-2 relative top-1 dark:text-gray-300"></i>
                        <p className="text-slate-900 dark:text-gray-300 text-xl">Feels Like</p>
                    </div>
                    <h1 className="ml-6 text-slate-900 dark:text-gray-300 text-xl">{ feelsLike} <sup>o</sup></h1>
                </div>
                <div className="flex flex-col mr-8 ml-2">
                    <div className="flex flex-row justify-start align-center">
                        <i class="fa-solid fa-wind mr-2 relative top-1 dark:text-gray-300"></i>
                        <p className="text-slate-900 dark:text-gray-300 text-xl">Wind</p>
                    </div>
                    <h1 className="ml-6 text-slate-900 dark:text-gray-300 text-xl">{windSpeed} m/h</h1>
                </div>
                  <div className="flex flex-col mr-8 ml-2 my-4">
                    <div className="flex flex-row justify-start align-center">
                        <i class="fa-solid fa-droplet mr-2 relative top-1 dark:text-gray-300"></i>
                        <p className="text-slate-900 dark:text-gray-300 text-xl">Description</p>
                    </div>
                    <h1 className="ml-6 text-slate-900 dark:text-gray-300 text-xl">{ description}</h1>
                </div>
                  <div className="flex flex-col mr-8 ml-2 my-4">
                    <div className="flex flex-row justify-start align-center">
                        <i class="fa-solid fa-temperature-arrow-up mr-2 relative top-1 dark:text-gray-300"></i>
                        <p className="text-slate-900 dark:text-gray-300 text-xl">Humidity</p>
                    </div>
                    <h1 className="ml-6 text-slate-900 dark:text-gray-300 text-xl">{humidity}%</h1>
                </div>
            </div>
        </section>
    )
}

export default AirConditions;
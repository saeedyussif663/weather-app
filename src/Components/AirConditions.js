
const AirConditions = () => {
    return (
        <section className="mt-6 w-11/12 mx-auto bg-slate-200 dark:bg-slate-700 rounded-xl mb-4 flex flex-col">
            <h1 className="pl-4 text-lg md:text-2xl text-slate-900 dark:text-gray-300">
                Air Conditions
            </h1>
            <div className="pl-4 grid grid-cols-2">
                <div className="flex flex-col mr-8  ml-2">
                    <div className="flex flex-row justify-start align-center">
                    <i className="fa-solid fa-temperature-three-quarters mr-2 relative top-1 dark:text-gray-300"></i>
                        <p className="text-slate-900 dark:text-gray-300 text-xl">Real Feel</p>
                    </div>
                    <h1 className="ml-6 text-slate-900 dark:text-gray-300 text-xl">30<sup>o</sup></h1>
                </div>
                <div className="flex flex-col mr-8 ml-2">
                    <div className="flex flex-row justify-start align-center">
                        <i class="fa-solid fa-wind mr-2 relative top-1 dark:text-gray-300"></i>
                        <p className="text-slate-900 dark:text-gray-300 text-xl">Wind</p>
                    </div>
                    <h1 className="ml-6 text-slate-900 dark:text-gray-300 text-xl">0.2  km/h</h1>
                </div>
                  <div className="flex flex-col mr-8 ml-2 my-4">
                    <div className="flex flex-row justify-start align-center">
                        <i class="fa-solid fa-droplet mr-2 relative top-1 dark:text-gray-300"></i>
                        <p className="text-slate-900 dark:text-gray-300 text-xl">Chances of Rain</p>
                    </div>
                    <h1 className="ml-6 text-slate-900 dark:text-gray-300 text-xl">0 %</h1>
                </div>
                  <div className="flex flex-col mr-8 ml-2 my-4">
                    <div className="flex flex-row justify-start align-center">
                        <i class="fa-solid fa-temperature-arrow-up mr-2 relative top-1 dark:text-gray-300"></i>
                        <p className="text-slate-900 dark:text-gray-300 text-xl">Humidity</p>
                    </div>
                    <h1 className="ml-6 text-slate-900 dark:text-gray-300 text-xl">70 %</h1>
                </div>
            </div>
        </section>
    )
}

export default AirConditions;
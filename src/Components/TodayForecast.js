import { useGlobalContext } from "../Context";

const TodayForecast = () => {
    const {state} = useGlobalContext()

    return (
        <section className=" w-11/12 rounded-xl mx-auto mt-6 bg-slate-200 dark:bg-slate-700  flex flex-col">
            <h1 className="pl-6 py-2 text-2xl text-slate-900 dark:text-gray-300">Today's Forecast</h1>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-6 pb-5 pl-1 md:mt-4">
                {state.time.map(time => {
                    return (
                        <div key={Math.random()} className="mb-4 border-b-2 md:border-r-2 last-of-type:border-r-0 mr-2 border-gray-300  dark:border-slate-900 pb-1 text-center">
                            <h1 className="text-slate-900 dark:text-gray-300 text-xl center md:pt-4">{time}</h1>
                            <h1 className="text-slate-900 text-lg dark:text-gray-300 md:mt-4">25<sup>o</sup></h1>
                        </div>
                        )
                    })}        
                

            </div>
        </section>
    )
}

export default TodayForecast;
import { useGlobalContext } from "../Context";

const City = () => {
    const { state } = useGlobalContext()
    const { city, temperature } = state.weatherDetails;

    return (
        <section className=" mt-2 ml-8 md:ml-32  flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl text-slate-600 dark:text-white">
                {city === '' ? 'Search for city' : city}
            </h1>
            <h1 className="mt-4 md:mt-4 text-2xl md:text-4xl text-slate-600 dark:text-white">
                {temperature === '' ? 'temperature: N/A' : temperature}
            </h1>
        </section>
    ) 
}

export default City;
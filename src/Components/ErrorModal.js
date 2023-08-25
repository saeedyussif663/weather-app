import { useGlobalContext } from "../Context"

const ErrorModal = () => {
    const { state } = useGlobalContext();

    return (
        <section className=" my-6 w-11/12 mx-auto md:w-1/2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            <h1 className="text-center  text-slate-900 dark:text-gray-300 text-2xl md:text-4xl">Oops, an error was encountered</h1>
            <p className="text-center mt-4 pb-6 uppercase text-slate-900 dark:text-gray-300 text-2xl md:text-4x">{ state.error.message}</p>
        </section>
    )
}


export default ErrorModal
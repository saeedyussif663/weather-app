

export const reducer = (state, action) => {
    if (action.type === 'TOGGLE_THEME') {
        return {
            ...state,
            isDarkMode: !state.isDarkMode
        }
    }

    if (action.type === 'TOGGLE_LOADER') {
        return {
            ...state,
            isLoading: !state.isLoading
        }
    }

    if (action.type === 'SETWEATHERDATA') {
        return {
            ...state,
            weatherDetails: action.details
        }
    }

    if (action.type === 'ERROR') {
        return {
            ...state,
            error: {
                isError: true,
                message: action.data.message
            }
        }
    }

    if (action.type === 'RESETERROR') {
        return {
            ...state,
            error: {
                ...state.error,
                isError: false,
            }
        }
    }

    return state;
}


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

    return state;
}

export const reducer = (state, action) => {
    if (action.type === 'TOGGLE_THEME') {
        return {
            ...state,
            isDarkMode: !state.isDarkMode
       }
    }

    return state;
}
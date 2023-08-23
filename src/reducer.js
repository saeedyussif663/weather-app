
export const reducer = (state, action) => {
    if (action.type === 'TOGGLE_THEME') {
        const wrapper = document.getElementById('wrapper');
        if (action.theme === 'dark') {
            wrapper.classList.add('dark')
        } else {
            wrapper.classList.remove('dark')
        }
    }

    return state;
}
const status = (state = [], action) => {
    switch (action.type) {
        case 'TRUE':
            return state = [...state, action.value];
        case 'FALSE':
            return state.pop();
        default:
            return state;
    }
}

export default status
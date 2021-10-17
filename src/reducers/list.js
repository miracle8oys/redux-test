const list = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            const task = {
                name: action.value,
                id: Math.random() * 1000,
                completed: false
            }
            return [...state, task];
        case 'REMOVE':
            state = state.filter(i => i.id !== action.value)
            return state;
        case 'UPDATE':
            state.forEach(i => {
                if (i.id === action.id) {
                    i.name = action.value;
                }
            })
            return state;
        default:
            return state;
    }
}

export default list;
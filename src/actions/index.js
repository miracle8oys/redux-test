export const addTask = (value) => {
    return {
        type: 'ADD',
        value
    }
}

export const removeTask = (value) => {
    return {
        type: 'REMOVE',
        value
    }
}

export const updateTask = (id, value) => {
    return {
        type: 'UPDATE',
        id,
        value
    }
}
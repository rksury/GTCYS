const initialState = {
    data: []
}

const contacts = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return { ...state, data: [...state.data, action.payload] }
        case 'UPDATE_CONTACT':
            return { ...state, data: action.payload }
        case 'DELETE_CONTACT':
            return { ...state, data: action.payload }
        default:
            return { ...state }
    }
}


export default contacts
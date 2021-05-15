const ADD_CONTACT = "ADD_CONTACT"
export const addContact = (data) => ({
    type: ADD_CONTACT,
    payload: data
})

const UPDATE_CONTACT = "UPDATE_CONTACT"
export const updateContact = (data) => ({
    type: UPDATE_CONTACT,
    payload: data
})

const DELETE_CONTACT = "DELETE_CONTACT"
export const deleteContact = (data) => ({
    type: DELETE_CONTACT,
    payload: data
})
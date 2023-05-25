// ACTIONS TYPES
const SET_OPEN_MODAL = 'SET_OPEN_MODAL';
const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL';
const SET_OPEN_MODAL_DELETE = 'SET_OPEN_MODAL_DELETE';

// // SELECRORS 
export const MODULE_NAME = 'modals';
export const selectModal = state => state[MODULE_NAME].modalIsOpen;
export const selectModalDelete = state => state[MODULE_NAME].modaDeletelIsOpen;
export const selectCurrentItem = state => state[MODULE_NAME].currentItem;

// REDUCER
const initialState = {
    modalIsOpen: false,
    modaDeletelIsOpen: false,
    currentItem: null
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: !state.modalIsOpen,
                currentItem: payload
            }
        case SET_CLOSE_MODAL:
            return {
                initialState
            }
        case SET_OPEN_MODAL_DELETE:
            return {
                ...state,
                modaDeletelIsOpen: !state.modaDeletelIsOpen,
                currentItem: payload
            }
        default:
            return state;
    }
}

// ACTION CREATORS
export const setOpenModal = payload => ({
    type: SET_OPEN_MODAL,
    payload
});

export const setCloseModal = payload => ({
    type: SET_CLOSE_MODAL,
    payload
});

export const setOpenModalDelete = payload => ({
    type: SET_OPEN_MODAL_DELETE,
    payload
});

export const openModal = (id) => dispatch => {
    dispatch(setOpenModal(id))
};

export const closeModal = () => dispatch => {
    dispatch(setCloseModal())
};
export const openModalDelete = (id) => dispatch => {
    dispatch(setOpenModalDelete(id))
};
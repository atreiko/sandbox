// ACTIONS TYPES

const CREATE_VALUES = 'CREATE_VALUES';
const CREATE_ORDERS = 'CREATE_ORDERS';

// SELECTORS 

export const MODULE_NAME = 'form';
export const selectValues = state => state[MODULE_NAME].value;
export const selectOrders = state => state[MODULE_NAME].orders;

// REDUCER

const initialState =  {
    value: {
        name: '',
        surname: '',
        age: '',
        adress: '',
        phone: '',
    },
    orders: [],
};

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_VALUES:
            return {
                ...state,
                value: {
                    name: '',
                    surname: '',
                    age: '',
                    adress: '',
                    phone: '',
                }
            }
        case CREATE_ORDERS:
            return {
                ...state,
                orders: [...state.orders, payload]
            }
        default:
            return state;
    }
}

// ACTION CREATORS

export const setValues = () => ({
    type: CREATE_VALUES,
});

export const setOrders = payload => ({
    type: CREATE_ORDERS,
    payload
})

export const createForm = () => dispatch => {
    const basketItem = JSON.parse(localStorage.getItem("ItemBasket"));
    console.log(basketItem);
    localStorage.removeItem("ItemBasket");
    dispatch(setValues());
};

export const createOrders = (orders) => dispatch => {
    dispatch(setOrders(orders));
}


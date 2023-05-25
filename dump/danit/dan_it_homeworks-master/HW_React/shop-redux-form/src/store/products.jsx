import Axios from "axios";

// ACTIONS TYPES
const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVOTITE = 'REMOVE_FAVOTITE';
const ADD_BASKET = 'ADD_BASKET';
const REMOVE_BASKET = 'REMOVE_BASKET';


// SELECTORS
export const MODULE_NAME = 'products';
export const selectProductsList = state => state[MODULE_NAME].list;


// REDUCER
const initialState = {
    list: [],
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                list: payload
            }
        case ADD_FAVORITE:
            return {
                ...state,
                list: payload
            }
        case REMOVE_FAVOTITE:
            return {
                ...state,
                list: payload
            }
        case ADD_BASKET:
            return {
                ...state,
                list: payload
            }
        case REMOVE_BASKET:
            return {
                ...state,
                list: payload
            }
        default:
            return state;
    }
}

// ACTION CREATORS
const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
});
const setAddFavorite = payload => ({
    type: ADD_FAVORITE,
    payload
});
const setRemoveFavorite = payload => ({
    type: REMOVE_FAVOTITE,
    payload
});
const setAddBasket = payload => ({
    type: ADD_BASKET,
    payload
});
const setRemoveBasket = payload => ({
    type: REMOVE_BASKET,
    payload
});

// MIDDLEWARE
export const getProducts = () => async dispatch => {
    try {
        const { data } = await Axios.get('MOCK_DATA.json');

        const favoriteItem = JSON.parse(localStorage.getItem("ItemFavorite"));
        const basketItem = JSON.parse(localStorage.getItem("ItemBasket"));

        const favoriteList = [];
        if (favoriteItem) {
            data.forEach((item) => {
                favoriteItem.forEach(elem => {
                    if (item.id === elem.id) {
                        item.inFavorite = true
                    }
                })
                favoriteList.push(item)
            })
            dispatch(setProducts(favoriteList));
        } 
        const basketList =[];
        if (basketItem) {
            data.forEach(item => {
                basketItem.forEach(elem => {
                    if (item.id === elem.id) {
                        item.inBasket = true
                    }
                })
                basketList.push(item)
            })
            dispatch(setProducts(basketList));
        }
        dispatch(setProducts(data))
    } catch (error) {
        console.log(error);
    }
};

export const addFavorite = (favoriteList) => dispatch => {
    try {
        dispatch(setAddFavorite(favoriteList));
        localStorage.setItem("ItemFavorite", JSON.stringify(favoriteList.filter(item => item.inFavorite)))
    } catch (error) {
        console.log(error);
    }
};

export const removeFavorite = (favoriteList) => dispatch => {
    try {
        dispatch(setRemoveFavorite(favoriteList))
        localStorage.setItem("ItemFavorite", JSON.stringify(favoriteList.filter(item => item.inFavorite)))
    } catch (error) {
        console.log(error);
    }
};

export const addBasket = (basketList) => dispatch => {
    try {
        dispatch(setAddBasket(basketList));
        localStorage.setItem("ItemBasket", JSON.stringify(basketList.filter(item => item.inBasket)))

    } catch (error) {
        console.log(error);
    }
}

export const removeBasket = (basketList) => dispatch => {
    try {
        dispatch(setRemoveBasket(basketList))
        localStorage.setItem("ItemBasket", JSON.stringify(basketList.filter(item => item.inBasket)))
    } catch (error) {
        console.log(error);
    }
};











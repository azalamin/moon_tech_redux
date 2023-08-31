import { CLEAR_FILTER, TOGGLE_BRAND, TOGGLE_STOCK } from '../actionTypes/actionTypes';

export const initialState = {
    filters: {
        brands: [],
        stock: false,
    },
    keyword: "",
}

export const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_BRAND:
            if (!state.filters.brands.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brands: [...state.filters.brands, action.payload]
                    }
                }
            } else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brands: state.filters.brands.filter(brand => brand !== action.payload),
                    }
                }
            }

        case TOGGLE_STOCK:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    stock: !state.filters.stock
                }

            }

        case CLEAR_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    stock: false,
                    brands: [],
                }

            }
        default:
            return state;
    }
}
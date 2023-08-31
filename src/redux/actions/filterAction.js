import { CLEAR_FILTER, TOGGLE_BRAND, TOGGLE_STOCK } from '../actionTypes/actionTypes'

export const toggleBrand = (brandName) => {
    return {
        type: TOGGLE_BRAND,
        payload: brandName
    }
}
export const toggleStock = () => {
    return {
        type: TOGGLE_STOCK,
    }
}
export const clearFilter = () => {
    return {
        type: CLEAR_FILTER,
    }
}
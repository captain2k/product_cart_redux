import * as types from "./../constants/ActionTypes";

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = () => {
    return {
        type: types.CHANGE_MESSAGE
    }
}

export const deleteProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT,
        product
    }
}

export const updateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
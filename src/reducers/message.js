import * as messages from "./../constants/Message";
import * as types from "./../constants/ActionTypes"

var initialState = messages.MSG_WELCOME

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            state = messages.MSG_ADD_PRODUCT_IN_CART_SUCCESS
            return state
        case types.DELETE_PRODUCT:
            state = messages.MSG_DELETE_IN_CART_SUCCESS
            return state
        case types.UPDATE_PRODUCT_IN_CART:
            state = messages.MSG_UPDATE_PRODUCT_IN_CART_SUCCESS
            return state
        default: return state
    }

}

export default message
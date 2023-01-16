import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART } from "./constant"



export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data]
        default:
            return []
    }
}
export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}
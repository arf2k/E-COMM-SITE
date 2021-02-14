import CartActionTypes from './cartTypes.js'

export const toggleCartHIdden = () => ({
     type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
     type: CartActionTypes.ADD_ITEM,
     payload: item
})
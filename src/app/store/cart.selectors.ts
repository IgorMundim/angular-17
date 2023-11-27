import { ICart } from "./cart.reducer"
export const selectTotal = (state: {
  cart: ICart;
}) =>  state.cart.cartTotal;

export const selectCount = (state: {
  cart: ICart;
}) =>  state.cart.cartCount;

export const selectCartItems = (state: {
  cart: ICart;
}) =>  state.cart.cartItems;

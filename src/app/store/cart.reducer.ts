import { createReducer, on } from "@ngrx/store";
import { addCartItems, clearCartItems, decreaseCartItems } from "./cart.actions";
import { IProduct } from "../data/products";


export interface ICart {
  cartItems: IProduct[];
  cartCount: number;
  cartTotal: number;
}

const INITIAL_STATE = {
  cartItems: [] as IProduct[],
  cartTotal: 0,
  cartCount: 0,

};

const addItems = (state:  {
  cartItems: IProduct[];
  cartCount: number;
  cartTotal: number;
}, productsToAdd: IProduct) => {
  const cartTotal = state.cartTotal + productsToAdd.price;
  const cartCount = state.cartCount + 1;

  const existingCartItems = state.cartItems.find((cartItem: IProduct) => cartItem.id === productsToAdd.id);
  if (existingCartItems) {
    const cartItems = state.cartItems.map((cartItem: IProduct) =>
      cartItem.id === productsToAdd.id ? {...cartItem , quantity: cartItem.quantity+1} : cartItem
    );
    return {
      cartItems: cartItems,
      cartTotal: cartTotal,
      cartCount: cartCount
    };
  }
    return {
      cartItems: [...state.cartItems, productsToAdd],
      cartTotal: cartTotal,
      cartCount: cartCount
    };
}
const decreaseItems = (state:  {
  cartItems: IProduct[];
  cartCount: number;
  cartTotal: number;
}, cartItemToDecrease: IProduct) => {
  const existingCartItem = state.cartItems.find((cartItem) => cartItem.id === cartItemToDecrease.id);

    if (existingCartItem?.quantity === 1){
      const cartItem = state.cartItems.filter((cartItem) => cartItem.id !== cartItemToDecrease.id);
      return {
        cartItems: cartItem,
        cartTotal: state.cartTotal - cartItemToDecrease.price,
        cartCount: state.cartCount - 1
      };
    }
    const cartItem = state.cartItems.map((cartItem: IProduct) =>
    cartItem.id === cartItemToDecrease.id ?
    { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

    return {
        cartItems: cartItem,
        cartTotal: state.cartTotal - cartItemToDecrease.price,
        cartCount: state.cartCount - 1
      };
}

const clearItems = (state:  ICart, cartItemToDecrease: IProduct) => {
  const cartItemStore = state.cartItems.find((cartItem) => cartItem.id === cartItemToDecrease.id);
  const cartItem = state.cartItems.filter((cartItem) => cartItem.id !== cartItemToDecrease.id);
  const quantity = cartItemStore?.quantity ? cartItemStore.quantity : 1
  return {
    cartItems: cartItem,
    cartTotal: state.cartTotal - cartItemToDecrease.price * quantity,
    cartCount: state.cartCount - quantity
  };
}


export const cartReducer = createReducer(
  INITIAL_STATE,
  on(addCartItems,
      (state, action) => addItems(state, action)
  ),
  on(decreaseCartItems,
    (state, action) => decreaseItems(state, action)
  ),
  on(clearCartItems,
    (state, action) => clearItems(state, action))

);




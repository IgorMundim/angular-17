import { createAction, props } from "@ngrx/store";
import { IProduct } from "../data/products";

export const addCartItems = createAction(
  '[Cart] AddItem',
  props<IProduct>()
)

export const decreaseCartItems = createAction(
  '[Cart] DecrementItem',
  props<IProduct>()
)

export const clearCartItems = createAction(
  '[Cart] clearItem',
  props<IProduct>()
)

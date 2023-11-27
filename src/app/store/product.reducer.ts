import { createReducer, on } from "@ngrx/store";
import products from "../data/products";

const INITIAL_STATE= products;
export const productReducer = createReducer(
  INITIAL_STATE
);

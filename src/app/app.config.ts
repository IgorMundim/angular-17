import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { productReducer } from './store/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({
    cart: cartReducer,
    product: productReducer
  })]
};

import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IProduct } from '../../data/products';
import { Observable, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { ICart } from '../../store/cart.reducer';
import { selectCartItems, selectTotal } from '../../store/cart.selectors';
import { addCartItems, clearCartItems, decreaseCartItems } from '../../store/cart.actions';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent{
  public cartTotal$: Observable<number>;
  public cartItem$: Observable<IProduct[]>;
  constructor(private cartStore: Store<{cart: ICart}>){
    this.cartTotal$ = cartStore.select(selectTotal);
    this.cartItem$ = cartStore.select(selectCartItems);

  }

  handleRemoveClick (cartItem: IProduct) {
    this.cartStore.dispatch(clearCartItems({...cartItem}))
  };

  handleIncreaseClick (cartItem: IProduct) {
    this.cartStore.dispatch(addCartItems({...cartItem}))
  };

  handleDecreaseClick (cartItem: IProduct, index: number){
    this.cartStore.dispatch(decreaseCartItems({...cartItem}))
  };
}

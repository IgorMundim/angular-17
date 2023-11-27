import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { Store } from '@ngrx/store';
import { ICart } from '../store/cart.reducer';
import { selectTotal } from '../store/cart.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() public openCart: boolean  = true;
  @Output('close') closeCart = new EventEmitter<boolean>();
  cartDetails = {total: 0, countItems: 0 };
  public cartTotal$: Observable<number>;
  constructor(private cartStore: Store<{cart: ICart}>){
    this.cartTotal$ = cartStore.select(selectTotal)
  }

  handleEscapeAreaClick(){
    this.closeCart.emit(true);
  }
}

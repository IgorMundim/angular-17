import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ICart } from '../store/cart.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '../store/cart.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public cartIsOpen: boolean = false;
  public cartItem$: Observable<number>;

  constructor(private cartStore: Store<{cart: ICart}>){
    this.cartItem$ = cartStore.select(selectCount)

  }

  openCart(){
    this.cartIsOpen = true;
  }

  closeCart(){
    this.cartIsOpen = false;
  }
}

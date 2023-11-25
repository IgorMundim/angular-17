import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';

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
  constructor(){}

  ngOnInit(): void {

  }

  handleEscapeAreaClick(){
    this.closeCart.emit(true);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../data/products';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent implements OnInit{
  public cartItems: Array<IProduct> = [];
  constructor(){}
  ngOnInit(): void {
    // this.cartItems = this.cartService.getCart();
  }

  handleRemoveClick (index: number) {
    // this.cartService.clearCartItem(index);
  };

  handleIncreaseClick (cartItem: IProduct) {
    // this.cartService.addCart(cartItem)
  };

  handleDecreaseClick (cartItem: IProduct, index: number){
    // this.cartService.removeCartItems(cartItem, index);
  };
}

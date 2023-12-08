import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../data/products';
import { Store } from '@ngrx/store';
import { ICart } from '../../store/cart.reducer';
import { addCartItems } from '../../store/cart.actions';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  constructor(private cartStore: Store<ICart>){

  }
  @Input('item') public product: IProduct = {
    id: '',
    name: '',
    price: 0,
    imageUrl: '',
    quantity: 1
  };
  handleProductClick(){
    this.cartStore.dispatch(addCartItems({...this.product}))
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public cartIsOpen: boolean = false;
  public cartDetails = { total: 0, countItems: 0 };

  constructor(){}

  ngOnInit(): void {

  }
  openCart(){
    this.cartIsOpen = true;
  }

  closeCart(){
    this.cartIsOpen = false;
  }
}

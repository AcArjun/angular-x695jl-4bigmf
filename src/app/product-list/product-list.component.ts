import { Component, Output } from '@angular/core';

import { products } from '../products';
import { CartServiceService } from '../cart-service.service';
Output

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
constructor(private cartService:CartServiceService){}
  share() {
    window.alert('The product has been shared!');
  }
    onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  addElementTOCart(product){
    this.cartService.addToCart(product)
    window.alert(`Your product: ${product.name} has been added to the cart!`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
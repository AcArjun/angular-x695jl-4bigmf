import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartServiceService {
  cartItems = []

  constructor(private http:HttpClient) { }

  addToCart(product){
    this.cartItems.push(product)
  }
  getCartItems(){
    return this.cartItems
  }
  clearCartItems(){
    this.cartItems = []
    return this.cartItems
  }
  getShippingCharge(){
    return this.http.get('/assets/shipping.json')
  }

}
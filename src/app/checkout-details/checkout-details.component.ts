import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.css']
})
export class CheckoutDetailsComponent implements OnInit {
  cartItems
  constructor(private cartService:CartServiceService,private router:Router) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems()
  }
userData(){
this.router.navigateByUrl('/userData')
}

}
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit {
  shippingDetails
  constructor(private cartService: CartServiceService) { }

  ngOnInit() {
    this.shippingDetails = this.cartService.getShippingCharge()
    console.log('shipping charge', this.shippingDetails)
  }

}
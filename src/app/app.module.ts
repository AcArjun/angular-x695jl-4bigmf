import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartServiceService } from './cart-service.service';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { UserSubmitComponent } from './user-submit/user-submit.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
       { path: 'checkOut', component: CheckoutDetailsComponent },
       { path: 'shipping', component: ShippingDetailComponent },
        { path: 'userData', component: UserSubmitComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CheckoutDetailsComponent,
    ShippingDetailComponent,
    UserSubmitComponent,

  ],
  bootstrap: [ AppComponent ],
  providers: [CartServiceService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
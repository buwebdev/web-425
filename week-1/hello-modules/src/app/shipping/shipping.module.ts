import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';

@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ ShippingComponent ]
})
export class ShippingModule { }

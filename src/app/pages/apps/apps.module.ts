import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { StockComponent } from './stock/stock.component';
import { CustomerComponent } from './customer/customer.component';
import { BillComponent } from './bill/bill.component';


@NgModule({
  declarations: [
    StockComponent,
    CustomerComponent,
    BillComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryviewComponent } from './categoryview/categoryview.component';
import { ProcessRoutingModule } from './process-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../modules/widgets/widgets.module';
import { ShopModule } from '../modules/shop/shop.module';

@NgModule({
  declarations: [CategoryviewComponent],
  imports: [
    CommonModule,
    ProcessRoutingModule,
     // modules (angular)
     RouterModule,
     // modules
     SharedModule,
     WidgetsModule,
     ShopModule
  ]
})
export class ProcessModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryviewComponent } from './categoryview/categoryview.component';
import { ProcessRoutingModule } from './process-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../modules/widgets/widgets.module';
import { ShopModule } from '../modules/shop/shop.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { ReturnanItemComponent } from './returnan-item/returnan-item.component';
import { ShippingChargesComponent } from './shipping-charges/shipping-charges.component';
import { MessagesComponent } from './messages/messages.component';
import { FileComplainsComponent } from './file-complains/file-complains.component';
import { ComplainHistoryComponent } from './complain-history/complain-history.component';
import { RateSupplierComponent } from './rate-supplier/rate-supplier.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { SeeallReviewsComponent } from './seeall-reviews/seeall-reviews.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    CategoryviewComponent, 
    DashboardComponent, 
    QuoteRequestComponent, 
    ReturnanItemComponent, 
    ShippingChargesComponent, MessagesComponent, FileComplainsComponent, ComplainHistoryComponent, RateSupplierComponent, ViewRatingsComponent, SeeallReviewsComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
     // modules (angular)
     RouterModule,
     // modules
     SharedModule,
     WidgetsModule,
     ShopModule,
     CarouselModule
  ]
})
export class ProcessModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryviewComponent } from './categoryview/categoryview.component';
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


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-grid-3-columns-sidebar'
    },
    {
        path: 'categoryview/:id',
        component: CategoryviewComponent,
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'quote-request',
        component: QuoteRequestComponent,
    }
    ,
    {
        path: 'return-an-item',
        component: ReturnanItemComponent,
    },
    {
        path: 'shipping-charges',
        component: ShippingChargesComponent,
    },
    {
        path: 'Messages',
        component: MessagesComponent,
    }
    // ,
    // {
    //     path: 'compare-products',
    //     component: comparep,
    // }
    ,
    {
        path: 'file-a-complain',
        component: FileComplainsComponent,
    },
    {
        path: 'Complain-History',
        component: ComplainHistoryComponent,
    },
    {
        path: 'rate-a-supplier',
        component: RateSupplierComponent,
    },
    {
        path: 'view-ratings',
        component: ViewRatingsComponent,
    },
    {
        path: 'See-all-Reviews',
        component: SeeallReviewsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcessRoutingModule { }

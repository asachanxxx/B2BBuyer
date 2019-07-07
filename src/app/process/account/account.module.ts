import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../shared/shared.module';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages
import { PageAddressesListComponent } from './pages/page-addresses-list/page-addresses-list.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageOrdersListComponent } from './pages/page-orders-list/page-orders-list.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { ReturnHistoryComponent } from './pages/return-history/return-history.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { QuotationHistoryComponent } from './pages/quotation-history/quotation-history.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';



@NgModule({
    declarations: [
        // components
        LayoutComponent,
        // pages
        PageAddressesListComponent,
        PageDashboardComponent,
        PageOrdersListComponent,
        PagePasswordComponent,
        ReturnHistoryComponent, 
        OrderHistoryComponent, 
        QuotationHistoryComponent, 
        PageProfileComponent
    


    ],
    imports: [
        // modules (angular)
        CommonModule,
        // modules
        AccountRoutingModule,
        SharedModule
    ]
})
export class AccountModule { }

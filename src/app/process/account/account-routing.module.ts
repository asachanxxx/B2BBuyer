import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageOrdersListComponent } from './pages/page-orders-list/page-orders-list.component';
import { PageAddressesListComponent } from './pages/page-addresses-list/page-addresses-list.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { QuotationHistoryComponent } from './pages/quotation-history/quotation-history.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { ReturnHistoryComponent } from './pages/return-history/return-history.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: PageDashboardComponent
            },
            {
                path: 'addresses',
                component: PageAddressesListComponent
            },
            {
                path: 'orders',
                component: PageOrdersListComponent
            },
            {
                path: 'password',
                component: PagePasswordComponent
            },
            {
                path: 'quotation-history',
                component: QuotationHistoryComponent,
            },
            {
                path: 'order-history',
                component: OrderHistoryComponent,
            },
            {
                path: 'return-request-history',
                component: ReturnHistoryComponent,
            }
            ,
            {
                path: 'profile',
                component: PageProfileComponent
            }
        ]
    }

    // ,
    // {
    //     path: 'login',
    //     component: PageLoginComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }

import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
    linksManageAccount: { label: string; url: string }[] = [
        { label: 'Dashboard', url: './dashboard' },
        { label: 'Account Settings', url: './profile' },
        { label: 'Order History', url: './orders' },
        { label: 'Addresses', url: './addresses' },
        { label: 'Premier Membership', url: './pmembers' },
        { label: 'B2BPoints', url: './b2bPoints' },
    ];
    linksSale: { label: string; url: string }[] = [
        { label: 'Order History', url: './order-history' },
        { label: 'Quotation History', url: './quotation-history' },
        // { label: 'Return History', url: './return-request-history' },
    ];

    linksNotifications: { label: string; url: string }[] = [
        { label: 'Seller Messages', url: './seller-messages' },
        { label: 'Email Notifications', url: './Email-Notifications' },
    ];
    
    constructor() { }
}

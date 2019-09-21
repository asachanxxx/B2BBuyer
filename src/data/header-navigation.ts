import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const navigation: NavigationLink[] = [
    {
        label: 'Shop', url: './shop', menu: {
            type: 'menu',
            items: [
                {
                    label: 'Shop Grid', url: './shop', items: [
                        { label: '3 Columns Sidebar', url: './shop/category-grid-3-columns-sidebar' },
                        { label: '4 Columns Full', url: './shop/category-grid-4-columns-full' },
                        { label: '5 Columns Full', url: './shop/category-grid-5-columns-full' }
                    ]
                },
                { label: 'Shop List', url: './shop/category-list' },
                { label: 'Shop Right Sidebar', url: './shop/category-right-sidebar' },
                {
                    label: 'Product', url: './shop/product', items: [
                        { label: 'Product', url: './shop/product' },
                        { label: 'Product Alt', url: './shop/product-columnar' },
                        { label: 'Product Sidebar', url: './shop/product-sidebar' }
                    ]
                },
                { label: 'Cart', url: './shop/cart' },
                { label: 'Checkout', url: './shop/checkout' },
                { label: 'Wishlist', url: './shop/wishlist' },
                { label: 'Compare', url: './shop/compare' },
                { label: 'Track Order', url: './shop/track-order' },
                { label: 'Level Browser', url: './shop/product-levelview' },
            ]
        }
    },
    {
        label: 'Sales', url: './site',image:"fas fa-hand-holding-usd", menu: {
            type: 'menu',
            items: [
                { label: 'Quote Requests', url: './process/quote-request' },
                { label: 'PO Requests', url: './process/porequests' },
                { label: 'Shipping Charges', url: './process/shipping-charges' },
            ]
        }
    }, {
        label: 'Approvals',image:"far fa-envelope",  url: './site', menu: {
            type: 'menu',
            items: [
                { label: 'Quotation Approvals', url: './process/quotationapprove' },
                { label: 'PO Approvals', url: './process/poapprove' },
            ]
        }
    }
    , {
        label: 'Compare', url: './site',image:"fas fa-less-than-equal", menu: {
            type: 'menu',
            items: [
                { label: 'Compare Products', url: './process/compare-products' },
                { label: 'Wishlist', url: './process/Wishlist' },
            ]
        }
    }, {
        label: 'Complains', url: './site', image:"fas fa-exclamation-triangle", menu: {
            type: 'menu',
            items: [
                { label: 'File a Complain', url: './process/file-a-complain' },
                { label: 'Complain History', url: './process/Complain-History' },
            ]
        }
    }
    , {
        label: 'Rating', url: './site',  image:"far fa-star",menu: {
            type: 'menu',
            items: [
                { label: 'View Ratings', url: './process/view-ratings' },
                { label: 'See all Reviews', url: './process/See-all-Reviews' },
            ]
        }
    }

];

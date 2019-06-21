import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const navigation: NavigationLink[] = [
    {
        label: 'Home', url: './', menu: {
            type: 'menu',
            items: [
                { label: 'Home 1', url: '/classic' }
            ]
        }
    },
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
        label: 'Account', url: './account', menu: {
            type: 'menu',
            items: [
                { label: 'Login', url: './account/login' },
                { label: 'Dashboard', url: './account/dashboard' },
                { label: 'Edit Profile', url: './account/profile' },
                { label: 'Order History', url: './account/orders' },
                { label: 'Address Book', url: './account/addresses' },
                { label: 'Change Password', url: './account/password' }
            ]
        }
    },
    {
        label: 'Blog', url: './blog', menu: {
            type: 'menu',
            items: [
                { label: 'Blog Classic', url: './blog/category-classic' },
                { label: 'Blog Grid', url: './blog/category-grid' },
                { label: 'Blog List', url: './blog/category-list' },
                { label: 'Blog Left Sidebar', url: './blog/category-left-sidebar' },
                { label: 'Post Page', url: './blog/post-classic' },
                { label: 'Post Without Sidebar', url: './blog/post-full' }
            ]
        }
    },
    {
        label: 'Pages', url: './site', menu: {
            type: 'menu',
            items: [
                { label: 'About Us', url: './site/about-us' },
                { label: 'Contact Us', url: './site/contact-us' },
                { label: 'Contact Us Alt', url: './site/contact-us-alt' },
                { label: '404', url: './site/not-found' },
                { label: 'Terms And Conditions', url: './site/terms' },
                { label: 'FAQ', url: './site/faq' },
                { label: 'Components', url: './site/components' },
                { label: 'Typography', url: './site/typography' }
            ]
        }
    },
    { label: 'Buy Theme', url: 'https://themeforest.net/item/stroyka-tools-store-angular-7-template/23523630', external: true }
];

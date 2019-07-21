import { Component, OnInit } from '@angular/core';
import { posts } from '../../../data/blog-posts';
import { brands } from '../../../data/shop-brands';
import { products } from '../../../data/shop-products';
import { categories } from '../../../data/shop-block-categories';
import { MainPageService } from 'src/app/shared/services/processservices/mainpage.service';

@Component({
    selector: 'app-home',
    templateUrl: './page-home-one.component.html',
    styleUrls: ['./page-home-one.component.scss'],
    providers: [MainPageService]
})
export class PageHomeOneComponent implements OnInit {
    products = products;
    categories = categories;
    posts = posts;
    brands = brands;
    BestSellingProductsinc
    Featuredproductsinc;
    SpecialProductssinc;
    newArrivalsSinc;
    featuredProducts
    SpecialProducts
    BestSellingProduct
    newArrivals

    columns = [
        {
            header: 'Top Rated Products',
            products: products.slice(0, 3)
        },
        {
            header: 'Special Offers',
            products: products.slice(3, 6)
        },
        {
            header: 'Bestsellers',
            products: products.slice(6, 9)
        }
    ];

    ngOnInit(): void {

            //Getting the Fetured products 
            this.service.GetFeatureProducts().subscribe(
                data => {
                    console.log(" GetFeatureProducts ", data)
                    this.Featuredproductsinc = data;
                    this.featuredProducts = {
                        loading: false,
                        products: this.Featuredproductsinc,
                        groups: [
                            { name: 'All', current: true },
                            { name: 'Processors', current: false },
                            { name: 'VGA', current: false },
                            { name: 'Memory', current: false }
                        ],
                        timeout: null, // only for demo
                        groupChange: group => {
                            this.featuredProducts.loading = true;
                            clearTimeout(this.featuredProducts.timeout);
                            this.featuredProducts.timeout = setTimeout(() => {
                                const itemsArray = this.Featuredproductsinc;
                                const newItemsArray = [];
                                while (itemsArray.length > 0) {
                                    const randomIndex = Math.floor(Math.random() * itemsArray.length);
                                    const randomItem = itemsArray.splice(randomIndex, 1)[0];
                                    newItemsArray.push(randomItem);
                                }
                                this.featuredProducts.loading = false;
                            }, 1000);
                        }
                    };
                }
            )



        //Getting the Fetured products 
        this.service.GetFeatureProducts().subscribe(
            data => {
                console.log(" GetFeatureProducts ", data)
                this.Featuredproductsinc = data;
                this.featuredProducts = {
                    loading: false,
                    products: this.Featuredproductsinc,
                    groups: [
                        { name: 'All', current: true },
                        { name: 'Processors', current: false },
                        { name: 'VGA', current: false },
                        { name: 'Memory', current: false }
                    ],
                    timeout: null, // only for demo
                    groupChange: group => {
                        this.featuredProducts.loading = true;
                        clearTimeout(this.featuredProducts.timeout);
                        this.featuredProducts.timeout = setTimeout(() => {
                            const itemsArray = this.Featuredproductsinc;
                            const newItemsArray = [];
                            while (itemsArray.length > 0) {
                                const randomIndex = Math.floor(Math.random() * itemsArray.length);
                                const randomItem = itemsArray.splice(randomIndex, 1)[0];
                                newItemsArray.push(randomItem);
                            }
                            this.featuredProducts.loading = false;
                        }, 1000);
                    }
                };
            }
        )

        //Getting the BestSelling products 
        this.service.GetBestSellers().subscribe(
            data => {
                console.log(" GetBestSellers ", data)
                this.SpecialProductssinc = data;
                this.SpecialProducts = {
                    loading: false,
                    products: this.SpecialProductssinc,
                    groups: [
                        { name: 'All', current: true },
                        { name: 'Power Tools', current: false },
                        { name: 'Hand Tools', current: false },
                        { name: 'Plumbing', current: false }
                    ],

                    timeout: null, // only for demo

                    groupChange: group => {
                        // only for demo
                        this.newArrivals.loading = true;

                        clearTimeout(this.newArrivals.timeout);

                        this.newArrivals.timeout = setTimeout(() => {
                            const itemsArray = this.SpecialProductssinc;
                            const newItemsArray = [];
                            while (itemsArray.length > 0) {
                                const randomIndex = Math.floor(Math.random() * itemsArray.length);
                                const randomItem = itemsArray.splice(randomIndex, 1)[0];
                                newItemsArray.push(randomItem);
                            }
                            this.newArrivals.products = newItemsArray;
                            this.newArrivals.loading = false;
                        }, 1000);
                    }
                };
            }
        )



        //Getting the NewArrival products 
        this.service.GetNewArrivales().subscribe(
            data => {
                console.log(" GetNewArrivales ", data)
                this.newArrivalsSinc = data;
                this.newArrivals = {
                    loading: false,
                    products: this.newArrivalsSinc,
                    groups: [
                        { name: 'All2', current: true },
                        { name: 'Processors2', current: false },
                        { name: 'VGA2', current: false },
                        { name: 'Memory2', current: false }
                    ],
                    timeout: null, // only for demo
                    groupChange: group => {
                        this.SpecialProducts.loading = true;
                        clearTimeout(this.featuredProducts.timeout);
                        this.SpecialProducts.timeout = setTimeout(() => {
                            const itemsArray = this.newArrivalsSinc;
                            const newItemsArray = [];
                            while (itemsArray.length > 0) {
                                const randomIndex = Math.floor(Math.random() * itemsArray.length);
                                const randomItem = itemsArray.splice(randomIndex, 1)[0];
                                newItemsArray.push(randomItem);
                            }
                            this.SpecialProducts.loading = false;
                        }, 1000);
                    }
                };

                
            }
        )
    }
    constructor(private service: MainPageService) {

    }
}

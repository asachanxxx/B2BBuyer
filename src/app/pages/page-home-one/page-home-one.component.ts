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
    Featuredproductsinc;
    featuredProducts

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

        this.service.GetFeatureProducts().subscribe(
            data => {
                this.Featuredproductsinc = data;
                console.log(this.Featuredproductsinc);
                this.featuredProducts = {
                    loading: false,
                    products: this.Featuredproductsinc.slice(),
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
                                console.log("randomIndex  ", randomIndex)
                                const randomItem = itemsArray.splice(randomIndex, 1)[0];
                                newItemsArray.push(randomItem);
                            }
                            this.featuredProducts.loading = false;
                        }, 1000);
                    }
                };

                console.log("featuredProducts  ", this.featuredProducts)


            }
        )
    }




    newArrivals = {
        loading: false,
        products: products.slice(),
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
                const itemsArray = this.newArrivals.products;
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

    constructor(private service: MainPageService) {

      //  console.log("featuredProducts  ", this.featuredProducts)

    }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { categories } from 'src/data/shop-block-categories';
import { Product } from 'src/app/shared/interfaces/product';
import { products } from 'src/data/shop-products';

@Component({
    selector: 'app-page-product',
    templateUrl: './page-product.component.html',
    styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent {
    categories = categories;
    products: Product[] = products;
    product: Product;
    layout: 'standard'|'columnar'|'sidebar' = 'standard';
    sidebarPosition: 'start'|'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

    constructor(private route: ActivatedRoute) {
        console.log("products - PageProductComponent" , this.products)
        this.route.data.subscribe(data => {
            this.layout = 'layout' in data ? data.layout : this.layout;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
        this.route.params.pipe(map(params => {
            if (params.hasOwnProperty('id')) {
                const product = products.find(eachProduct => eachProduct.id === parseFloat(params.id));

                if (product) {
                    return product;
                }
            }

            return products[products.length - 1];
        })).subscribe(product => this.product = product);
    }
}

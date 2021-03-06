import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { categories } from 'src/data/shop-block-categories';
import { Product } from 'src/app/shared/interfaces/product';
import { products } from 'src/data/shop-products';
import { MainPageService } from 'src/app/shared/services/processservices/mainpage.service';

@Component({
    selector: 'app-page-product',
    templateUrl: './page-product.component.html',
    styleUrls: ['./page-product.component.scss'],
    providers: [MainPageService]
})
export class PageProductComponent implements OnInit {

    categories = categories;
    products: Product[] = products;
    product: Product;
    layout: 'standard' | 'columnar' | 'sidebar' = 'standard';
    sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
    productid: any;

    passingProID = 1;

    constructor(private route: ActivatedRoute, private service: MainPageService) {
        console.log("products - PageProductComponent", this.products)
        this.route.data.subscribe(data => {
            this.layout = 'layout' in data ? data.layout : this.layout;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
        this.route.params.pipe(map(params => {
            if (params.hasOwnProperty('id')) {
                this.productid = params.id;
                this.passingProID = params.id;
            }
        })).subscribe();
    }

    ngOnInit(): void {
        this.GetProduct(this.productid)
    }

    GetProduct(id: number) {
        this.service.GetSingleProduct(id).subscribe(
            data => {
                this.product = data;
                console.log("Service Data ", data, "   this.productid ", id)
            }
        )
    }
}

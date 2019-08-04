import { Component, Input, OnInit } from '@angular/core';
import {  ProductReview, ProductSpecificationsGroups } from 'src/app/shared/interfaces/product';
import { specification } from 'src/data/shop-product-spec';
import { reviews } from 'src/data/shop-product-reviews';
import { ProductService } from '../../../shared/services/processservices/product.service';

@Component({
    selector: 'app-product-tabs',
    templateUrl: './product-tabs.component.html',
    styleUrls: ['./product-tabs.component.scss'],
    providers:[ProductService]
})
export class ProductTabsComponent implements OnInit {

    @Input() withSidebar = false;
    @Input() tab: 'description'|'specification'|'reviews' = 'description';
    @Input() productid = 1;
    src="https://www.gigabyte.com/Graphics-Card/GV-N2070WF3-8GC#kf";

    specification: ProductSpecificationsGroups[];// = specification;
    reviews: ProductReview[] = reviews;

    constructor(private service:ProductService) { }


    ngOnInit(): void {
       this.LoadSpecificationForGivenProduct();
    }

    LoadSpecificationForGivenProduct(){
        this.service.GetSpecificationForGivenProduct(this.productid).subscribe(
            data=>{
                this.specification = data;
                console.log("Specification DATA /*/*/* : " , data)
            },
            err=>{
                console.log("Specification DATA /*/*/* Error: " , err)
            }

        )
    }
}

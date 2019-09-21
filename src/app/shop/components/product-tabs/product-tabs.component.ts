import { Component, Input, OnInit } from '@angular/core';
import {  ProductReview, ProductSpecificationsGroups } from 'src/app/shared/interfaces/product';
import { specification } from 'src/data/shop-product-spec';
import { reviews } from 'src/data/shop-product-reviews';
import { ProductService } from '../../../shared/services/processservices/product.service';
import { AlertService } from 'src/app/auth/_services/alert.service';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { UserDataservice } from 'src/app/shared/services/CorparateServices/UserData.service';

@Component({
    selector: 'app-product-tabs',
    templateUrl: './product-tabs.component.html',
    styleUrls: ['./product-tabs.component.scss'],
    providers:[ProductService]
})
export class ProductTabsComponent implements OnInit {

    Rating:any =5;
    ReviewText:any;
    @Input() withSidebar = false;
    @Input() tab: 'description'|'specification'|'reviews' = 'description';
    @Input() productid = 1;
    src="https://www.gigabyte.com/Graphics-Card/GV-N2070WF3-8GC#kf";

    SupplierWarranties:any[];
    ProductReviews:any[];
    specification: ProductSpecificationsGroups[];// = specification;
    reviews: ProductReview[] = reviews;

    constructor(private service:ProductService
        ,private itemservice:ProductService
        ,private alertservice:AlertService
        ,private config:GlobalParams
        ,private UserServie:UserDataservice) { }


    ngOnInit(): void {
       this.LoadSpecificationForGivenProduct();
       this.GetSupplierWarranty(this.productid, 1004) 
       this.GetReviewsForgivenProduct(this.productid);
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

    GetReviewsForgivenProduct(ProductId:any){
        this.itemservice.GetReviewsForgivenProduct(ProductId).subscribe(
            data=>{
                console.log("GetReviewsForgivenProduct " , data);
                this.ProductReviews = data;
            }
        )
    }

    GetSupplierWarranty(ProductId:any,SupplierID:any){
        this.itemservice.GetSupplierWarranty(ProductId,SupplierID).subscribe(
            data=>{
                console.log("GetSupplierWarranty " , data);
                this.SupplierWarranties = data;
            }
        )
    }

    AddReviews(){
        console.log("AddReviews Ratings: " , this.Rating , " ReviewText " , this.ReviewText)
        var obj ={
            "Id":1,
            "ItemId":this.productid,
            "UserId":this.UserServie.GetUserId(),
            "IsAnon":false,
            "Caption":this.ReviewText,
            "Pros":"",
            "Cons":"",
            "BottomLine":"",
            "Rating":this.Rating,
            "Datetime":new Date(),
            "NoOfLikes":1,
            "NoOfDislikes":1,
            "IpAddress":"",
            "CreatedBy":this.UserServie.GetUserId(),
            "ModifiedBy":this.UserServie.GetUserId(),
            "CreatedWhen":new Date(),
            "ModifiedWhen":new Date()


        }
        this.itemservice.SaveProductReview(obj).subscribe(
            data=>{
                this.alertservice.success("Review Added successfully")
            }
        )
    }

    Change_rating(event:any){
        this.Rating = event
        console.log("Change_rating Ratings: " , event)

    }

}


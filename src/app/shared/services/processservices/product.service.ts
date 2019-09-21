import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/_models/user.models';
import { HttpClient } from '@angular/common/http';
import { GlobalParams } from '../CorparateServices/globalparams.service';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable()
export class ProductService {

    constructor(private http:HttpClient, private config:GlobalParams) {

    }

    GetSpecificationForGivenProduct(id:number):Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Items/GetSpecificationForGivenProduct?ProductId="+ id.toString())
        return val;
    }

    GetSpecGroupingLevel3(id:number):Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Items/GetSpecGroupingLevel3?Level3Id="+ id.toString())
        return val;
    }
   
    GetSupplierProducts(id:number):Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Items/GetSupplierProducts?ProductId="+ id.toString())
        return val;
    }

    GetSupplierWarranty(ProductId:any,SupplierID:any):Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Items/GetSupplierWarranty?ProductId="+ProductId+"&SupplierID="+SupplierID)
        return val;
    }

    SaveProductReview(Review:any):Observable<any> {
        console.log("Review ", Review)
        var val =  this.http.post<any>(this.config.PrimaryAPI + "Items/SaveProductReview",Review)
        return val;
    }

    GetReviewsForgivenProduct(id:number):Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Items/GetReviewsForgivenProduct?ProductId="+ id.toString())
        return val;
    }
}
import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/_models/user.models';
import { HttpClient } from '@angular/common/http';
import { GlobalParams } from '../CorparateServices/globalparams.service';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable()
export class MainPageService {

    constructor(private http:HttpClient, private config:GlobalParams) {

    }

    GetFeatureProducts():Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "MainPage/GetFeatureProducts")
        return val;
    }
    GetBestSellProducts():Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "MainPage/GetBestSellProducts")
        return val;
    }
    GetNewArrivales():Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "MainPage/GetNewArrivalProduct")
        return val;
    }

    GetSingleProduct(Id:number):Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "MainPage/GetSingleProduct?id=" + Id)
        return val;
    }
    GetNavigationLink():Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "MainPage/GetNavigationLink")
        return val;
    }
 
}
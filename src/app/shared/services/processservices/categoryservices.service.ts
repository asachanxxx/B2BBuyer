import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/_models/user.models';
import { HttpClient } from '@angular/common/http';
import { GlobalParams } from '../CorparateServices/globalparams.service';
import { Observable } from 'rxjs';


@Injectable()
export class CategoryService {

    constructor(private http:HttpClient, private config:GlobalParams) {

    }

    GetAllSubCategoriesForMegaView(id: number):Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Category/GetAllSubCategoriesForMegaView?categoryId=" + id )
        return val;
    }

}
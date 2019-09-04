import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalParams } from '../CorparateServices/globalparams.service';
import { Observable } from 'rxjs';
import { OrgUserFullVM, UserVM } from '../../models/OrganizationVM.model';



@Injectable()
export class CorparateService {

    constructor(private http:HttpClient, private config:GlobalParams) {

    }

    GetAllDistricts():Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Corparate/GetAllDistricts")
        return val;
    }

    GetAllCities(id:number):Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Corparate/GetAllCities?Did="+ id.toString())
        return val;
    }

    GetAllBussinessTypes():Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Corparate/GetAllBussinessTypes")
        return val;
    }

    GetAllOrgs():Observable<any> {
        var val =  this.http.get<any>(this.config.PrimaryAPI + "Corparate/GetAllOrganisaztions")
        return val;
    }


    CreateBuyerWithOrganisation(obj: OrgUserFullVM): Observable<number> {
        return this.http.post<number>(this.config.PrimaryAPI + '/api/Account/CreateBuyerWithOrganisation', obj)
    }

    CreateUserOnly(obj: UserVM): Observable<number> {
        return this.http.post<number>(this.config.PrimaryAPI + '/api/Account/CreateUserOnly', obj)
    }

    SubscribeUser(obj: string): Observable<any> {
        return this.http.get<any>(this.config.PrimaryAPI + "/Corparate/SubscribeUser?UserId="+ obj)
    }

    CheckUserActiveStatus(obj: string): Observable<number> {
        return this.http.get<number>(this.config.PrimaryAPI + "/Corparate/CheckUserActiveStatus?UserId="+ obj)
    }

    ActivateUserExternal(obj: string): Observable<number> {
        return this.http.get<number>(this.config.PrimaryAPI + "/Corparate/ActivateUserExternal?UserId="+ obj)
    }
   
}
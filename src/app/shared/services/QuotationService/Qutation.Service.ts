import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/_models/user.models';
import { HttpClient } from '@angular/common/http';
import { GlobalParams } from '../CorparateServices/globalparams.service';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable()
export class QuotationService {

    constructor(private http: HttpClient, private config: GlobalParams) {

    }


    SaveQuotation(obj: any): Observable<number> {
        return this.http.post<any>(this.config.PrimaryAPI + "Quotation/SaveQuotation", obj)
    }

    GetQuotationMasters(obj: any): Observable<any> {
        return this.http.get<any>(this.config.PrimaryAPI + "Quotation/GetQuotationMasters?OrgId=" + obj );
    }
    GetQuotationDetails(obj: any): Observable<any> {
        return this.http.get<any>(this.config.PrimaryAPI + "Quotation/GetQuotationDetails?QuoteId=" + obj);
    }
    GetQuotationWarranty(ProductId: any ,DocumentId: any ): Observable<any> {
        return this.http.get<any>(this.config.PrimaryAPI + "Quotation/GetQuotationWarranty?ProductId=" + ProductId +"&DocumentId=" + DocumentId);
    }

}
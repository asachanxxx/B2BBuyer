import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { QuotationService } from 'src/app/shared/services/QuotationService/Qutation.Service';
import { UserDataservice } from 'src/app/shared/services/CorparateServices/UserData.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-po-requests',
  templateUrl: './po-requests.component.html',
  styleUrls: ['./po-requests.component.sass'],
  providers: [QuotationService]
})
export class PoRequestsComponent implements OnInit {

  AllQuotationDetails: any[]
  AllQuotationWarrantyDetails: any[]

  constructor(
    public config: GlobalParams,
    public Qservice: QuotationService,
    public UserData: UserDataservice,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      parammap => {
        var params = parammap.get("id");
        console.log("this.AllQuotations  ngOnInit", params)
        this.GetQuotationDetails(params);
        this.GetQuotationWarrantyDetails(43,1);
      }
    )
  }

  GetQuotationWarrantyDetails(productId: any , documentid:any) {

    this.Qservice.GetQuotationWarranty(productId,documentid).subscribe(
      data => {
        this.AllQuotationWarrantyDetails = []
        this.AllQuotationWarrantyDetails = data;
        console.log("this.AllQuotations  ", this.AllQuotationWarrantyDetails)
      }
    )
  }


  GetQuotationDetails(QuotationId: any) {

    this.Qservice.GetQuotationDetails(QuotationId).subscribe(
      data => {
        this.AllQuotationDetails = []
        this.AllQuotationDetails = data;
        console.log("this.AllQuotations  ", this.AllQuotationDetails)
      }
    )
  }

}

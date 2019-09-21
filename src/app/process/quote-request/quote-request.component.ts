import { Component, OnInit, TemplateRef } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { QuotationService } from 'src/app/shared/services/QuotationService/Qutation.Service';
import { UserDataservice } from 'src/app/shared/services/CorparateServices/UserData.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.scss'],
  providers: [QuotationService]
})

export class QuoteRequestComponent implements OnInit {


  AllQuotations: any[]
 
  selectedRow: any
  modalRef: BsModalRef;
  constructor(
    public config: GlobalParams,
    public Qservice: QuotationService,
    public UserData: UserDataservice,
    private modalService: BsModalService,
    private router: Router
  ) { }

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template ,Object.assign({}, { class: 'gray modal-lg' }));
  }

  ngOnInit() {
    this.GetQuotationMasters();
  }

  GetQuotationMasters() {
    this.Qservice.GetQuotationMasters(this.UserData.GetOrganizationId()).subscribe(
      data => {
        this.AllQuotations = data;
        console.log("this.AllQuotations  ", this.AllQuotations)
      }
    )
  }

 

  selected_QuotationsDetails(item){
    console.log("selected_QuotationsDetails  ", item)
  }

  selected_Quotations(item: any) {
    console.log("selected_Quotations  ", item)
    this.selectedRow = item;
  }


  check_info(item,template: TemplateRef<any>) {

   
    this.router.navigate(["classic/process/qdetails", item.Id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
    //this.modalRef = this.modalService.show(template);
   // console.log("check_info  ", item)
    
  }

}

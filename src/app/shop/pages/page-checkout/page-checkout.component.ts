import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { UserDataservice } from 'src/app/shared/services/CorparateServices/UserData.service';
import { QuotationService } from 'src/app/shared/services/QuotationService/Qutation.Service';

@Component({
    selector: 'app-checkout',
    templateUrl: './page-checkout.component.html',
    styleUrls: ['./page-checkout.component.scss'],
    providers:[QuotationService]
})
export class PageCheckoutComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();

    loginForm: FormGroup;
    items:any[];
    OrganisationName: any;
    LoggedUserIDInteger: any;
    OrganizationId: any;
    UserId: any;
    UserName: any;

    constructor(
        public cart: CartService,
        private route: ActivatedRoute,
        private router: Router, private formbuiler: FormBuilder,
        private alertservice: ToastrService,
        private config: GlobalParams,
        private UserData: UserDataservice,
        private Qservice: QuotationService
    ) { }

    ngOnInit(): void {

        console.log("this.UserData.GetOrganizationId()" , this.UserData.GetOrganizationId())
        this.cart.quantity$.pipe(takeUntil(this.destroy$)).subscribe(quantity => {
            if (!quantity) {
                this.router.navigate(['../cart'], { relativeTo: this.route }).then();
            }
        });
        this.CreateForm();

        this.cart.items$.subscribe(
            data=>{
                console.log("PageCheckoutComponent this.cart.items$", data)
                this.items = data;
            }
        )

       

        this.setVariables();
    }


    setVariables() {
        this.OrganisationName = this.UserData.GetOrganizationName();
        this.LoggedUserIDInteger = this.UserData.GetLoggedUserIDInteger();
        this.OrganizationId = this.UserData.GetOrganizationId();
        this.UserId = this.UserData.GetUserId();
        this.UserName = this.UserData.GetUserName();

    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }


    CreateForm() {

        this.loginForm = this.formbuiler.group({
            Qnumber: ['', Validators.required],

        })
    }
    SaveQutation(){
        console.log("SaveQutation " ,this.UserData.GetUserId());

        var obj = {
            "QuotationMaster": {
              "Id": 1,
              "QNumber": "SAM0092883",
              "CustomerId":this.UserData.GetUserId(),
              "Subtotal": 0,
              "ShippingCharges": 0.0,
              "Tax": 0.0,
              "Additions": 0.0,
              "Deductions": 0.0,
              "NetTotal": 0.0,
              "Date": new Date(),
              "Status": 1,
              "IpAddress": " ",
              "CreatedBy": this.UserData.GetUserId(),
              "ModifiedBy": this.UserData.GetUserId(),
              "CreatedWhen": new Date(),
              "ModifiedWhen": new Date(),
              "SupplierId":0,
              "Remarks":"Newly Created",
              "OrgId":this.UserData.GetOrganizationId()
            },
            "QuotationDetails": this.items.map(
                (itemx)=>(
                    {
                    "Id":-1,
                    "QHId":-1,
                    "ProductId":itemx.product.id,
                    "Price":itemx.product.price,
                    "Quantity":itemx.quantity,
                    "Additions":0,
                    "Deductions":0,
                    "Total":(itemx.quantity *itemx.product.price) ,
                    "Status":1,
                    "IpAddress": "-",
                    "CreatedBy": this.UserData.GetUserId(),
                    "ModifiedBy": this.UserData.GetUserId(),
                    "CreatedWhen": new Date(),
                    "ModifiedWhen": new Date(),
                    "SupplierId":itemx.product.SupplierID,
                    "Remarks":"Newly Created",
                    "DeliveryDate":new Date()

                }
                )
            )
          }
   

        //   console.log("Obj 1" , obj)
        //   console.log("Obj 2" , obj2 , this.items)



          this.Qservice.SaveQuotation(obj).subscribe(
              data=>{
                this.cart.ClearCart();
                this.alertservice.info("Quotation Saved OK" , this.config.MessageCaption);
              },
              err=>{
                console.log("Quotation Save " , err);
                this.alertservice.error("Quotation Saved Error" , this.config.MessageCaption);
              }
          )
    }


}

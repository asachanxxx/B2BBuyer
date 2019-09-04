import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CorparateService } from 'src/app/shared/services/CorparateServices/CorparateService.Service';
import { OrgUserFullVM, Organization, UserVM } from 'src/app/shared/models/OrganizationVM.model';
import { User } from '../_models/user.models';
import { Router } from '@angular/router';
import { UserObject } from '../_models/DataForTocken.model';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-page-newprofile',
  templateUrl: './page-newprofile.component.html',
  styleUrls: ['./page-newprofile.component.scss'],
  providers: [CorparateService]
})
export class PageNewprofileComponent implements OnInit {

  OrganizationAddPanel: boolean = true;
  OrganizationSelectPanel: boolean = false;
  selectedOrg: any;

  loginForm: FormGroup;
  loginFormUser: FormGroup;

  loadedBtypes: any[];
  loadedDistricts: any[];
  loadedCities: any[];
  loadedOrgs: any[];

  OrgSave: OrgUserFullVM;
  submitted = false;



  constructor(private formbuiler: FormBuilder,
    private alertservice: ToastrService,
    private corprepository: CorparateService, private route: Router, private config: GlobalParams) { }

  ngOnInit() {
    this.CreateForm();
    this.LoadBusinessType();
    this.LoadDistrict();
    this.LoadOrgst();
  }

  LoadOrgst() {
    this.corprepository.GetAllOrgs().subscribe(
      data => {
        this.loadedOrgs = data;
        if (this.loadedOrgs.length <= 0) {
          this.loadedOrgs = [];
          this.loadedOrgs.push({ "Id": "1", "Name": "No Items" })
        }
        console.log("loadedOrgs ", this.loadedOrgs);
      }, err => {
        console.log("loadedOrgs ", err);
      }

    )
  }



  LoadCity(id: number) {
    this.corprepository.GetAllCities(id).subscribe(
      data => {
        this.loadedCities = data;
        if (this.loadedCities.length <= 0) {
          this.loadedCities = [];
          this.loadedCities.push({ "Id": "1", "Name": "No Items" })
        }
        console.log("LoadDistrict ", this.loadedCities);
      }, err => {
        console.log("LoadDistrict ", err);
      }

    )
  }
  LoadDistrict() {
    this.corprepository.GetAllDistricts().subscribe(
      data => {
        this.loadedDistricts = data;
        if (this.loadedDistricts.length <= 0) {
          this.loadedDistricts = [];
          this.loadedDistricts.push({ "Id": "1", "Name": "No Items" })
        }
        console.log("LoadDistrict ", this.loadedDistricts);
      }, err => {
        console.log("LoadDistrict ", err);
      }

    )
  }
  LoadBusinessType() {
    this.corprepository.GetAllBussinessTypes().subscribe(
      data => {
        this.loadedBtypes = data;
        if (this.loadedBtypes.length <= 0) {
          this.loadedBtypes = [];
          this.loadedBtypes.push({ "Id": "1", "Name": "No Items" })
        }
        console.log("LoadBusinessType ", this.loadedBtypes.length);
      }, err => {
        console.log("LoadBusinessType ", err);
      }

    )
  }

  onChange_District(event: any) {
    this.LoadCity(event);
    console.log("onChange_District", event)
  }

  onChange_RegOrganizeation(event: any) {

    this.SetOrganisationalStatus(true);
  }

  onChange_ExistingOrganization(event: any) {
    this.SetOrganisationalStatus(false);
  }


  SetOrganisationalStatus(add: boolean) {
    if (add) {
      this.OrganizationAddPanel = true;
      this.OrganizationSelectPanel = false;
    } else {
      this.OrganizationAddPanel = false;
      this.OrganizationSelectPanel = true;
    }

    console.log("selectedOrg :", this.selectedOrg)
  }

  get f() { return this.loginForm.controls; }
  get f2() { return this.loginFormUser.controls; }

  CreateForm() {

    let phoneNumber = "^(?=(?:\D*\d){10,15}\D*$)\+?[0-9]{1,3}[\s-]?(?:\(0?[0-9]{1,5}\)|[0-9]{1,5})[-\s]?[0-9][\d\s-]{5,7}\s?(?:x[\d-]{0,4})?$";

    this.loginForm = this.formbuiler.group({
     // phone: ['', [Validators.required, Validators.maxLength(10)]],
      Email: ['', Validators.required],
      btype: ['', [Validators.required]],
      orgname: ['', [Validators.required]],
      Address1: ['', [Validators.required]],
      Address2: ['', [Validators.required]],
      District: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Res_Person: ['', [Validators.required]],
      Res_Person_email: ['', [Validators.required]],
    })

    this.loginFormUser = this.formbuiler.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      uname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      psw: ['', [Validators.required]],
      cpsw: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      address3: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      Jtitle: ['', [Validators.required]],

    })
  }


  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

  InitializeAddObjects(): OrgUserFullVM {
    let saveobj: OrgUserFullVM = {
      OrganisazionDet: {
        Id: 1,
        BusinessType: this.loginForm.controls["btype"].value,
        OrganizationName: this.loginForm.controls["orgname"].value,
        MainPhone: "-",
        AddressLine1: this.loginForm.controls["Address1"].value,
        AddressLine2: this.loginForm.controls["Address2"].value,
        District: this.loginForm.controls["District"].value,
        City: this.loginForm.controls["City"].value,
        Email: this.loginForm.controls["Email"].value,
        FRPerson: this.loginForm.controls["Res_Person"].value,
        FRPEmail: this.loginForm.controls["Res_Person_email"].value,
        SRPerson: "-",
        SRPEmail: "-",
        HandlerName: "-",
        HandlerEmail: "-",
        IsSeller: false,
        IpAddress: "-",
        CreatedBy: "-",
        ModifiedBy: "-",
        CreatedWhen: new Date(),
        ModifiedWhen: new Date()
      },
      UserDet: {
        Id: 1,
        UserId: "",
        UserName: this.loginFormUser.controls["uname"].value,
        Password: this.loginFormUser.controls["psw"].value,
        DisplayName: this.loginFormUser.controls["uname"].value,
        Email: this.loginFormUser.controls["email"].value,
        Phone: this.loginFormUser.controls["phone"].value,
        Address1: this.loginFormUser.controls["address1"].value,
        Address2: this.loginFormUser.controls["address2"].value,
        Address3: this.loginFormUser.controls["address3"].value,
        FirstName: this.loginFormUser.controls["fname"].value,
        LastName: this.loginFormUser.controls["lname"].value,
        JobTitle: "-",
        TypeId: 14,
        Activated: true,
        Approved: true,
        OrganizationID: 17,
        GroupId: 18,
        IsSupperUser: true,
        IpAddress: "-",
        CreatedBy: "-",
        ModifiedBy: "-",
        CreatedWhen: new Date(),
        ModifiedWhen: new Date()
      }
    }
    return saveobj;
  }


  InitializeModifyObjects(): UserVM {
    let saveobj: UserVM = {
      Id: 1,
      UserId: "",
      UserName: this.loginFormUser.controls["uname"].value,
      Password: this.loginFormUser.controls["psw"].value,
      DisplayName: this.loginFormUser.controls["uname"].value,
      Email: this.loginFormUser.controls["email"].value,
      Phone: this.loginFormUser.controls["phone"].value,
      Address1: this.loginFormUser.controls["address1"].value,
      Address2: this.loginFormUser.controls["address2"].value,
      Address3: this.loginFormUser.controls["address3"].value,
      FirstName: this.loginFormUser.controls["fname"].value,
      LastName: this.loginFormUser.controls["lname"].value,
      JobTitle: "-",
      TypeId: 14,
      Activated: true,
      Approved: true,
      OrganizationID: 17,
      GroupId: 18,
      IsSupperUser: true,
      IpAddress: "-",
      CreatedBy: "-",
      ModifiedBy: "-",
      CreatedWhen: new Date(),
      ModifiedWhen: new Date()
    }

    return saveobj;
  }

  onChange_opn_organisationSelect(value) {
    console.log("onChange_opn_organisationSelect :", value)
    this.selectedOrg = value;
  }

  onSubmit() {

    console.log("Form1 :", this.loginForm.valid)
    console.log("Form2 :", this.loginFormUser.valid)
    this.submitted = true;




    if (this.OrganizationAddPanel) {

      if (this.loginForm.invalid) {
        this.alertservice.error("The Organization Data you have filled is invalied or empty!", this.config.MessageCaption);
        return;
      }
      if (this.loginFormUser.invalid) {
        this.alertservice.error("The User Data you have filled is invalied or empty!", this.config.MessageCaption);
        return;
      }
      let saveobj = this.InitializeAddObjects();
      this.corprepository.CreateBuyerWithOrganisation(saveobj).subscribe(
        data => {
          console.log("Saved SuccessFull", data)
          this.route.navigate(['./classic/auth/newprofile-confirm'])
        },
        error => {
          if (error.status == 0) {
            this.alertservice.error("Login Service not accessible at this moment. Please contact administrators of the site!.", this.config.MessageCaption)
          } else if (error.status == 400) {
            this.alertservice.error("UserName Or Password Not valied . Please try again later!.", this.config.MessageCaption)
          } else if (error.status == 500) {
            this.alertservice.error(error.error.ExceptionMessage, this.config.MessageCaption)
          }
          else {
            this.alertservice.error("Unknown error has occured when trying to create user. Please contact our technical team to futher assists you..", this.config.MessageCaption)
          }
          console.log("Saved not SuccessFull", error)
        }
      )
    } else {
      if (this.loginFormUser.invalid) {
        this.alertservice.error("The Data you have filled is invalied or empty!", this.config.MessageCaption);
        return;
      }
      console.log("Add user to existing Org")
      if (this.selectedOrg === undefined) {
        this.alertservice.error("Please select a organization to add the user", this.config.MessageCaption);
        return;
      }
      let modifyobj = this.InitializeModifyObjects();
      modifyobj.OrganizationID = this.selectedOrg;
      this.corprepository.CreateUserOnly(modifyobj).subscribe(
        data => {
          console.log("Saved SuccessFull", data)
          this.route.navigate(['./classic/auth/newprofile-confirm'])
        },
        error => {
          if (error.status == 0) {
            this.alertservice.error("Login Service not accessible at this moment. Please contact administrators of the site!.", this.config.MessageCaption)
          } else if (error.status == 400) {
            this.alertservice.error("UserName Or Password Not valied . Please try again later!.", this.config.MessageCaption)
          } else if (error.status == 500) {
            this.alertservice.error(error.error.ExceptionMessage, this.config.MessageCaption)
          }
          else {
            this.alertservice.error("Unknown error has occured when trying to create user. Please contact our technical team to futher assists you..", this.config.MessageCaption)
          }
          console.log("Saved not SuccessFull", error)
        }
      )
    }
  }


}

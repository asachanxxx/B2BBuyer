import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CorparateService } from 'src/app/shared/services/CorparateServices/CorparateService.Service';
import { Router } from '@angular/router';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-page-password-reset',
  templateUrl: './page-password-reset.component.html',
  styleUrls: ['./page-password-reset.component.sass'],
  providers:[CorparateService]
})
export class PagePasswordResetComponent implements OnInit {
  submitted:any
  constructor(private formbuiler: FormBuilder,
    private alertservice: ToastrService,
    private corprepository: CorparateService, private route: Router, private config: GlobalParams) { }

  ngOnInit() {
    this.CreateForm();
  }

  get f() { return this.loginForm.controls; }
  loginForm: FormGroup;
  
  CreateForm() {

    let phoneNumber = "^(?=(?:\D*\d){10,15}\D*$)\+?[0-9]{1,3}[\s-]?(?:\(0?[0-9]{1,5}\)|[0-9]{1,5})[-\s]?[0-9][\d\s-]{5,7}\s?(?:x[\d-]{0,4})?$";

    this.loginForm = this.formbuiler.group({
      oldpsw: ['', [Validators.required, Validators.maxLength(10)]],
      newpsw: ['', Validators.required],
      conpsw: ['', [Validators.required]],
    })

  
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-forgetpassword',
  templateUrl: './page-forgetpassword.component.html',
  styleUrls: ['./page-forgetpassword.component.sass']
})
export class PageForgetpasswordComponent implements OnInit {

  submitted:any

  constructor() { }
  
  loginForm: FormGroup;
  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }

  onSubmit(){
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-newprofile-confirm',
  templateUrl: './page-newprofile-confirm.component.html',
  styleUrls: ['./page-newprofile-confirm.component.sass']
})
export class PageNewprofileConfirmComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.route.navigate(['./'])

  }
}

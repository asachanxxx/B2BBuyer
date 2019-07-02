import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private authservice:AuthenticationService,private route:Router) { }

  ngOnInit() {
  }


  Logout(){
      this.authservice.logoutDummy();
      this.route.navigate(['/home'])
  }
}

import { Component } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {

    constructor(
        private global:GlobalParams,
        private authservice:AuthenticationService,
        private route:Router
        ) { }



    create_new_account(){

        
    }

    Login(){

        this.authservice.loginDummy();
        console.log("this.global.LoggedUserProfile inside login :" ,this.global.LoggedUserProfile)
        this.route.navigate(['/home'])

    }
}

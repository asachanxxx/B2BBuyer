import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Toast, ToastrService } from 'ngx-toastr';
import { DataForTocken } from '../_models/DataForTocken.model';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


    constructor(
        private config: GlobalParams,
        private authenticationService: AuthenticationService,
        private route: Router,
        private actroute: ActivatedRoute,
        private formbuiler: FormBuilder,
        private alertservice: ToastrService
    ) { }

    CreateForm() {
        this.loginForm = this.formbuiler.group({
            username: ['', [Validators.required]],
            password: ['', Validators.required]
        })
    }


    ngOnInit() {
        this.CreateForm();
        this.returnUrl = this.actroute.snapshot.queryParams['returnUrl'] || '/';
        console.log("returnUrl", this.returnUrl)
    }

    get f() { return this.loginForm.controls; }


    create_new_account() {

    }

    onSubmit() {
        this.loading = true;
        if (this.config.SystemMode == 1) {
            this.alertservice.error("System configured to used in Dummy Mode. No real transaction will take place..")
            this.authenticationService.loginDummy();
            console.log("this.global.LoggedUserProfile inside login :", this.config.LoggedUserProfile)
            this.route.navigate(['/home'])
        } else if (this.config.SystemMode == 3) {
            this.submitted = true;
            // stop here if form is invalid
            if (this.loginForm.invalid) {
                this.alertservice.error("UserName or password invalied!")
                return;
            }
            //creating data object to pass
            let tdata: DataForTocken = new DataForTocken();
            tdata.username = this.f.username.value;
            tdata.password = this.f.password.value;

            this.authenticationService.login(tdata)
                .pipe(first())
                .subscribe(
                    data => {
                        localStorage.setItem('APIKey', data.access_token);
                        console.log("localStorage.getItem(APIKey)", localStorage.getItem("APIKey"))
                        this.authenticationService.getUserInfo(tdata).subscribe(
                            userdata => {
                                console.log("userdata", userdata);
                                localStorage.setItem('UserId', userdata.Id);
                                localStorage.setItem('CurrentUserName', userdata.UserName);
                                this.route.navigate(["account/dashboard"]);
                            }
                            ,
                            error => {
                                this.alertservice.error(error.error.error_description)
                            }
                        );
                    },
                    error => {
                    })

           

           
            
            //doing other login related stuff


        }
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Toast, ToastrService } from 'ngx-toastr';
import { DataForTocken } from '../_models/DataForTocken.model';
import { forkJoin } from 'rxjs';
import { CorparateService } from 'src/app/shared/services/CorparateServices/CorparateService.Service';

@Component({
    selector: 'app-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss'],
    providers: [CorparateService]
})
export class PageLoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    subcribed: boolean;

    constructor(
        private config: GlobalParams,
        private authenticationService: AuthenticationService,
        private route: Router,
        private actroute: ActivatedRoute,
        private formbuiler: FormBuilder,
        private alertservice: ToastrService, private corpservice: CorparateService
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




    CheckSubscribe($event) {
        this.subcribed = $event.target.checked
        console.log("CheckSubscribe", this.subcribed)
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

            //check if user activate before log in


            this.authenticationService.login(tdata)
                .pipe(first())
                .subscribe(
                    data => {
                        localStorage.setItem('APIKey', data.access_token);
                        console.log("localStorage.getItem(APIKey)", localStorage.getItem("APIKey"))
                        this.authenticationService.getUserInfo(tdata).subscribe(
                            userdata => {
                                this.corpservice.CheckUserActiveStatus(userdata.Id).subscribe(
                                    data => {
                                        if (data == 1) {
                                            console.log("userdata", userdata);
                                            localStorage.setItem('UserId', userdata.Id);
                                            localStorage.setItem('CurrentUserName', userdata.UserName);

                                            if (this.subcribed) {
                                                this.corpservice.SubscribeUser(userdata.Id).subscribe(
                                                    data => {
                                                        console.log("User Subscribe to news latters");
                                                        this.route.navigate(["account/dashboard"]);
                                                    }
                                                )
                                            } else {
                                                this.route.navigate(["account/dashboard"]);
                                            }
                                        } else if (data == 2) {
                                            this.alertservice.error("User you are trying to log in is not activated yet. contact your corparate administrator(Supper User) to activate you!", this.config.MessageCaption);
                                        } else {
                                            this.alertservice.error("UserName Or Password Not valied . Please try again later!.", this.config.MessageCaption);
                                        }
                                    },
                                    error => {
                                        if (error.status == 0) {
                                            this.alertservice.error("Login Service not accessible at this moment. Please contact administrators of the site!.", this.config.MessageCaption)
                                        }
                                    }
                                )
                            },
                            error => {
                                this.alertservice.error(error.error.error_description)
                            }
                        );
                    },
                    error => {
                        if (error.status == 0) {
                            this.alertservice.error("Login Service not accessible at this moment. Please contact administrators of the site!.", this.config.MessageCaption)
                        }
                        if (error.status == 400) {
                            this.alertservice.error("UserName Or Password Not valied . Please try again later!.", this.config.MessageCaption)
                        }

                        console.log(" error XXXX", error);
                    })

        }
    }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNewprofileComponent } from './page-newprofile/page-newprofile.component';
import { PageNewprofileConfirmComponent } from './page-newprofile-confirm/page-newprofile-confirm.component';
import { PageForgetpasswordComponent } from './page-forgetpassword/page-forgetpassword.component';
import { PagePasswordResetComponent } from './page-password-reset/page-password-reset.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: PageLoginComponent
    },
    {
        path: 'newprofile',
        component: PageNewprofileComponent
    },
    {
        path: 'newprofile-confirm',
        component: PageNewprofileConfirmComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'forgetpassword',
        component: PageForgetpasswordComponent
    },
    {
        path: 'passwordreset',
        component: PagePasswordResetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthMRoutingModule { }


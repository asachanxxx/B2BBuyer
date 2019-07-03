import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { LogoutComponent } from './logout/logout.component';

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
        path: 'profile',
        component: PageProfileComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthMRoutingModule { }
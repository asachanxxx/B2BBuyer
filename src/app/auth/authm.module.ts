import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthMRoutingModule } from './authm.routing.module';
import { AlertsComponent_My } from './alerts/alerts.component';
import { HeaderModule } from '../modules/header/header.module';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../modules/widgets/widgets.module';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShopModule } from '../shop/shop.module';
import { PageNewprofileComponent } from './page-newprofile/page-newprofile.component';
import { PageNewprofileConfirmComponent } from './page-newprofile-confirm/page-newprofile-confirm.component';
import { PageForgetpasswordComponent } from './page-forgetpassword/page-forgetpassword.component';
import { PagePasswordResetComponent } from './page-password-reset/page-password-reset.component';
import { ActivateUserExternalComponent } from './activate-user-external/activate-user-external.component';

@NgModule({
  declarations: [
    PageLoginComponent,
    AlertsComponent_My,
    LogoutComponent,
    PageNewprofileComponent,
    PageNewprofileConfirmComponent,
    PageForgetpasswordComponent,
    PagePasswordResetComponent,
    ActivateUserExternalComponent
  ],
  imports: [
    CommonModule,
    AuthMRoutingModule,
    HeaderModule,
     // modules
     SharedModule,
     WidgetsModule,
     ShopModule,
     ReactiveFormsModule,
     FormsModule       

  ]
})
export class AuthmModule { }

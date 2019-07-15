import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthMRoutingModule } from './authm.routing.module';
import { AlertsComponent_My } from './alerts/alerts.component';
import { HeaderModule } from '../modules/header/header.module';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../modules/widgets/widgets.module';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopModule } from '../shop/shop.module';

@NgModule({
  declarations: [
    PageLoginComponent,
    AlertsComponent_My,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthMRoutingModule,
    HeaderModule,
     // modules
     SharedModule,
     WidgetsModule,
     ShopModule,
     ReactiveFormsModule 

  ]
})
export class AuthmModule { }

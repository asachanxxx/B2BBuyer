import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthMRoutingModule } from './authm.routing.module';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { AlertsComponent_My } from './alerts/alerts.component';
import { HeaderModule } from '../modules/header/header.module';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../modules/widgets/widgets.module';
import { ShopModule } from '../modules/shop/shop.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    PageLoginComponent,
    AlertsComponent_My,
    PageProfileComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthMRoutingModule,
    HeaderModule,
     // modules
     SharedModule,
     WidgetsModule,
     ShopModule

  ]
})
export class AuthmModule { }

import { /*LOCALE_ID, */NgModule } from '@angular/core';
// import { registerLocaleData } from '@angular/common';
// import localeIt from '@angular/common/locales/it';
//
// registerLocaleData(localeIt, 'it');

// modules (angular)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';

// modules
import { AppRoutingModule } from './app-routing.module';
import { BlocksModule } from './modules/blocks/blocks.module';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { MobileModule } from './modules/mobile/mobile.module';
import { SharedModule } from './shared/shared.module';
import { WidgetsModule } from './modules/widgets/widgets.module';

// components
import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';

// pages
import { PageHomeOneComponent } from './pages/page-home-one/page-home-one.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeTwoComponent } from './pages/page-home-two/page-home-two.component';
import { GlobalParams } from './shared/services/CorparateServices/globalparams.service';
import { ProcessModule } from './process/process.module';
import { AuthmModule } from './auth/authm.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { AuthenticationService } from './auth/_services/authentication.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SafePipe } from './shared/pipes/SafePipe.pipe';
import { UserDataservice } from './shared/services/CorparateServices/UserData.service';



@NgModule({
    declarations: [
        // components
        AppComponent,
        RootComponent,
        // pages
        PageHomeOneComponent,
        PageNotFoundComponent,
        PageHomeTwoComponent
        
    ],
    imports: [
        // modules (angular)
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        // modules (third-party)
        CarouselModule,
        ToastrModule.forRoot(),
        // modules
        AppRoutingModule,
        BlocksModule,
        FooterModule,
        HeaderModule,
        MobileModule,
        SharedModule,
        WidgetsModule,
        ProcessModule,
        AuthmModule,
        HttpClientModule
    ],
    providers: [
        // { provide: LOCALE_ID, useValue: 'it' }
        GlobalParams,
        UserDataservice,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        AuthenticationService,
        {
            provide: 'externalUrlRedirectResolver',
            useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
            {
                window.location.href = (route.data as any).externalUrl;
            }
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

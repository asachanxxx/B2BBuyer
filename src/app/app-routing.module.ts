import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeOneComponent } from './pages/page-home-one/page-home-one.component';
import { PageHomeTwoComponent } from './pages/page-home-two/page-home-two.component';
import { RootComponent } from './components/root/root.component';

export function makeRoutes(homeComponent: Type<any>): Routes {
    return [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home'
        },
        {
            path: 'home',
            component: homeComponent
        },
        {
            path: 'blog',
            loadChildren: './modules/blog/blog.module#BlogModule'
        },
        {
            path: 'shop',
            loadChildren: './shop/shop.module#ShopModule'
        },
        {
            path: 'account',
            loadChildren: './process/account/account.module#AccountModule'
        },
        {
            path: 'site',
            loadChildren: './modules/site/site.module#SiteModule'
        },
        {
            path: 'process',
            loadChildren: './process/process.module#ProcessModule'
        },
        {
            path: 'auth',
            loadChildren: './auth/authm.module#AuthmModule'
        },
        {
            path: '**',
            component: PageNotFoundComponent
        },
        {
            path: 'test',
            component: PageNotFoundComponent,
            resolve: {
                url: 'externalUrlRedirectResolver'
            },
            data: {
                externalUrl: 'http://www.google.com'
            }
        }
        
    ];
}

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'classic'
    },
    {
        path: 'classic',
        component: RootComponent,
        data: {
            headerLayout: 'classic'
        },
        children: makeRoutes(PageHomeOneComponent)
    },
    {
        path: 'compact',
        component: RootComponent,
        data: {
            headerLayout: 'compact'
        },
        children: makeRoutes(PageHomeTwoComponent)
    },
    {
        path: '**',
        redirectTo: 'classic'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

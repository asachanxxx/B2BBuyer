import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/shared/services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class CheckoutGuard implements CanActivate  {
    constructor(
        private cart: CartService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.cart.quantity$.pipe(map(quantity => {
            if (quantity) {
                return true;
            }

            const parentUrl = state.url.slice(0, state.url.indexOf(route.url[route.url.length - 1].path));

            this.router.navigate([parentUrl, 'cart']).then();

            return false;
        }));
    }
}

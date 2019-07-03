import { Component } from '@angular/core';
import { CurrencyService } from '../../../../shared/services/currency.service';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { User } from 'src/app/auth/_models/user.models';

@Component({
    selector: 'app-header-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    languages = [
        { name: 'English', image: 'language-1' },
        { name: 'French', image: 'language-2' },
        { name: 'German', image: 'language-3' },
        { name: 'Russian', image: 'language-4' },
        { name: 'Italian', image: 'language-5' }
    ];

    currencies = [
        { name: '€ Euro', url: '', code: 'EUR', symbol: '€' },
        { name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£' },
        { name: '$ US Dollar', url: '', code: 'USD', symbol: '$' },
        { name: '₽ Russian Ruble', url: '', code: 'RUB', symbol: '₽' }
    ];

    constructor(
        public currencyService: CurrencyService,private config:GlobalParams
    ) { 

        console.log("getLoggedUser()   " , this.getLoggedUser())
    }

    getLoggedUser(){
        var userobj = localStorage.getItem('currentUserobj');
        if(userobj == undefined){
            return undefined;
        }else{
            return userobj;
        }
        
    }

    setCurrency(currency): void {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }

    HandleCurrencySwitch(): boolean {
        return this.config.CurrencyMenuSwitch;
    }

    HandleLangSwitch(): boolean {
        return this.config.LangMenuSwitch;
    }

    IsUserLogged(): boolean {
        if(this.config.LoggedUserProfile === undefined){
            return false;
        }else{
            return true;
        }
    }
    
    goToUrl(){
         
        window.open(this.config.SellerPortalPath);
    }
}

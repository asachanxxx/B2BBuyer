import { Injectable } from '@angular/core';
import { LoggedUserProfile } from '../../models/loggeduser.model';

@Injectable()
export class GlobalParams{

    
    private _BusinessShortName : string = "B2BBisinezer";
    public get BusinessShortName() : string {
        return this._BusinessShortName;
    }
    public set BusinessShortName(v : string) {
        this._BusinessShortName = v;
    }
    
    
    private _loggedUserProfile : LoggedUserProfile;
    public get LoggedUserProfile() : LoggedUserProfile {
        return this._loggedUserProfile;
    }
    public set LoggedUserProfile(v : LoggedUserProfile) {
        this._loggedUserProfile = v;
    }
    
    
    private _primaryAPI : string;
    public get PrimaryAPI() : string {
        return this._primaryAPI;
    }
    public set PrimaryAPI(v : string) {
        this._primaryAPI = v;
    }
    
    
    private _apiKey : string;
    public get ApiKey() : string {
        return this._apiKey;
    }
    public set ApiKey(v : string) {
        this._apiKey = v;
    }
    
    
    private _CurrencyMenuSwitch  : boolean;
    public get CurrencyMenuSwitch () : boolean {
        return this._CurrencyMenuSwitch ;
    }
    public set CurrencyMenuSwitch (v : boolean) {
        this._CurrencyMenuSwitch  = v;
    }
    
    
    private _LangMenuSwitch  : boolean;
    public get LangMenuSwitch () : boolean {
        return this._LangMenuSwitch ;
    }
    public set LangMenuSwitch (v : boolean) {
        this._LangMenuSwitch  = v;
    }
    
    
    private _secondaryMenuSwitch : boolean;
    public get secondaryMenuSwitch() : boolean {
        return this._secondaryMenuSwitch;
    }
    public set secondaryMenuSwitch(v : boolean) {
        this._secondaryMenuSwitch = v;
    }
    
    


}
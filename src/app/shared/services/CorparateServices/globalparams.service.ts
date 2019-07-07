import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/_models/user.models';

@Injectable()
export class GlobalParams{

    
    private _commingsoontext : string = "Hey Guys! This page will Come Soon..."
    public get commingsoontext() : string {
        return this._commingsoontext;
    }
    public set commingsoontext(v : string) {
        this._commingsoontext = v;
    }
    
    
    private _commingsooncontent : string = "This page is under construction and will be back soon. This is due to maintainance or we are adding some new features to the page. Sorry for any inconvenience";
    public get commingsooncontent() : string {
        return this._commingsooncontent;
    }
    public set commingsooncontent(v : string) {
        this._commingsooncontent = v;
    }
    
    
    ///1 = Dummy mode , 2= Test Mode , 3 = Production mode
    private _SystemMode : number = 1;
    public get SystemMode() : number {
        return this._SystemMode;
    }
    public set SystemMode(v : number) {
        this._SystemMode = v;
    }
        

    private _AdminPortalPath : string= "www.drive.google.com";
    public get AdminPortalPath() : string {
        return this._AdminPortalPath;
    }
    public set AdminPortalPath(v : string) {
        this._AdminPortalPath = v;
    }
    

    private _SellerPortalPath : string = "www.google.com";
    public get SellerPortalPath() : string {
        return this._SellerPortalPath;
    }
    public set SellerPortalPath(v : string) {
        this._SellerPortalPath = v;
    }
    

    
    private _BusinessShortName : string = "B2Bisinezer";
    public get BusinessShortName() : string {
        return this._BusinessShortName;
    }
    public set BusinessShortName(v : string) {
        this._BusinessShortName = v;
    }
    
    
    private _loggedUserProfile : User;
    public get LoggedUserProfile() : User {
        return this._loggedUserProfile;
    }
    public set LoggedUserProfile(v : User) {
        this._loggedUserProfile = v;
    }
    
    
    private _primaryAPI : string = "http://localhost:50965/";
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
    
    
    private _CurrencyMenuSwitch  : boolean = true;
    public get CurrencyMenuSwitch () : boolean {
        return this._CurrencyMenuSwitch ;
    }
    public set CurrencyMenuSwitch (v : boolean) {
        this._CurrencyMenuSwitch  = v;
    }
    
    
    private _LangMenuSwitch  : boolean = false;
    public get LangMenuSwitch () : boolean {
        return this._LangMenuSwitch ;
    }
    public set LangMenuSwitch (v : boolean) {
        this._LangMenuSwitch  = v;
    }
    
    
    private _secondaryMenuSwitch : boolean = true;
    public get secondaryMenuSwitch() : boolean {
        return this._secondaryMenuSwitch;
    }
    public set secondaryMenuSwitch(v : boolean) {
        this._secondaryMenuSwitch = v;
    }
    
    


}
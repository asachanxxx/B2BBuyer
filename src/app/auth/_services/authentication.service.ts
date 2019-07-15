import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpBackend } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { DataForTocken } from '../_models/DataForTocken.model';



@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    //we use httpClient just to ignore the intercepter for calling to get token. if token URL intercepted by intercepter it will add extra headers
    private httpClient: HttpClient;

    constructor(private http: HttpClient, public config: GlobalParams, private handler: HttpBackend) {
        this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('APIKey'));
        this.currentUser = this.currentUserSubject.asObservable();
        this.httpClient = new HttpClient(handler);
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    /*
    Login to the system using user name and password
    This will returns token object if user validates and store it in local storage
    */
    login(loginDetails: DataForTocken): Observable<any> {
        const body = new HttpParams()
            .set('grant_type', 'password')
            .set('username', loginDetails.username)
            .set('password', loginDetails.password)

        return this.httpClient.post<any>(this.config.PrimaryAPI + "owin/Token", body)
            .pipe(map(user => {
                this.currentUserSubject.next(user);
                return user;
            })
            );
    }

    /*
    This method will get the user information
    And it will save the user object in local storage.
    */
    getUserInfo(loginDetails: DataForTocken): Observable<any> {
        const body = new HttpParams()
        .set('username', loginDetails.username)
        .set('password', loginDetails.password)

        return this.http.get(this.config.PrimaryAPI + "/api/Account/FindUser", {params: body})
    }

    /*
    this method will refresh the token .if token not works then returns an error or redirect to the login page
    */
    checkTokenValidity() {
        return this.http.get(this.config.PrimaryAPI + "/api/Account/CheckToekn")
    }

    /*
    This method will log user out from the system. 
    */
    logout() {
        localStorage.removeItem('APIKey');
        localStorage.removeItem('CurrentUserName');
        localStorage.removeItem('UserId');
        this.currentUserSubject.next(null);
    }

    loginDummy() {
        this.config.LoggedUserProfile = { id: 1, token: this.config.ApiKey, username: "Asanga Chandrakumara" }
        localStorage.setItem('currentUserobj', JSON.stringify(this.config.LoggedUserProfile.username));
    }

    logoutDummy() {
        this.config.LoggedUserProfile = undefined;
        localStorage.removeItem('currentUserobj');
    }


    checkloginStatus():boolean{
        let anyvalue:boolean = true;
        if(localStorage.getItem("UserId") === null || localStorage.getItem("APIKey") === null  || localStorage.getItem("CurrentUserName") === null ){
            anyvalue = false;
        }
        return anyvalue;
    }
    
    GetApiToken(){
        return localStorage.getItem("APIKey");
    }

    GetUserId(){
        return localStorage.getItem("UserId");
    }

    GetCurrentUserName(){
        return localStorage.getItem("CurrentUserName");
    }

    SubscribeForEmail(UserId:string){

    }

}
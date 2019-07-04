import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpBackend } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../_models/user.models';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { DataForTocken } from '../_models/DataForTocken.model';

/*
Things to store in 
*/

@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    private httpClient: HttpClient;

    constructor(private http: HttpClient, private config: GlobalParams, private handler: HttpBackend) {
        // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('APIKey')));
        // this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('APIKey')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.httpClient = new HttpClient(handler);
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(loginDetails: DataForTocken): Observable<any> {
        const body = new HttpParams()
            .set('grant_type', 'password')
            .set('username', loginDetails.username)
            .set('password', loginDetails.password)

        return this.httpClient.post<any>(this.config.PrimaryAPI + "owin/Token", body)
            .pipe(map(user => {
                localStorage.setItem('APIKey', JSON.stringify(user.access_token));
                this.currentUserSubject.next(user);
                return user;
            })
            );

    }

    getUserInfo(loginDetails: DataForTocken): Observable<any> {
        return this.http.get(this.config.PrimaryAPI + "/api/Account/FindUser" + "?username=" + loginDetails.username + "&password=" + loginDetails.password)
    }

    logout() {
        localStorage.removeItem('APIKey');
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
}
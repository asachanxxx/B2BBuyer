import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../_models/user.models';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';
import { DataForTocken } from '../_models/DataForTocken.model';



@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private config: GlobalParams) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(loginDetails: DataForTocken):Observable<any> {
        const body = new HttpParams()
            .set('grant_type', 'password')
            .set('username', loginDetails.username)
            .set('password', loginDetails.password)

        return this.http.post("http://localhost:50965/owin/Token", body)
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    loginDummy() {

        this.config.LoggedUserProfile = { id: 1, firstName: "Asanga", lastName: "Chan", password: "123", token: this.config.ApiKey, username: "Asanga Chandrakumara" }
        localStorage.setItem('currentUserobj', JSON.stringify(this.config.LoggedUserProfile.username));
    }
    logoutDummy() {
        this.config.LoggedUserProfile = undefined;
        localStorage.removeItem('currentUserobj');
    }
}
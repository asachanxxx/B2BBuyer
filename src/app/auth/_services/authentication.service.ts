import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user.models';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';



@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private config:GlobalParams) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.config.ApiKey}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    loginDummy(){
       
        this.config.LoggedUserProfile = {id:1,firstName:"Asanga",lastName:"Chan",password:"123",token:this.config.ApiKey,username:"Asanga"}
        localStorage.setItem('currentUserobj', JSON.stringify( this.config.LoggedUserProfile.username));
    }
    logoutDummy(){
        this.config.LoggedUserProfile = undefined;
        localStorage.removeItem('currentUserobj');
    }
}
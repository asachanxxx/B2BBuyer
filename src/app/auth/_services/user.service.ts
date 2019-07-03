import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user.models';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient,private config:GlobalParams) { }

    getAll() {
        return this.http.get<User[]>(`${this.config.PrimaryAPI}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.config.PrimaryAPI}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${this.config.PrimaryAPI}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.config.PrimaryAPI}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.config.PrimaryAPI}/users/${id}`);
    }
}